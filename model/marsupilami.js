const bcrypt = require('bcryptjs');

class Marsupilami {
    constructor(login, mdp, date_naissance, famille, race, nourriture){
        this.login = login;
        this.mdp = bcrypt.hashSync(mdp, 10);
        this.date_naissance = new Date(date_naissance);
        this.famille = famille;
        this.race = race;
        this.nourriture = nourriture;
        this.friend_ids = [];
    }
}

module.exports = Marsupilami;