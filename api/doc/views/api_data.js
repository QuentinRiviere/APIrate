define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/authenticate",
    "title": "Authenticate",
    "name": "Authenticate",
    "group": "Auth",
    "description": "<p>Authenticate as user (with email and password) and receive a json web token for protected routes requests</p>",
    "sampleRequest": [
      {
        "url": "/api/auth/authenticate"
      }
    ],
    "parameter": {
      "fields": {
        "authenticate": [
          {
            "group": "authenticate",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "authenticate",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Register",
    "name": "Register",
    "group": "Auth",
    "description": "<p>Register as new user</p>",
    "parameter": {
      "fields": {
        "register": [
          {
            "group": "register",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>User firstname.</p>"
          },
          {
            "group": "register",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>User lastname.</p>"
          },
          {
            "group": "register",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "register",
            "type": "Number",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/protected/categories/create",
    "title": "Create (Blog categories)",
    "name": "Create__Blog_categories_",
    "group": "Blog_Categories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique x-access-token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "description": "<p>Create category method (as authenticated users)</p>",
    "sampleRequest": [
      {
        "url": "/api/protected/categories/create"
      }
    ],
    "parameter": {
      "fields": {
        "create": [
          {
            "group": "create",
            "type": "Object",
            "optional": false,
            "field": "name",
            "description": "<p>Category name. <p>format : <code>{fr: &quot;fr value&quot;, en: &quot;en value&quot;}</code>.<p> Or pass a <code>String</code> (saved as default language).<p></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/protected/cms/blog/categories.js",
    "groupTitle": "Blog_Categories"
  },
  {
    "type": "delete",
    "url": "/api/protected/categories/delete/:categoryId",
    "title": "DeleteById (Blog categories)",
    "name": "DeleteById__Blog_categories_",
    "group": "Blog_Categories",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "description": "<p>Delete a category by Id method (as authenticated users)</p>",
    "version": "0.0.0",
    "filename": "routes/protected/cms/blog/categories.js",
    "groupTitle": "Blog_Categories"
  },
  {
    "type": "get",
    "url": "/api/categories/all",
    "title": "GetAll (Blog categories)",
    "name": "GetAll__Blog_categories_",
    "group": "Blog_Categories",
    "sampleRequest": [
      {
        "url": "/api/categories/all"
      }
    ],
    "description": "<p>Get all categories method</p>",
    "version": "0.0.0",
    "filename": "routes/public/cms/blog/categories.js",
    "groupTitle": "Blog_Categories"
  },
  {
    "type": "get",
    "url": "/api/categories/id/:categoryId",
    "title": "GetById (Blog categories)",
    "name": "GetById__Blog_categories_",
    "group": "Blog_Categories",
    "sampleRequest": [
      {
        "url": "/api/categories/id/:categoryId"
      }
    ],
    "description": "<p>Get a category by Id method</p>",
    "version": "0.0.0",
    "filename": "routes/public/cms/blog/categories.js",
    "groupTitle": "Blog_Categories"
  },
  {
    "type": "post",
    "url": "/api/categories/name",
    "title": "GetByName (Blog categories)",
    "name": "GetByName__Blog_categories_",
    "group": "Blog_Categories",
    "description": "<p>Get a post by Id method</p>",
    "sampleRequest": [
      {
        "url": "/api/categories/name"
      }
    ],
    "parameter": {
      "fields": {
        "GetByName": [
          {
            "group": "GetByName",
            "type": "Object",
            "optional": false,
            "field": "name",
            "description": "<p>Category name. <p>format : <code>{fr: &quot;fr value&quot;, en: &quot;en value&quot;}</code>.<p> Or pass a <code>String</code> (saved as default language).<p></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/public/cms/blog/categories.js",
    "groupTitle": "Blog_Categories"
  },
  {
    "type": "put",
    "url": "/api/protected/categories/update/:categoryId",
    "title": "UpdateById (Blog categories)",
    "name": "UpdateById__Blog_categories_",
    "group": "Blog_Categories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique x-access-token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "description": "<p>Update a category by Id method (as authenticated users)</p>",
    "sampleRequest": [
      {
        "url": "/api/protected/categories/update/:categoryId"
      }
    ],
    "parameter": {
      "fields": {
        "UpdateById": [
          {
            "group": "UpdateById",
            "type": "Object",
            "optional": false,
            "field": "name",
            "description": "<p>Category name. <p>format : <code>{fr: &quot;fr value&quot;, en: &quot;en value&quot;}</code>.<p> Or pass a <code>String</code> (saved as default language).<p></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/protected/cms/blog/categories.js",
    "groupTitle": "Blog_Categories"
  },
  {
    "type": "post",
    "url": "/api/protected/posts/create",
    "title": "Create (Blog post)",
    "name": "Create__Blog_post_",
    "group": "Blog_Posts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique x-access-token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "description": "<p>Create post method (as authenticated users)</p>",
    "sampleRequest": [
      {
        "url": "/api/protected/posts/create"
      }
    ],
    "parameter": {
      "fields": {
        "create": [
          {
            "group": "create",
            "type": "Object",
            "optional": false,
            "field": "title",
            "description": "<p>Post title <p>format : <code>{fr: &quot;fr value&quot;, en: &quot;en value&quot;}</code>.<p> Or pass a <code>String</code> (saved as default language).<p></p>"
          },
          {
            "group": "create",
            "type": "Object",
            "optional": false,
            "field": "subTitle",
            "description": "<p>Post sub-title <p>format : <code>{fr: &quot;fr value&quot;, en: &quot;en value&quot;}</code>.<p> Or pass a <code>String</code> (saved as default language).<p></p>"
          },
          {
            "group": "create",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>Post content <p>format : <code>{fr: &quot;fr value&quot;, en: &quot;en value&quot;}</code>.<p> Or pass a <code>String</code> (saved as default language).<p></p>"
          },
          {
            "group": "create",
            "type": "Object",
            "optional": false,
            "field": "slug",
            "description": "<p>Post slug <p>format : <code>{fr: &quot;fr value&quot;, en: &quot;en value&quot;}</code>.<p> Or pass a <code>String</code> (saved as default language).<p></p>"
          },
          {
            "group": "create",
            "type": "Array",
            "optional": true,
            "field": "categories",
            "description": "<p>Post categories Ids.</p>"
          },
          {
            "group": "create",
            "type": "Array",
            "optional": true,
            "field": "tags",
            "description": "<p>Post tags Ids.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/protected/cms/blog/posts.js",
    "groupTitle": "Blog_Posts"
  },
  {
    "type": "delete",
    "url": "/api/protected/posts/delete/:postId",
    "title": "DeleteById",
    "name": "DeleteById__Blog_post_",
    "group": "Blog_Posts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique x-access-token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "description": "<p>Delete a post by Id method (as authenticated users)</p>",
    "sampleRequest": [
      {
        "url": "/api/protected/posts/delete/:postId"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/protected/cms/blog/posts.js",
    "groupTitle": "Blog_Posts"
  },
  {
    "type": "get",
    "url": "/api/posts/all",
    "title": "GetAll (Blog post)",
    "name": "GetAll__Blog_post_",
    "group": "Blog_Posts",
    "sampleRequest": [
      {
        "url": "/api/posts/all"
      }
    ],
    "description": "<p>Get all posts method</p>",
    "parameter": {
      "fields": {
        "getAll": [
          {
            "group": "getAll",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page to dislay.</p>"
          },
          {
            "group": "getAll",
            "type": "Number",
            "optional": false,
            "field": "perPage",
            "description": "<p>Number of posts to display per page</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/public/cms/blog/posts.js",
    "groupTitle": "Blog_Posts"
  },
  {
    "type": "get",
    "url": "/api/posts/id/:postId",
    "title": "GetById (Blog post)",
    "name": "GetById__Blog_post_",
    "group": "Blog_Posts",
    "sampleRequest": [
      {
        "url": "/api/posts/getById/:postId"
      }
    ],
    "description": "<p>Get a post by Id method</p>",
    "version": "0.0.0",
    "filename": "routes/public/cms/blog/posts.js",
    "groupTitle": "Blog_Posts"
  },
  {
    "type": "put",
    "url": "/api/protected/posts/update/:postId",
    "title": "UpdateById (Blog post)",
    "name": "UpdateById__Blog_post_",
    "group": "Blog_Posts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique x-access-token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "description": "<p>Update a post by Id method (as authenticated users)</p>",
    "sampleRequest": [
      {
        "url": "/api/protected/posts/update/:postId"
      }
    ],
    "parameter": {
      "fields": {
        "create": [
          {
            "group": "create",
            "type": "Object",
            "optional": false,
            "field": "title",
            "description": "<p>Post title <p>format : <code>{fr: &quot;fr value&quot;, en: &quot;en value&quot;}</code>.<p> Or pass a <code>String</code> (saved as default language).<p></p>"
          },
          {
            "group": "create",
            "type": "Object",
            "optional": false,
            "field": "subTitle",
            "description": "<p>Post sub-title <p>format : <code>{fr: &quot;fr value&quot;, en: &quot;en value&quot;}</code>.<p> Or pass a <code>String</code> (saved as default language).<p></p>"
          },
          {
            "group": "create",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>Post content <p>format : <code>{fr: &quot;fr value&quot;, en: &quot;en value&quot;}</code>.<p> Or pass a <code>String</code> (saved as default language).<p></p>"
          },
          {
            "group": "create",
            "type": "Object",
            "optional": false,
            "field": "slug",
            "description": "<p>Post slug <p>format : <code>{fr: &quot;fr value&quot;, en: &quot;en value&quot;}</code>.<p> Or pass a <code>String</code> (saved as default language).<p></p>"
          },
          {
            "group": "create",
            "type": "Array",
            "optional": true,
            "field": "categories",
            "description": "<p>Post categories Ids.</p>"
          },
          {
            "group": "create",
            "type": "Array",
            "optional": true,
            "field": "tags",
            "description": "<p>Post tags Ids.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/protected/cms/blog/posts.js",
    "groupTitle": "Blog_Posts"
  },
  {
    "type": "post",
    "url": "/api/protected/tags",
    "title": "Create (Blog tags)",
    "name": "Create__Blog_tags_",
    "group": "Blog_Tags",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique x-access-token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "description": "<p>Create tag method (as authenticated users)</p>",
    "parameter": {
      "fields": {
        "create": [
          {
            "group": "create",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name Catname.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/protected/cms/blog/tags.js",
    "groupTitle": "Blog_Tags"
  },
  {
    "type": "delete",
    "url": "/api/protected/Tags/:tagId",
    "title": "DeleteById (Blog tags)",
    "name": "DeleteById__Blog_tags_",
    "group": "Blog_Tags",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "description": "<p>Delete a tag by Id method (as authenticated users)</p>",
    "version": "0.0.0",
    "filename": "routes/protected/cms/blog/tags.js",
    "groupTitle": "Blog_Tags"
  },
  {
    "type": "get",
    "url": "/api/Tags",
    "title": "GetAll (Blog tags)",
    "name": "GetAll__Blog_tags_",
    "group": "Blog_Tags",
    "sampleRequest": [
      {
        "url": "/api/tags"
      }
    ],
    "description": "<p>Get all Tags method</p>",
    "version": "0.0.0",
    "filename": "routes/public/cms/blog/tags.js",
    "groupTitle": "Blog_Tags"
  },
  {
    "type": "get",
    "url": "/api/Tags/:tagId",
    "title": "GetById (Blog tags)",
    "name": "GetById__Blog_tags_",
    "group": "Blog_Tags",
    "sampleRequest": [
      {
        "url": "/api/tags/:tagId"
      }
    ],
    "description": "<p>Get a tag by Id method</p>",
    "version": "0.0.0",
    "filename": "routes/public/cms/blog/tags.js",
    "groupTitle": "Blog_Tags"
  },
  {
    "type": "put",
    "url": "/api/protected/tags/:categoryId",
    "title": "UpdateById (Blog tags)",
    "name": "UpdateById__Blog_tags_",
    "group": "Blog_Tags",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique x-access-token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "description": "<p>Update a tag by Id method (as authenticated users)</p>",
    "parameter": {
      "fields": {
        "updateById": [
          {
            "group": "updateById",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Category name.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/protected/cms/blog/tags.js",
    "groupTitle": "Blog_Tags"
  },
  {
    "type": "get",
    "url": "/api/auth/linkedin",
    "title": "Authenticate",
    "name": "Authenticate",
    "group": "Linkedin_OAuth2",
    "description": "<p>Call passport-linkedin-oauth2 authenticate method</p>",
    "version": "0.0.0",
    "filename": "routes/auth/linkedin.js",
    "groupTitle": "Linkedin_OAuth2"
  },
  {
    "type": "get",
    "url": "/api/auth/linkedin/callback",
    "title": "Callback",
    "name": "Callback",
    "group": "Linkedin_OAuth2",
    "description": "<p>Callback used for passport-linkedin-oauth2 authenticate method</p>",
    "version": "0.0.0",
    "filename": "routes/auth/linkedin.js",
    "groupTitle": "Linkedin_OAuth2"
  }
] });
