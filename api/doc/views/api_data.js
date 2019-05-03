define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/authenticate",
    "title": "Authenticate",
    "name": "Authenticate",
    "group": "Auth",
    "description": "<p>Authenticate as user (with email and password) and receive a json web token for protected routes requests</p>",
    "parameter": {
      "fields": {
        "authenticate": [
          {
            "group": "authenticate",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "authenticate",
            "type": "Number",
            "optional": false,
            "field": "Password",
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
    "url": "/api/protected/categories",
    "title": "Create",
    "name": "Create",
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
    "parameter": {
      "fields": {
        "create": [
          {
            "group": "create",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Category name.</p>"
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
    "url": "/api/protected/categories/:categoryId",
    "title": "DeleteById",
    "name": "DeleteById",
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
    "url": "/api/categories",
    "title": "GetAll",
    "name": "GetAll",
    "group": "Blog_Categories",
    "sampleRequest": [
      {
        "url": "/api/categories"
      }
    ],
    "description": "<p>Get all categories method</p>",
    "version": "0.0.0",
    "filename": "routes/public/cms/blog/categories.js",
    "groupTitle": "Blog_Categories"
  },
  {
    "type": "get",
    "url": "/api/categories/:categoryId",
    "title": "GetById",
    "name": "GetById",
    "group": "Blog_Categories",
    "sampleRequest": [
      {
        "url": "/api/categories/:categoryId"
      }
    ],
    "description": "<p>Get a category by Id method</p>",
    "version": "0.0.0",
    "filename": "routes/public/cms/blog/categories.js",
    "groupTitle": "Blog_Categories"
  },
  {
    "type": "put",
    "url": "/api/protected/categories/:categoryId",
    "title": "UpdateById",
    "name": "UpdateById",
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
    "filename": "routes/protected/cms/blog/categories.js",
    "groupTitle": "Blog_Categories"
  },
  {
    "type": "post",
    "url": "/api/protected/posts",
    "title": "Create",
    "name": "Create",
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
    "parameter": {
      "fields": {
        "create": [
          {
            "group": "create",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post title.</p>"
          },
          {
            "group": "create",
            "type": "String",
            "optional": false,
            "field": "subTitle",
            "description": "<p>Post sub-title.</p>"
          },
          {
            "group": "create",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Post content.</p>"
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
    "url": "/api/protected/posts/:postId",
    "title": "DeleteById",
    "name": "DeleteById",
    "group": "Blog_Posts",
    "permission": [
      {
        "name": "Authenticated User"
      }
    ],
    "description": "<p>Delete a post by Id method (as authenticated users)</p>",
    "version": "0.0.0",
    "filename": "routes/protected/cms/blog/posts.js",
    "groupTitle": "Blog_Posts"
  },
  {
    "type": "get",
    "url": "/api/posts",
    "title": "GetAll",
    "name": "GetAll",
    "group": "Blog_Posts",
    "sampleRequest": [
      {
        "url": "/api/posts"
      }
    ],
    "description": "<p>Get all posts method</p>",
    "parameter": {
      "fields": {
        "getAll": [
          {
            "group": "getAll",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Page to dislay.</p>"
          },
          {
            "group": "getAll",
            "type": "String",
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
    "url": "/api/posts/:postId",
    "title": "GetById",
    "name": "GetById",
    "group": "Blog_Posts",
    "sampleRequest": [
      {
        "url": "/api/posts/:postId"
      }
    ],
    "description": "<p>Get a post by Id method</p>",
    "version": "0.0.0",
    "filename": "routes/public/cms/blog/posts.js",
    "groupTitle": "Blog_Posts"
  },
  {
    "type": "put",
    "url": "/api/protected/posts/:postId",
    "title": "UpdateById",
    "name": "UpdateById",
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
    "parameter": {
      "fields": {
        "updateById": [
          {
            "group": "updateById",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Post title.</p>"
          },
          {
            "group": "updateById",
            "type": "String",
            "optional": true,
            "field": "subTitle",
            "description": "<p>Post sub-title.</p>"
          },
          {
            "group": "updateById",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>Post content.</p>"
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
    "title": "Create",
    "name": "Create",
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
    "type": "delete",
    "url": "/api/protected/Tags/:tagId",
    "title": "DeleteById",
    "name": "DeleteById",
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
    "title": "GetAll",
    "name": "GetAll",
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
    "title": "GetById",
    "name": "GetById",
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
    "title": "UpdateById",
    "name": "UpdateById",
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
