module.exports = () => {
  
  const BlogCategory = require(NAMESPACES.model.BlogCategory);
  
  var expect = require('chai').expect;
  
  describe('Blog Category Schema', function() {
    it('should be invalid if name is empty', function(done) {
      var m = new BlogCategory();
      m.validate(function(err) {
        expect(err.errors.name).to.exist;
        done();
      });
    });
  });
};
