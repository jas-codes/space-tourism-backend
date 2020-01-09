var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var spaceshipController = require('../controllers/spaceshipController');
var should = chai.should();

chai.use(chaiHttp);

var spaceshipId;

let ship = {
    "nameCode": "testShip1",
    "maxSpeed": 11.08,
    "totalSeats": 3,
    "age": 51,
    "fuelCapacity": 203400
}

//parent block
describe('Endpoint Tests for spaceship Controller', () => {
    describe('Spaceship Get Tests', () => {
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
    });

    describe('Spaceship Post Tests', () => {
        it('it should POST a spaceship', () => {
            chai.request(app)
                .post('/spaceship/spaceship')
                .send(ship)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                });
        });

        afterEach(() => {
            let body = {
                nameCode: ship.nameCode
            }
            chai.request(app)
                .delete(`/spaceship/spaceship`)
                .send(body);
        });
    });

    describe('Spaceship Delete Tests', () => {
        it('should DELETE a spaceship', () => {
            let body = {
                nameCode: ship.nameCode
            };
            chai.request(app)
                .delete(`/spaceship/spaceship`)
                .send(body)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('n');
                });
        });
    });

});