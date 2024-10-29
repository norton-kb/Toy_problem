const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkSpeed(speed) {
  const speedLimit = 70;
  const demeritPointsPerSpeedingUnit = 5;
  const maxDemeritPoints = 12;

  const speedingPoints = Math.floor((speed - speedLimit) / demeritPointsPerSpeedingUnit);

  if (speedingPoints <= 0) {
    console.log("Ok");
  } else if (speedingPoints <= maxDemeritPoints) {
    console.log(`Points: ${speedingPoints}`);
  } else {
    console.log("License suspended");
  }
}

rl.question("Enter the car's speed: ", (speed) => {
  const carSpeed = parseInt(speed);
  if (isNaN(carSpeed)) {
    console.log("Invalid input. Please enter a number.");
  } else {
    checkSpeed(carSpeed);
  }
  rl.close();
});