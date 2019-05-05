let DefineSchema = () => {
  
  /*
   *
   *  CORE SCHEMA DEFINITIONS
   *
   */
   global.SCHEMAINTL_MAPPING = {};
   global.mapIntlSchema = (schemaName, schemaObject) => {
      if(!(Object.keys(SCHEMAINTL_MAPPING).includes(schemaName))) {
         SCHEMAINTL_MAPPING[schemaName] = [];
         Object.keys(schemaObject.obj).forEach((key, i) => {
            if(Object.keys(schemaObject.obj[key]).includes('intl')) {
               if(schemaObject.obj[key]['intl'] === true) {
                  SCHEMAINTL_MAPPING[schemaName].push(key);
               }
            }
         })
      }
   };
};

module.exports = DefineSchema;