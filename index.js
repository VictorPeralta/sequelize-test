const bcrypt = require('bcryptjs');
const User = require('./models/user.js');
const Activity = require('./models/activity.js');
const ActivityLog = require('./models/activityLog.js');
const sequelize = require('./db.js')

sequelize.sync()
  .then(() => User.create({
    email: 'janedoe6@hehehehe.com',
    password: bcrypt.hashSync("password", 8)
  }))
  .then(jane => {
    console.log(jane.toJSON());
    console.log("ID: " + jane.toJSON().id);

    return Activity.create({
      userID: jane.toJSON().id,
      name: 'Test Activity Jane5'
    })
  })
  .then(activity => {
    console.log(activity.toJSON());

    return ActivityLog.create({
      activityID: activity.toJSON().id,
      timeStart: new Date(),
      duration: 31
    })
  })
  .then(actLog => console.log(actLog.toJSON()));