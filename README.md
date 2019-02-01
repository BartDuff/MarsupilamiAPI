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
(Marsupilamis should have these attibutes, changing them will alter the PUT request for modifications:
"login" => login ,
"mdp" => password ,
"date_naissance" => birthday,
"famille" => family ,
"race" => breed ,
"nourriture" => food,
"friend_ids" => set to [] to have an empty list at registration


get('/api/marsupilamis') => get all users
get('/api/marsupilamis/:id') => get one user
post('/api/marsupilamis') => add new user
put('/api/marsupilamis/:id') => modifiy user's info
delete('/api/marsupilamis/:id') => delete user

<strong>Managing friends:</strong>

put('/api/amis/ajouter/:id') => add a friend
put('/api/amis/supprimer/:id') => remove a friend
get('/api/amis') => get friends' list

<strong>Authentication:</strong>

post('/api/login') => login
get('/api/logout') => logout
