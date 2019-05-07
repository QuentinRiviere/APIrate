module.exports = () => {

  const BlogTag = require(NAMESPACES.model.BlogTag);

  var expect = require('chai').expect;

  describe('Blog Tag Schema', function() {

    it('should be valid if append STRING value to name', function(done) {
      var m = new BlogTag();
      m.name = 'a string';
      m.validate(function(err) {
        expect(err).to.be.null;
        done();
      });
    });

    it('should be valid if append JSON value to name', function(done) {
      var m = new BlogTag();
      m.name = {
        "fr" : "test",
        "en" : "test"
      };
      m.validate(function(err) {
        expect(err).to.be.null;
        done();
      });
    });

    it('should be invalid if name is empty', function(done) {
      var m = new BlogTag();
      m.validate(function(err) {
        expect(err.errors[`name.${CONFIG.default_locale}`]).to.exist;
        done();
      });
    });



  });
};
