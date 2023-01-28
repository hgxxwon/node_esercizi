function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

  const players = ["Joe", "Caroline",  "Sabrina"];
        luckyDraw(players[0])
      .then(res => {
        console.log(res);
        return luckyDraw(players[1]);
      })
      .then(res => {
        console.log(res);
        return luckyDraw(players[2]);
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.message);
      });



