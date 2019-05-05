const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//Define a schema
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const roles = ['user', 'admin'];

const UserSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    required: true
  },
  lastname: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  role: {
    type: String,
    enum: roles,
    default: 'user'
  },
  picture: {
    type: String,
    trim: true
  },
  function: {
    type: String,
    trim: true
  },
  linkedinProfile: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

//// hash user password before saving into database
UserSchema.pre('save', function(next) {
  try {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    return next();
  } catch (error) {
    return next(error);
  }
});

mapIntlSchema('user', UserSchema);
mapIntlSchema('users', UserSchema);

const User = mongoose.model('User', UserSchema);

// console.log('Try to generate admin user ...');
// User.findOne({
//   email: 'admin@silicom.fr'
// }, function(err, userInfo) {
//   if (err) {
//     console.log('an error has occured')
//   } else {
//     if(userInfo === null) {
//       console.log('Create user');
//       User.create({
//         firstname: 'silicom',
//         lastname: 'admin',
//         email: 'admin@silicom.fr',
//         password: 'admin',
//         role: 'admin',
//         linkedinProfile: '{}'
//       }, function(err, result) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("User generated successfully!!!")
//         }
//       });
//     }else{
//       console.log('User already exist');
//     }
//   }
// });

module.exports = User;
