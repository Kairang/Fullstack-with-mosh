module.exports = function (callback) {
    return (req, res, next) => {
        Promise.resolve(callback(req, res))
            .catch(next);
    };
};

/**
 * module.exports = function (callback) {
 *  return async(req, res, next) => {
 *    try {
 *      await callback(req, res);
 *    } catch (err) { 
 *      next(err);
 *    }
 *  };
 * };
 */