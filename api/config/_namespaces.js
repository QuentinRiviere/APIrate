const path = require('path');
let DefineNamespaces = () => {
  let app = path.dirname(__dirname + '../') + '/';
  
  let _ = (namespace) => {
    return app + namespace
  };
  /*
   *
   *  NAMESPACES DEFINITION
   *
   */
  global.NAMESPACES = {
    base: app,
    model: {
      'User': _('app/models/user.js'),
      'BlogPost': _('app/models/blog/post'),
      'BlogCategory': _('app/models/blog/category.js'),
      'BlogTag': _('app/models/blog/tag'),
    },
    controller: {
      'Auth': _('app/controllers/auth.js'),
      'Users': _('app/controllers/users.js'),
      'PassportLinkedin': _('app/controllers/passport/linkedinAuth.js'),
      'BlogPosts': _('app/controllers/cms/blog/posts'),
      'BlogCategories': _('app/controllers/cms/blog/categories'),
      'BlogTags': _('app/controllers/cms/blog/tags'),
    },
    routes: {
      'routes': _('routes/routes'),
      'AuthBasic':  _('routes/auth/auth'),
      'AuthLinkedin':  _('routes/auth/linkedin.js'),
      'Users': _('routes/public/users.js'),
      'BlogCategories': _('routes/public/cms/blog/categories.js'),
      'BlogPosts': _('routes/public/cms/blog/posts.js'),
      'BlogTags':  _('routes/public/cms/blog/tags.js'),
      'ProtectedUsers': _('routes/protected/users.js'),
      'ProtectedBlogCategories':  _('routes/protected/cms/blog/categories.js'),
      'ProtectedBlogPosts':  _('routes/protected/cms/blog/posts.js'),
      'ProtectedBlogTags':  _('routes/protected/cms/blog/tags.js'),
    },
    middleware: {
      'ValidateAdmin': _('middleware/validate_admin.js'),
      'ValidateUser': _('middleware/validate_user.js'),
    },
    helpers: {
      'Intl': _('app/helpers/intl.js'),
    },
    core: _('core/require.js')
  };
  
};

module.exports = DefineNamespaces;