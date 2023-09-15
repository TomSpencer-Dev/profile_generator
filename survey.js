const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let info = {};

rl.question(`What's your name? Nicknames are also acceptable :)  `, function(answer) {
  info.name = answer;

  rl.question(`What's an activity you like doing ? `, function(answer) {
    info.activity = answer;

    rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)  `, function(answer) {
      info.meal = answer;

      rl.question(`What's your favourite thing to eat for that meal ? `, function(answer) {
        info.food = answer;

        rl.question(`Which sport is your absolute favourite?  `, function(answer) {
          info.sport = answer;

          rl.question(`What is your superpower?   `, function(answer) {
            info.superpower = answer;
            console.log(`${info.name} loves ${info.activity} and eating ${info.food} for ${info.meal}. To keep active, ${info.name} enjoys ${info.sport}. ${info.name}'s super power is ${info.superpower}`);

            rl.close();
          });
        });
      });
    });
  });
});

