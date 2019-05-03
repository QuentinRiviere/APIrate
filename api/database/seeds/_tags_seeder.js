const Tag = require('../../app/models/blog/tags');

let fakeTags = [];
for (let i = 0; i < 5; i++) {
  fakeTags.push({
    name: `Tag ${i}`
  })
}



let Tags_seeder = () => {
  return new Promise((resolv, reject) => {

    let fakeTagIds = [];
    fakeTags.forEach((tag, i) => {
      console.log(`Create Tag ${tag} in database`);
      console.log(Tag.name);
      Tag.create({
        name: tag.name
      }, function(err, res) {
        if (err) {
          console.log(err)
          reject();
        } else {
          fakeTagIds.push(res._id);
          console.log(`Tag ${i} added successfully!!!`)
          if(i === fakeTags.length - 1){
            resolv(fakeTagIds);
          }
        }
      });
    });

  })

};

module.exports = Tags_seeder;
