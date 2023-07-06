const calculateCoinsAndGems = (timeAvg) => {
  let coins = 0
  let gems = 0;

  if (!isNaN(timeAvg)) {
    if (timeAvg >= 0 && timeAvg <= 100) {
      coins = 83;
      gems = 3;
    }
    else if (timeAvg > 100 && timeAvg <= 140) {
      coins = 61;
      gems = 2;
    }
    else if (timeAvg > 140 && timeAvg <= 190) {
      coins = 30;
    }
    else if (timeAvg > 190 && timeAvg <= 220) {
      coins = 21;
    }
    else if (timeAvg > 220 && timeAvg <= 240) {
      coins = 17;
    }
    else if (timeAvg > 240 && timeAvg <= 260) {
      coins = 11;
    }
    else if (timeAvg > 260 && timeAvg <= 300) {
      coins = 8;
    }
    else if (timeAvg > 300 && timeAvg <= 420) {
      coins = 4;
    }
    else {
      coins = 2;
    }
  }
  return [coins, gems];
}

export default calculateCoinsAndGems;