
var participants = 0;
var readyParticipants = 0;

function getParticipants() {
    return participants;
}

function addParticipants(){
    participants++;
    return participants;
}

function removeParticipants() {
    if(participants > 0){
        participants--;
        readyParticipants--;
    } else {
        readyParticipants = 0;
        participants = 0;
    }
    return participants;
}

function addReadyParticipants(){
    readyParticipants++;
    return readyParticipants;
}

function ready() {
    console.log(readyParticipants);
    console.log(participants);
    console.log(readyParticipants != participants);

    if(readyParticipants != participants)
        return false;
    else 
        return true;
}

function beginTimer(io, flight) {
    var timeLeft = 11;
    var timer = setInterval(function(){
        timeLeft--;
        if(timeLeft < 0){
            io.in(flight).emit('endAuction', true);
            clearInterval(timer);
        } else {
            io.in(flight).emit('timeRemaining', timeLeft);
        }
    }, 1000);
}


module.exports.beginTimer = beginTimer;
module.exports.getParticipants = getParticipants;
module.exports.ready = ready;
module.exports.removeParticipants = removeParticipants;
module.exports.addReadyParticipants = addReadyParticipants;
module.exports.addParticipants = addParticipants;
