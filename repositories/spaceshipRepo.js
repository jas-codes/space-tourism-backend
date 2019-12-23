const spaceshipSchema = require("../models/spaceship");

async function getSpaceships() {
    return await spaceshipSchema.Spaceship.find();
}
