// サイコロ関数
const diceRoll = () => {
  const max = 6;
  const min = 1;
  const result = Math.floor(Math.random() * max + min);
  return result;
}

// チンチロ関数
const seeLow = () => {
  const dice1 = diceRoll();
  const dice2 = diceRoll();
  if (dice1 === dice2) {
    if (dice1 === 1) {
      console.log(`[${dice1}] [${dice2}] -> ピンゾロ！倍量！無料！`);
    } else {
      console.log(`[${dice1}] [${dice2}] -> ゾロ目！無料！`);
    }
  } else if (((dice1 + dice2) % 2) === 0) {
    console.log(`[${dice1}] [${dice2}] -> 偶数！半額！`);
  } else {
    console.log(`[${dice1}] [${dice2}] -> 奇数！倍量！倍額！`);
  }
}

// main
seeLow();