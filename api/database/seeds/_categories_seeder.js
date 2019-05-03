const Category = require('../../app/models/blog/categories');

let fakeCategories = [];
for (let i = 0; i < 10; i++) {
  fakeCategories.push({
    name: `Category ${i}`
  })
}



let categories_seeder = () => {
  return new Promise((resolv, reject) => {

    let fakeCategoryIds = [];
    fakeCategories.forEach((category, i) => {
      console.log(`Create category ${category} in database`);
      console.log(category.name);
      Category.create({
        name: category.name
      }, function(err, res) {
        if (err) {
          console.log(err)
          reject();
        } else {
          fakeCategoryIds.push(res._id);
          console.log(`category ${i} added successfully!!!`)
          if(i === fakeCategories.length - 1){
            resolv(fakeCategoryIds);
          }
        }
      });
    });

  })

};

module.exports = categories_seeder;
