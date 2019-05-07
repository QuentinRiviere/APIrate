let DefineSafePaginate = () => {

  /*
   *
   * Request data transformation to fit translatables fields
   *
   */
  // TODO complete this function

  global.safePaginate = (params) => {
    let perPage = params.perPage ? params.perPage : 0;
    let page = params.page ? params.page - 1 : 0;
    let count = params.count ? params.count : 0;
    if (perPage >= count) {
      perPage = count;
      page = 0;
    }

    if (page >= Math.floor(count / perPage)) {
      page = Math.floor(count / perPage) - 1
    }

    return {
      page: page,
      perPage: perPage
    }
  };
};

module.exports = DefineSafePaginate;
