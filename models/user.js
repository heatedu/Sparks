const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    min: 0,
    required: true
  }
})

const User = mongoose.model('User', userSchema);

const usertemp1 = new User({
  name: 'Samarth',
  email: 'samarth.btp.1234@gmail.com',
  credits: 1000,
});
//usertemp1.save();

const usertemp2 = new User({
  name: 'Test2',
  email: 'test2@gmail.com',
  credits: 2000,
});
//usertemp2.save();

const usertemp3 = new User({
  name: 'Test3',
  email: 'test3@gmail.com',
  credits: 3000,
});
//usertemp3.save();

const usertemp4 = new User({
  name: 'Test 4',
  email: 'test4@gmail.com',
  credits: 4000,
});
 //usertemp4.save();

const usertemp5 = new User({
  name: 'Test 5',
  email: 'test5@gmail.com',
  credits: 5000,
});
//usertemp5.save();

const usertemp6 = new User({
  name: 'Test 6',
  email: 'test6@gmail.com',
  credits: 6000,
});
//usertemp6.save();

const usertemp7 = new User({
  name: 'Test 7',
  email: 'test7@gmail.com',
  credits: 7000,
});
//usertemp7.save();

module.exports = User;
