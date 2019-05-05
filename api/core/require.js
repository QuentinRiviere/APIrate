const DefineFunctions = require('./functions/functions');
const DefineSchema= require('./mapping/schema');
let DefineCore = () => {
  
  /*
   *
   *  VENDORS DEFINITION
   *
   */
  DefineSchema();
  DefineFunctions();
  
};

module.exports = DefineCore;