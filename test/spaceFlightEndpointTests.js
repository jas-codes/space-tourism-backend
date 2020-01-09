var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();

chai.use(chaiHttp);

let spaceFlight = {
    flightNumber: 'testFlight1',
    ship: 1,
    departureDate: new Date(Date.now()),
    arrivalDate: new Date(Date.now()),
    gate: '01',
    destination: 'Mun',
    availableSeats: 1,
    leavingLocation: 'the sun'
}

//parent block
describe('/Endpoint Tests for spaceFlights', () => {
    describe('Get tests for spaceflights endpoint', () => {
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
    });

    describe('Post test for spaceflights endpoint', () => {
        it('it should POST a spaceFlight', () => {
            chai.request(app)
                .post('/flights/spaceflight')
                .send(spaceFlight)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                });
        });

        afterEach(() => {
            let body = {
                flightNumber: spaceFlight.flightNumber
            };
            chai.request(app)
                .delete(`/flights/spaceflight`)
                .send(body);
        });
    });

    describe('Delete tests for spaceflights endpoint', () => {
        it('should DELETE a spaceFlight', () => {
            let body = {
                flightNumber: spaceFlight.flightNumber
            };
            chai.request(app)
                .delete(`/flights/spaceflight`)
                .send(body)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('n');
                });
        });
    });
})