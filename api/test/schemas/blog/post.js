module.exports = () => {
  const mongoose = require('mongoose');
  const BlogPost = require(NAMESPACES.model.BlogPost);
  var ObjectID = require('bson').ObjectID;

  var id = () => {
    return new ObjectID().toString();
  };


  var expect = require('chai').expect;

  describe('Blog Post Schema', function() {
    let fieldsAssign = (model) => {
      let data = {
        title: `Title`,
        subTitle: `Sub Title`,
        userId: 'userId',
        content: `Sample content for with random text inside just for developpement tests`,
        slug: `sample_slug`,
        categories: [id()],
        tags: [id(), id()],
        createdAt: Date.now(),
        updatedAt: Date.now(),
        deletedAt: null
      };
      // data.title = `Title`;
      // data.subTitle = `Sub Title`;
      // data.userId = 'userId';
      // data.content = `Sample content for with random text inside just for developpement tests`;
      // data.slug = `sample_slug`;
      // data.categories = ['131'];
      // data.tags = ['1234567890123456789012', '1234567890123456789012'];
      // data.createdAt = Date.now();
      // data.updatedAt = Date.now();
      // data.deletedAt = null;
      return new model(data);
    }

    describe('- Field title', function() {
      it('should be valid if append STRING value to title', function(done) {
        var m = fieldsAssign(BlogPost);

        m.title = 'a string';
        m.validate(function(err) {
          expect(err).to.be.null;
          done();
        });
      });

      it('should be valid if append JSON value to title', function(done) {
        var m = fieldsAssign(BlogPost);
        m.title = {
          "fr": "test",
          "en": "test"
        };
        m.validate(function(err) {
          expect(err).to.be.null;
          done();
        });
      });

      it('should be invalid if title is empty', function(done) {
        var m = fieldsAssign(BlogPost);
        m.title = '';
        m.validate(function(err) {
          expect(err.errors[`title.${CONFIG.default_locale}`]).to.exist;
          done();
        });
      });

    });



    describe('- Field subTitle', function() {
      it('should be valid if append STRING value to subTitle', function(done) {
        var m = fieldsAssign(BlogPost);

        m.subTitle = 'a string';
        m.validate(function(err) {
          expect(err).to.be.null;
          done();
        });
      });

      it('should be valid if append JSON value to subTitle', function(done) {
        var m = fieldsAssign(BlogPost);
        m.subTitle = {
          "fr": "test",
          "en": "test"
        };
        m.validate(function(err) {
          expect(err).to.be.null;
          done();
        });
      });

      it('should be invalid if subTitle is empty', function(done) {
        var m = fieldsAssign(BlogPost);
        m.subTitle = '';
        m.validate(function(err) {
          expect(err.errors[`subTitle.${CONFIG.default_locale}`]).to.exist;
          done();
        });
      });

    });

    describe('- Field slug', function() {
      it('should be valid if append STRING value to slug', function(done) {
        var m = fieldsAssign(BlogPost);

        m.slug = 'a string';
        m.validate(function(err) {
          expect(err).to.be.null;
          done();
        });
      });

      it('should be valid if append JSON value to slug', function(done) {
        var m = fieldsAssign(BlogPost);
        m.slug = {
          "fr": "test",
          "en": "test"
        };
        m.validate(function(err) {
          expect(err).to.be.null;
          done();
        });
      });

      it('should be invalid if slug is empty', function(done) {
        var m = fieldsAssign(BlogPost);
        m.slug = '';
        m.validate(function(err) {
          expect(err.errors[`slug.${CONFIG.default_locale}`]).to.exist;
          done();
        });
      });

    });


    describe('- Field content', function() {
      it('should be valid if append STRING value to content', function(done) {
        var m = fieldsAssign(BlogPost);

        m.content = 'a string';
        m.validate(function(err) {
          expect(err).to.be.null;
          done();
        });
      });

      it('should be valid if append JSON value to content', function(done) {
        var m = fieldsAssign(BlogPost);
        m.content = {
          "fr": "test",
          "en": "test"
        };
        m.validate(function(err) {
          expect(err).to.be.null;
          done();
        });
      });

      it('should be invalid if content is empty', function(done) {
        var m = fieldsAssign(BlogPost);
        m.content = '';
        m.validate(function(err) {
          expect(err.errors[`content.${CONFIG.default_locale}`]).to.exist;
          done();
        });
      });

    });

    describe('- Field categories', function() {
      it('should be invalid if append STRING value to categories', function(done) {
        var m = fieldsAssign(BlogPost);

        m.categories = 'a string';
        m.validate(function(err) {
          expect(err.errors.categories).to.exist;
          done();
        });
      });

      it('should be invalid if append JSON value to categories', function(done) {
        var m = fieldsAssign(BlogPost);
        m.categories = {
          "fr": "test",
          "en": "test"
        };
        m.validate(function(err) {
          //console.log(err);
          expect(err.errors['categories']).to.exist;
          done();
        });
      });

      it('should be valid if categories is empty', function(done) {
        var m = fieldsAssign(BlogPost);
        m.categories = null;
        m.validate(function(err) {
          expect(err).to.be.null;
          done();
        });
      });

    });

    describe('- Field tags', function() {
      it('should be invalid if append STRING value to tags', function(done) {
        var m = fieldsAssign(BlogPost);

        m.tags = 'a string';
        m.validate(function(err) {
          expect(err.errors.tags).to.exist;
          done();
        });
      });

      it('should be invalid if append JSON value to tags', function(done) {
        var m = fieldsAssign(BlogPost);
        m.tags = {
          "fr": "test",
          "en": "test"
        };
        m.validate(function(err) {
          //console.log(err);
          expect(err.errors.tags).to.exist;
          done();
        });
      });

      it('should be valid if tags is empty', function(done) {
        var m = fieldsAssign(BlogPost);
        m.tags = null;
        m.validate(function(err) {
          expect(err).to.be.null;
          done();
        });
      });

    });

  });

};
