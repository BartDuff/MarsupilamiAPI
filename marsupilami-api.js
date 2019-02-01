// création du client
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const session = require('express-session');
const express = require('express');

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
    saveUninitialized: false
}));

//API marsupilamis pour CRUD

// GET liste des marsupilamis
// retour l'array des marsupilamis inscrits
app.get('/api/marsupilamis', (req, res) => {
    // Query
    db.collection("Marsupilami").find({}).toArray((err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    })
    // GET les profil d'un marsupilami
}).get('/api/marsupilamis/:id', (req, res) => {
    const id = req.params.id;
    db.collection("Marsupilami").findOne({
        "_id": new ObjectId(id)
    }, (err, result) => {
        if (err) {
            throw err;
        }
        res.json(result);
    })
    // POST pour inscrire un nouveau marsupilami
}).post('/api/marsupilamis', (req, res) => {
    console.log(req.body);
    db.collection("Marsupilami").insertOne(req.body,
        (err, obj) => {
            if (err) {
                throw err;
            }
            res.json(obj);
        })
    // PUT pour modifier les informations d'un marsupilami
}).put('/api/marsupilamis/:id', (req, res) => {
    const id = req.params.id;
    const marsupilami = req.body;
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
                throw err;
            }
            res.json(obj);
        })
    // DELETE pour supprimer un marsupilami
}).delete('/api/marsupilamis/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    db.collection("Marsupilami").deleteOne({
        "_id": new ObjectId(id)
    }, (err, obj) => {
        if (err) {
            throw err;
        }
        res.json(obj);
    })
});

// Gestion des amis
// PUT pour ajouter un ami en ajoutant celui-ci à la liste des ids amis de l'utilisateur
app.put('/api/amis/ajouter/:id', (req, res) => {
    const id_ami = req.params.id;
    db.collection("Marsupilami").updateOne({ "_id": new ObjectId(req.session.marsupiId) },
        {
            $push: {
                "friend_ids": new ObjectId(id_ami)
            }
        }, (err, obj) => {
            if (err) {
                throw err;
            }
            db.collection("Marsupilami").updateOne({ "_id": new ObjectId(id_ami) },
                {
                    $push: {
                        "friend_ids": new ObjectId(req.session.marsupiId)
                    }
                }, (err, obj) => {
                    if (err) {
                        throw err;
                    }
                    res.json(obj);
                });
        });
    // PUT pour supprimer un ami en le supprimant de la liste des ids amis de l'utilisateur
}) 
    .put('/api/amis/supprimer/:id', (req, res) => {
        const id_ami = req.params.id;
        db.collection("Marsupilami").updateOne({ "_id": new ObjectId(req.session.marsupiId) },
            {
                $pull: {
                    "friend_ids": new ObjectId(id_ami)
                }
            }, (err, obj) => {
                if (err) {
                    throw err;
                }
                db.collection("Marsupilami").updateOne({ "_id": new ObjectId(id_ami) },
                    {
                        $pull: {
                            "friend_ids": new ObjectId(req.session.marsupiId)
                        }
                    }, (err, obj) => {
                        if (err) {
                            throw err;
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
        if (err) {
            throw err;
        }
        db.collection("Marsupilami").find({ "_id" : { $in: result.friend_ids }}).toArray((err, obj) => {
            if(err){
                throw err;
            }
            res.json(obj);
        });
    });
});

// authentification 
// login avec POST
app.post('/api/login', (req, res) => {
    db.collection("Marsupilami").findOne({ "login": req.body.login }, (err, obj) => {
        if (err) {
            throw err;
        }
        if (obj.mdp === req.body.mdp) {
            req.session.marsupiId = obj._id;
            console.log("Logged in!");
        } else {
            res.end("Mot de passe incorrect!");
        }
        res.json(obj);
    });
    // logout avec GET
})
    .get('/api/logout', (req, res) => {
        if (req.session) {
            req.session.destroy((err) => {
                if (err) {
                    throw err;
                } else {
                    console.log("logged out");
                    res.redirect('/');
                }
            });
        }
    });

app.listen(5000, "localhost", () => {
    console.log("Ecoute sur le port 5000...");
});