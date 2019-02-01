<strong># MarsupilamiAPI</strong>
Api built with Node.js, Express.js and MongoDB

run npm install to get all dependencies

The API performs basic CRUD operations as well as adding new Friends to a Marsupilami's friend list

Change these values in the main file to set up your MongoDB database environment:

const url = 'mongodb://localhost:27017';
const base = 'Appartoo';

You'll have to define a collection named "Marsupilami" or change the name in the queries in order to perform the queries:
db.collection("Marsupilami")

<strong>Basic CRUD operations:</strong>
(Marsupilamis should have these attibutes, changing them will alter the PUT request for modifications:<br>
"login" => login , <br>
"mdp" => password , <br>
"date_naissance" => birthday, <br>
"famille" => family , <br>
"race" => breed , <br>
"nourriture" => food, <br>
"friend_ids" => set to [] to have an empty list at registration <br>


get('/api/marsupilamis') => get all users <br>
get('/api/marsupilamis/:id') => get one user <br>
post('/api/marsupilamis') => add new user <br>
put('/api/marsupilamis/:id') => modifiy user's info <br>
delete('/api/marsupilamis/:id') => delete user <br>

<strong>Managing friends:</strong>

put('/api/amis/ajouter/:id') => add a friend <br>
put('/api/amis/supprimer/:id') => remove a friend <br>
get('/api/amis') => get friends' list <br>

<strong>Authentication:</strong>

post('/api/login') => login <br>
get('/api/logout') => logout <br>
