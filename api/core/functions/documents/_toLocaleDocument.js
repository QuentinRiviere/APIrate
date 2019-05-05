let DefineToLocaleDocument = () => {
  
  /*
   *
   *  Translate document or collection deeply ( even populated documents )
   *
   */
  global.toLocaleDocument = (params) => {
    let collection = params.collection ? params.collection : null,
      document = params.document ? params.document : null,
      locale = params.locale ? params.locale : CONFIG.default_locale,
      fields = params.fields ? params.fields : [],
      populate = params.populate ? params.populate : [];
    
    function fieldsParse(document) {
      return new Promise((resolv, reject) => {
        try {
          if (fields.length === 0) {
            resolv(document);
          }
          let pDoc = {};
          fields.forEach((field, i) => {
            if (field === 'id') {
              pDoc[field] = document['_' + field];
            }
            pDoc[field] = document[field];
            if (fields.length - 1 === i) {
              resolv(pDoc);
            }
          });
        } catch (err) {
          reject(err);
        }
      });
    }
    
    function intlParse(doc) {
      return new Promise((resolv, reject) => {
        try {
          
          if (populate.length === 0) {
            resolv(doc);
          }
          
          populate.forEach((key, i) => {
            // si le champs est un object
            if (typeof doc[key] === 'object') {
              // si le champs est une collection de document
              if (doc[key] instanceof Array) {
                // Pour chaque document
                doc[key].forEach((subDoc, n) => {
                  // Si la clé (key) de population existe dans le mapping d'internationalisation des schemas
                  if (Object.keys(SCHEMAINTL_MAPPING).includes(key)) {
                    // pour chaque entrée du mapping de schéma correspondant à la clée de population
                    SCHEMAINTL_MAPPING[key].forEach((intlKey, j) => {
                      // Si le sous document inclus l'entrée
                      if (Object.keys(subDoc._doc).includes(intlKey)) {
                        if (Object.keys(doc[key][n]._doc[intlKey]).includes(locale)) {
                          // On remplace la valeur correspondant à l'entrée dans le sous document par sa valeur locale
                          doc[key][n]._doc[intlKey] = doc[key][n]._doc[intlKey][locale];
                        }
                      }
                      // Si toutes les entrées du mapping de schéma correspondant à la clée de population ont été parcourues
                      if (SCHEMAINTL_MAPPING[key].length - 1 === j) {
                        // Si tous les sous documents ont été parcouru
                        if (doc[key].length - 1 === n) {
                          // Si le tableau des Schema à peupler a été parcouru
                          if (populate.length - 1 === i) {
                            // On renvoie le document parsé
                            resolv(doc);
                          }
                        }
                      }
                      
                    });
                  }
                  // Si tous les sous documents ont été parcouru
                  if (doc[key].length - 1 === n) {
                    // Si le tableau des Schema à peupler a été parcouru
                    if (populate.length - 1 === i) {
                      // On renvoie le document parsé
                      resolv(doc);
                    }
                  }
                });
              } else {
                // Si la clé (key) de population existe dans le mapping d'internationalisation des schemas
                if (Object.keys(SCHEMAINTL_MAPPING).includes(key)) {
                  // pour chaque entrée du mapping de schéma correspondant à la clée de population
                  SCHEMAINTL_MAPPING[key].forEach((intlKey, j) => {
                    // Si le sous document inclus l'entrée
                    if (Object.keys(doc).includes(intlKey)) {
                      if (Object.keys(doc._doc[intlKey]).includes(locale)) {
                        // On remplace la valeur correspondant à l'entrée dans le sous document par sa valeur locale
                        doc._doc[intlKey] = doc._doc[intlKey][locale];
                      }
                    }
                    // Si toutes les entrées du mapping de schéma correspondant à la clée de population ont été parcourues
                    if (SCHEMAINTL_MAPPING[key].length - 1 === j) {
                      // Si le tableau des Schema à peupler a été parcouru
                      if (populate.length - 1 === i) {
                        // On renvoie le document parsé
                        resolv(doc);
                      }
                    }
                    
                  });
                } else {
                  // Si le tableau des Schema à peupler a été parcouru
                  if (populate.length - 1 === i) {
                    // On renvoie le document parsé
                    resolv(doc);
                  }
                }
                
              }
            }
          });
        } catch (err) {
          reject(err);
        }
      });
      
    }
    
    return new Promise((resolv, reject) => {
      try {
        if (collection !== null) {
          let localeCollection = [];
          let i = 0;
          collection.forEach((document) => {
            document.setLanguage(locale);
            fieldsParse(document).then(doc => {
              intlParse(doc).then(result => {
                i++;
                localeCollection.push(result);
                if (i === collection.length) {
                  resolv(localeCollection);
                }
              }).catch(intlParseError => {
                console.log(intlParseError);
                reject(intlParseError);
              });
            }).catch(fieldsParseError => {
              console.log(fieldsParseError);
              reject(fieldsParseError);
            });
          });
        } else if (document !== null) {
          document.setLanguage(locale);
          fieldsParse(document).then(doc => {
            intlParse(doc).then(result => {
              resolv(result);
            }).catch(intlParseError => {
              console.log(intlParseError);
              reject(intlParseError);
            });
          }).catch(fieldsParseError => {
            console.log(fieldsParseError);
            reject(fieldsParseError);
          });
        } else {
          reject('collection and document fields are null');
        }
      } catch (err) {
        reject(err);
      }
      
    });
  };
};

module.exports = DefineToLocaleDocument;