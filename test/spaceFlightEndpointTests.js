var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();

chai.use(chaiHttp);


//parent block
describe('/GET all spaceFlights', () => {
    it('it should GET all the spaceflights', (done) => {
        chai.request(app)
            .get('/flights/spaceflights')
            .end((err, res) => {
                chai.assert.equal(res.status, 200);
                res.body.should.be.a('array');
                res.body[0].should.be.a('object');
                res.body[0].should.have.property('arrivalDate');
                done();
            });
    });
})