// création du client
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const session = require('express-session');
const express = require('express');
const bcrypt = require('bcrypt');
const Marsupilami = require('./model/marsupilami');

const app = express();

// Définition de l'url de mongoDB
const url = 'mongodb://localhost:27017';

// Définition de la bdd
const base = 'Appartoo';

let db;
// Connection à la bdd

MongoClient.connect(url, {
    useNewUrlParser: true
}, (err, conn) => {
    if (err) {
        throw err;
    }
    console.log("Connection MongoDB OK");
    db = conn.db(base);
});

// Middleware JSON
app.use(express.json());
app.use(session({
    secret: 'Ougabounga',
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: 20 * 1000
     }
}));

app.use(express.static(__dirname + '/dist/marsupilamiClient'));

//API marsupilamis pour CRUD

// GET liste des marsupilamis
// retour l'array des marsupilamis inscrits
app.get('/api/marsupilamis', (req, res) => {
    // Query
    db.collection("Marsupilami").find({}).toArray((err, result) => {
        if (err) 
        return res.status(404).send({"message":"Non trouvé"});       
        res.json(result);
    })
    // GET les profil d'un marsupilami
}).get('/api/marsupilamis/:id', (req, res) => {
    const id = req.params.id;
    db.collection("Marsupilami").findOne({
        "_id": new ObjectId(id)
    }, (err, result) => {
        if (err) {
            return res.status(404).send({"message":"Non trouvé"});
        }
        res.json(result);
    })
    // POST pour inscrire un nouveau marsupilami
}).post('/api/marsupilamis', (req, res) => {
    const ip_user = req.body;
    const newUser = new Marsupilami(ip_user.login, ip_user.mdp, ip_user.date_naissance, ip_user.famille, ip_user.race, ip_user.nourriture);
    db.collection("Marsupilami").insertOne(newUser,
        (err, obj) => {
            if (err) {
                return res.status(409).send({ "message": "Login existant"});
            } 

            res.status(201).json(obj.ops[0]);
        })
    // PUT pour modifier les informations d'un marsupilami
}).put('/api/marsupilamis/:id', (req, res) => {
    const id = req.params.id;
    const marsupilami = new Marsupilami(req.body.login, req.body.mdp, req.body.date_naissance, req.body.famille, req.body.race, req.body.nourriture);
    db.collection("Marsupilami").updateOne({
        "_id": new ObjectId(id)
    }, {
            $set: {
                "login": marsupilami.login,
                "mdp": marsupilami.mdp,
                "date_naissance": marsupilami.date_naissance,
                "famille": marsupilami.famille,
                "race": marsupilami.race,
                "nourriture": marsupilami.nourriture
            }
        },
        (err, obj) => {
            if (err) {
                return res.status(404).send({"message":"Non trouvé"});
            }
            res.json(obj);
        })
    // DELETE pour supprimer un marsupilami
}).delete('/api/marsupilamis/:id', (req, res) => {
    const id = req.params.id;
    db.collection("Marsupilami").deleteOne({
        "_id": new ObjectId(id)
    }, (err, obj) => {
        if (err) {
            return res.status(404).send({"message":"Non trouvé"});
        }
        res.json(obj);
    })
});

// Gestion des amis
// POST pour ajouter un ami en ajoutant celui-ci à la liste des ids amis de l'utilisateur
app.post('/api/amis/:id', (req, res) => {
    if(req.params.id == req.session.marsupiId){
        return res.status(409).send({"message":"Ajout impossible"});
    }
    const id_ami = new ObjectId(req.params.id);
    var valid = true;
    db.collection("Marsupilami").findOne({ "_id": id_ami}, (err, result) => {
        if(err || !result){
            valid = false;
        }
    });
    if(!valid){
        return res.status(404).send({"message":"Utilisateur inexistant"});
    }
    db.collection("Marsupilami").findOne({"_id": new ObjectId(req.session.marsupiId)}, (err, user) => {
        if(err||!user)
            return res.status(403).send({"message":"Login requis"});        
    
        for(var id of user.friend_ids)        
            if(id.equals(id_ami))
                return res.status(409).send({"message":"Ami déjà ajouté"});
                                
            
        db.collection("Marsupilami").updateOne({ "_id": user._id },
        {
            $push: {
                "friend_ids": id_ami
            }
        }, (err) => {
            if (err) 
                throw err;
            
            db.collection("Marsupilami").updateOne({ "_id": id_ami },
                {
                    $push: {
                        "friend_ids": user._id
                    }
                }, (err, obj) => {
                    if (err) 
                        return res.status(404).send({"message":"Non trouvé"});                   
                    return res.status(201).send(obj);
                });
        });
    });  
    
    // DELETE pour supprimer un ami en le supprimant de la liste des ids amis de l'utilisateur
}) 
    .delete('/api/amis/:id', (req, res) => {
        const id_ami = req.params.id;
        db.collection("Marsupilami").updateOne({ "_id": new ObjectId(req.session.marsupiId) },
            {
                $pull: {
                    "friend_ids": new ObjectId(id_ami)
                }
            }, (err, obj) => { 
                if (err) {
                    return res.status(404).send({"message":"Non trouvé"});
                }
                db.collection("Marsupilami").updateOne({ "_id": new ObjectId(id_ami) },
                    {
                        $pull: {
                            "friend_ids": new ObjectId(req.session.marsupiId)
                        }
                    }, (err, obj) => {
                        if (err) {
                            return res.status(404).send({"message":"Non trouvé"});
                        }
                        res.json(obj);
                    });
            });
    });

    // GET pour voir les amis de l'utilisateur connecté
app.get('/api/amis', (req, res) => {
    const id = req.session.marsupiId;
    db.collection("Marsupilami").findOne({
        "_id": new ObjectId(id)
    }, (err, result) => {
        if (err) 
            return res.status(404).send({"message":"Non trouvé"});
        
        db.collection("Marsupilami").find({ "_id" : { $in: result.friend_ids }}).toArray((err, obj) => {
            if(err)
                return res.status(404).send({"message":"Non trouvé"});
            res.json(obj);
        });
    });
});

// authentification 
// login avec POST
app.post('/api/login', (req, res) => {
    db.collection("Marsupilami").findOne({ "login": req.body.login }, (err, obj) => {
        if (err) {
            return res.status(404).send({"message":"Non trouvé"});
        }
        if (bcrypt.compareSync(req.body.mdp, obj.mdp)) {
            req.session.marsupiId = obj._id;        
            res.json(obj);
        } else {
            res.status(403);
            res.send({"message":"Mot de passe incorrect"});
            return;
        }

    });
    // logout avec GET
})
    .get('/api/logout', (req, res) => {
        if (req.session) {
            req.session.destroy((err) => {
                if (err) {
                    return res.status(404).send({"message":"Non trouvé"});
                } else {
                    res.send({"message":"Déconnecté"});
                }
            });
        }
    });

app.listen(5000, "localhost", () => {
    console.log("Ecoute sur le port 5000...");
});