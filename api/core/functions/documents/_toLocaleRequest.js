let DefineToLocaleRequest = () => {
  
  /*
   *
   * Request data transformation to fit translatables fields
   *
   */
  // TODO complete this function
  
  global.toLocaleRequest = (params) => {
    let request = typeof params.request === 'object' ? params.request : null;
    model = params.model ? params.model : null;
    fields = params.fields ? params.fields : [];
    let translatable = false;
    if (SCHEMAINTL_MAPPING[model].length !== 0) {
      translatable = true;
    }
    let localeRequest = {};
    let transformed = false;
    return new Promise((resolv, reject) => {
      try {
        
        if (request === null || model === null) {
          reject('toLocaleRequest function require parameters : request, fields');
        }
        if (typeof model !== 'string') {
          reject('param "model" must be a String');
        }
        
        
        fields.forEach((field, i) => {
          if (Object.keys(request).includes(field)) {
            if (translatable === true) {
              transformed = false;
              SCHEMAINTL_MAPPING[model].forEach((intlField, j) => {
                // case {en: '', fr: ''}
                if (field === intlField) {
                  CONFIG.locales.forEach((locale, l) => {
                    localeRequest[field] = {};
                    if (Object.keys(request[field]).includes(locale)) {
                      localeRequest[field][locale] = request[field][locale];
                      if (CONFIG.locales.length - 1 === l) {
                        transformed = true;
                      }
                    }
                  });
                  if (fields.length - 1 === i) {
                    resolv(localeRequest);
                  }
                } else {
                  if (SCHEMAINTL_MAPPING[model].length - 1 === j) {
                    if (transformed === false) {
                      localeRequest[field] = request[field];
                    }
                    if (fields.length - 1 === i) {
                      resolv(localeRequest);
                    }
                  }
                }
              });
            }else{
              if (fields.length - 1 === i) {
                resolv(localeRequest);
              }
            }
          }else{
            if (fields.length - 1 === i) {
              resolv(localeRequest);
            }
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  };
};

module.exports = DefineToLocaleRequest;