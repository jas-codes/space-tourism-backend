var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();
var AuctionLogic = require('../Logic/AuctionLogic');
var assert = require('chai').assert;


chai.use(chaiHttp);

var auctionLogic = new AuctionLogic('');

describe('AuctionLogic Tests', () => {

    beforeEach(function () {
        auctionLogic = new AuctionLogic('');
    })

    describe('addParticipants Test', () => {
        it('should increment participants by 1', () => {
            let expect = auctionLogic.participants + 1;
            assert.equal(auctionLogic.addParticipants(), expect)
        });
    });

    describe('removeParticipants Test', () => {
        testCases = [
            { participants: 0, expect: 0 },
            { participants: 10, expect: 9 }
        ]

        testCases.forEach((test, index) => {
            it(`should decrement participants by ${(test.participants - test.expect)} (testCase: ${index + 1})`, () => {
                auctionLogic.participants = test.participants;
                auctionLogic.removeParticipants();
                assert.equal(auctionLogic.participants, test.expect)
            });
        });
    });

    describe('addReadyParticipants Test', () => {
        it('should increment readyParticipants by 1', () => {
            let expect = auctionLogic.readyParticipants + 1;
            auctionLogic.addReadyParticipants();
            assert.equal(auctionLogic.readyParticipants, expect);
        });
    });

    describe('removeReadyParticipants Test', () => {
        it('should decrement readyParticipants by 1', () => {
            auctionLogic.readyParticipants = 10;
            let expect = auctionLogic.readyParticipants - 1;
            auctionLogic.removeReadyParticipants();
            assert.equal(auctionLogic.readyParticipants, expect);
        });
    });

    describe('ready Test', () => {
        testCases = [
            {participants: 0, readyParticipants: 0, expect: true},
            {participants: 1, readyParticipants: 0, expect: false},
            {participants: 0, readyParticipants: 1, expect: false}
        ];

        testCases.forEach((test, index) => {
            it(`Should evaluate ${test.expect} given ready participants ${test.readyParticipants} and total participants ${test.participants}`, () => {
                auctionLogic.readyParticipants = test.readyParticipants;
                auctionLogic.participants = test.participants;
                assert.equal(auctionLogic.ready(), test.expect)
            })
        })
    })

});