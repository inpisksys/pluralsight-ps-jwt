var jwt = require('jwt-simple');

module.exports = function(request, response){
    var token = request.headers.authorization.split(' ')[1];
    var payload = jwt.decode(token, "sh...");

    if(!payload.sub) {
        response.status(401).send({message: 'Authentication failed'});
    }

    if(!request.headers.authorization) {
        return response.status(401).send(            {
            message: 'Yo are not authorized'
        });
    }

    response.json(jobs);
};


var jobs = [
    'Cook',
    'Super Hero',
    'Unicorn Wisperer',
    'Toast Inspector'
];
