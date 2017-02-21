/**
 * Created by osmeteor on 2/21/17.
 */
'use strict'
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should()
    ,assert=chai.assert;
// let assert = require('chai').assert;
// let should = require('chai').should() //actually call the function
var app = require('../index.js');
var request = require('supertest')(app);
describe('GET /users', function() {
    it('respond with json', function() {
        return request
            .get('/api')
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
             assert(response.body.status, 200);
             assert(response.body.msg, 'success')
    })
    });
});
