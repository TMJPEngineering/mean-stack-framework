'use strict';

var route = require('./../../../vendor/router');

module.exports = function(app) {
    route.get('/login', 'auth.controller@login');
    route.get('/register', 'auth.controller@register');
};
