class AuctionLogic {
    participants = 0;
    readyParticipants = 0;
    bids = [];
    highestBid = 0;
    flightNumber

    constructor(flightNumber) {
        this.flightNumber = flightNumber
    }

    getParticipants() {
        return this.participants;
    }

    addParticipants() {
        this.participants++;
        return this.participants;
    }

    removeParticipants() {
        if (this.participants > 0) {
            this.participants--;
            this.readyParticipants--;
        } else {
            this.readyParticipants = 0;
            this.participants = 0;
        }
        return this.participants;
    }

    addReadyParticipants() {
        this.readyParticipants++;
        return this.readyParticipants;
    }

    ready() {
        if (this.readyParticipants != this.participants)
            return false;
        else
            return true;
    }

    beginTimer(io, flight) {
        var timeLeft = 21;
        var timer = setInterval(function () {
            timeLeft--;
            if (timeLeft < 0) {
                io.in(flight).emit('endAuction', true);
                clearInterval(timer);
            } else {
                io.in(flight).emit('timeRemaining', timeLeft);
            }
        }, 1000);
    }

    setHighestBid(bid, io) {
        bid = parseInt(bid);
        if (bid > this.highestBid) {
            this.highestBid = bid;
            this.bids.push(bid);
            io.in(this.flightNumber).emit('newHighestBid', this.highestBid);
            io.in(this.flightNumber).emit('biddingHistory', this.bids);
        }
    }
}

module.exports = AuctionLogic;
