const _ = {};
_.set = require('lodash.set');
_.get = require('lodash.get');

let user = {
    email: 'drogho@fuck.you',
    name: 'west king',
    hobbies: [
        'looking for kaleshies',
        'stealing horses',
        'running'
    ] 
};

const queries = [];

queries.push(_.get(user,'hobbies[2]','noooooo'));
queries.push(_.get(user,'hobbies[8]','noooooo'));
queries.push(_.get(user,'name','noooooo'));
_.set(user, 'hobbies[1]', 'not stealing just buying horses' );
queries.push(_.get(user,'hobbies[1]','noooooo'));

queries.forEach(query => console.log(query));
