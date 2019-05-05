const User = require(NAMESPACES.model.User);

let users_seeder = () => {
  return new Promise((resolv, reject) => {
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
              reject();
            } else {
              console.log('User generated successfully!!!');
              resolv(result._id);
            }
          });
        } else {
          console.log('User already exist');
          resolv(userInfo._id);
        }


      }
    });

  })

};

module.exports = users_seeder;
