const User = require('../../app/models/users');

let users_seeder = () => {
  
  User.findOne({
    email: 'admin@silicom.fr',
  }, function(err, userInfo) {
    if (err) {
      console.log('an error has occured');
    } else {
      if (userInfo === null) {
        console.log('Create user');
        User.create({
          firstname: 'silicom',
          lastname: 'admin',
          email: 'admin@silicom.fr',
          password: 'admin',
          role: 'admin',
          linkedinProfile: '{}',
        }, function(err, result) {
          if (err) {
            console.log(err);
          } else {
            console.log('User generated successfully!!!');
          }
        });
      } else {
        console.log('User already exist');
      }
      
      
    }
  });
  
};

module.exports = users_seeder;

