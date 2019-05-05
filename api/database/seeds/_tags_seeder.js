const Tag = require(NAMESPACES.model.BlogTag);

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
  
      let newTag = new Tag({
        name: {
          'fr': tag.name,
          'en': 'english_ ' + tag.name
        }
      });
  
      newTag.save(function(err) {
        if (err) {
          console.log(err);
          reject();
        }
        fakeTagIds.push(newTag._id);
        console.log(`tag ${i} added successfully!!!`)
        if(i === fakeTags.length - 1){
          resolv(fakeTagIds);
        }
      });
      
    });

  })

};

module.exports = Tags_seeder;
