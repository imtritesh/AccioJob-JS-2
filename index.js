function OpeningCeremony(callBack) {
        console.log("Let the games begin");
        const score = {red: 0, blue: 0, green: 0, yellow: 0};
        setTimeout(() => {
          Race100M(score, callBack);
        }, 1000);
      }
      
      function Race100M(score, callBack) {
        const times = {};
        for (const color of Object.keys(score)) {
          times[color] = Math.floor(Math.random() * 6) + 10;
        }
        console.log("Race100M times:", times);
        const sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);
        score[sortedColors[0]] = score[sortedColors[0]] + 50;
        score[sortedColors[1]] = score[sortedColors[1]] + 25;
        console.log("Race100M scores:", score);
        setTimeout(() => {
          LongJump(score, callBack);
        }, 3000);
      }
      
      function LongJump(score, callBack) {
        const winningColor = ['red', 'yellow', 'green', 'blue'][Math.floor(Math.random() * 4)];
        score[winningColor] = score[winningColor] + 150;
        console.log(`LongJump winner: ${winningColor}`);
        console.log("LongJump scores:", score);
        setTimeout(() => {
          HighJump(score, callBack);
        }, 2000);
      }
      
      function HighJump(score, callBack) {
        const color = prompt("What colour secured the highest jump?");
        if (color && score.hasOwnProperty(color)) {
          score[color] = score[color] + 100;
        } else {
          console.log("Event was cancelled");
        }
        console.log("HighJump scores:", score);
        AwardCeremony(score);
      }
      
      function AwardCeremony(score) {
        const sortedColors = Object.keys(score).sort((a, b) => score[b] - score[a]);
        console.log(`${sortedColors[0]} came first with ${score[sortedColors[0]]} points.`);
        console.log(`${sortedColors[1]} came second with ${score[sortedColors[1]]} points.`);
        console.log(`${sortedColors[2]} came third with ${score[sortedColors[2]]} points.`);
      }
      
      OpeningCeremony((score) => {
        console.log("Callback 1 scores:", score);
        Race100M(score, (score) => {
          console.log("Callback 2 scores:", score);
          LongJump(score, (score) => {
            console.log("Callback 3 scores:", score);
            HighJump(score, (score) => {
              console.log("Callback 4 scores:", score);
            });
          });
        });
      });