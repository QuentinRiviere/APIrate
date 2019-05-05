const Post = require(NAMESPACES.model.BlogPost);

let posts_seeder = (userId, categoryIds, tagsIds) => {
  function randomCategory(categories) {
    return categories[Math.floor(Math.random() * categories.length)];
  }
  
  function randomTags(tags) {
    return tags;
  }
  
  let fakePosts = [];
  for (let i = 0; i < 1000; i++) {
    fakePosts.push({
      title: `Title ${ i }`,
      subTitle: `Sub Title ${ i }`,
      userId: userId,
      content: `Sample content ${ i } for with random text inside just for developpement tests`,
      slug: `sample_slug_${ i }`,
      categories: randomCategory(categoryIds),
      tags: randomTags(tagsIds),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      deletedAt: null,
    });
  }
  
  fakePosts.forEach((post, i) => {
    console.log(`Create post ${ post } in database`);
    console.log(post.title);
    
    let newPost = new Post({
      title: {
        'fr': post.title,
        'en': 'english_version_' + post.title,
      },
      subTitle: {
        'fr': post.subTitle,
        'en': 'english_version_' + post.subTitle,
      },
      userId: post.userId,
      slug: {
        'fr': post.slug,
        'en': 'english_version_' + post.slug,
      },
      content: {
        'fr': post.content,
        'en': 'english version ... ' + post.content,
      },
      createdAt: post.createdAt,
      categories: post.categories,
      tags: post.tags,
      updatedAt: post.updatedAt,
      deletedAt: post.deletedAt,
    });
    
    newPost.save(function(err) {
      if (err) return console.log(err);
      console.log(`post ${ i } added successfully!!!`);
    });
    
  });
};

module.exports = posts_seeder;
