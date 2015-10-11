var _ = require('underscore');

/**
 * exists
 * @param  {object} d datatype (array or string)
 * @param  {string} p param
 * @return {boolean}
 */
function exists(d, p) {
  if (isVaild(d) && isVaild(p)) {
    return check(d, p);
  } else {
    console.error('ERROR: does-it-exist: Invaild dataType');
    return false;
  }
}

/**
 * isVaild
 * @param  {object}  d datatype (object, function, string, array)
 * @return {Boolean} if vaild datatype
 */
function isVaild(d) {
  var isArray = (_.isObject(d) && _.isArray(d)),
    isString = _.isString(d),
    isFunction = _.isFunction(d),
    isObject = _.isObject(d) && (!isFunction || !isArray);

  return (isArray || isObject ||
    isFunction || isString);
}

/**
 * check
 * @param  {object} d
 * @param  {string} p
 * @return {boolean}
 */
function check(d, p) {
  var isArray = _.isArray(d),
    isString = _.isString(d),
    isObject = _.isObject(d),
    isFunction = _.isFunction(d);

  if (isObject && (!isFunction && !isArray)) {
    return _.has(d, p);
  } else if (isArray || isString) {
    return _.indexOf(d, p) !== -1;
  } else {
    return false;
  }
}

module.exports = exists;
