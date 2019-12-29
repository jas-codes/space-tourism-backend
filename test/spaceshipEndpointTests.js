var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var spaceshipController = require('../controllers/spaceshipController');
var should = chai.should();

chai.use(chaiHttp);

var spaceshipId;

//parent block
describe('/GET Tests for spaceship Controller', () => {
    it('it should GET all the spaceships', (done) => {
        chai.request(app)
            .get('/spaceship/spaceships')
            .end((err, res) => {
                chai.assert.equal(res.status, 200);
                res.body.should.be.a('array');
                this.spaceshipId = res.body[0].shipId 
                done();
            });
    });
    
    it('it should GET the spaceships by the id', (done) => {
        chai.request(app)
            .get('/spaceship/spaceships/5e068f10e15d013cf0ac0715')
            .end((err, res) => {
                chai.assert.equal(res.status, 200);
                res.body.should.have.property('nameCode');
                res.body.should.be.a('object');
                done();
            });
    });
})