const Category = require(NAMESPACES.model.BlogCategory);

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
  
      let newCategory = new Category({
        name: {
         'fr': category.name,
          'en': 'english_ ' + category.name
        }
      });
      
      newCategory.save(function(err) {
        if (err) {
          console.log(err);
          reject();
        }
        fakeCategoryIds.push(newCategory._id);
        console.log(`category ${i} added successfully!!!`)
        if(i === fakeCategories.length - 1){
          resolv(fakeCategoryIds);
        }
      });
     
    });

  })

};

module.exports = categories_seeder;
