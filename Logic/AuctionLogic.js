class AuctionLogic {
    participants = 0;
    readyParticipants = 0;
    bids = [];
    highestBid = 0;
    flightNumber;
    startTimerValue = 21;
    auctionTimeRemaining = 21;

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
        } else {
            this.readyParticipants = 0;
            this.participants = 0;
        }
        return this.participants;
    }

    //sets all values to zero in the auction as a just in case
    closeAuction() {
        this.participants = 0;
        this.readyParticipants = 0;
        this.bids = [];
        this.highestBid = 0;
    }

    removeReadyParticipants() {
        this.readyParticipants--;
        return this.readyParticipants;
    }

    addReadyParticipants() {
        this.readyParticipants++;
        return this.readyParticipants;
    }

    //sets whether players are ready or not
    ready() {
        if (this.readyParticipants != this.participants)
            return false;
        else
            return true;
    }

    beginTimer(io, flight) {
        let context = this;// provide context to interval function

        if (this.auctionTimeRemaining >= this.startTimerValue) { //if timer already counting don't start another
            var timer = setInterval(function () {
                context.auctionTimeRemaining--;
                //emit updates or end of auction
                if (context.auctionTimeRemaining < 0) {
                    io.in(flight).emit('endAuction', true);
                    clearInterval(timer);
                } else {
                    io.in(flight).emit('timeRemaining', context.auctionTimeRemaining);
                }
            }, 1000, context);
        }
    }

    //sets the highest bid with validation
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
