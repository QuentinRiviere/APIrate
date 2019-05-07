const DefineToLocaleRequest = require('./_toLocaleRequest');
const DefineToLocaleDocument = require('./_toLocaleDocument');
const DefineSafePaginate = require('./_safePaginate');

let DefineDocumentsFunctions = () => {

  /*
   *
   *  DOCUMENTS MANIPULATIONS FUNCTIONS DEFINITION
   *
   */
  DefineToLocaleRequest();
  DefineToLocaleDocument();
  DefineSafePaginate();

};

module.exports = DefineDocumentsFunctions;
