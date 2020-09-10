var schedule = require('node-schedule');

schedule.scheduleJob('0/5 * * * * *', function(){
  console.log('find data and tweet');
});

