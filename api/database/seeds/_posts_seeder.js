const Post = require('../../app/models/blog/posts');

let posts_seeder = (userId, categoryIds, tagsIds) => {
  function randomCategory(categories) {
    return categories[Math.floor(Math.random() * categories.length)]
  }
  function randomTags(tags) {
    return tags;
  }
  let fakePosts = [];
  for (let i = 0; i < 1000; i++) {
    fakePosts.push({
      title: `Title ${i}`,
      subTitle: `Sub Title ${i}`,
      userId: userId,
      content: `Sample content ${i} for with random text inside just for developpement tests`,
      categories: randomCategory(categoryIds),
      tags: randomTags(tagsIds),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      deletedAt: null
    })
  }

  fakePosts.forEach((post, i) => {
    console.log(`Create post ${post} in database`);
    console.log(post.title);
    Post.create({
      title: post.title,
      subTitle: post.subTitle,
      userId: post.userId,
      content: post.content,
      createdAt: post.createdAt,
      categories: post.categories,
      tags: post.tags,
      updatedAt: post.updatedAt,
      deletedAt: post.deletedAt
    }, function(err, res) {
      if (err) {
        console.log(err)
      } else {
        console.log(`post ${i} added successfully!!!`)
      }
    });
  });
};

module.exports = posts_seeder;
