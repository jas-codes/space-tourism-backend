var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var spaceshipController = require('../controllers/spaceshipController');
var should = chai.should();

chai.use(chaiHttp);

//parent block
describe('/GET all spaceships', () => {
    it('it should GET all the spaceships', (done) => {
        chai.request(app)
            .get('/spaceship/spaceships')
            .end((err, res) => {
                chai.assert.equal(res.status, 200);
                res.body.should.be.a('array');
                done();
            });
    });
});