describe('exists module', function () {

  var exists = require('./../index.js'),
    string = 'exists',
    array = ['Does', 'element', 'exist'],
    object = {
      hello: 'world'
    };

  it('should return the exists module', function (done) {
    if (exists) {
      done();
    } else {
      return done('Failed to require exists');
    }
  });

  it('should be of type function', function (done) {
    if (typeof exists === 'function') {
      done();
    } else {
      return done('exists is not a function!');
    }
  });

  it('should return `true` for letter in string', function (done) {
    if (exists(string, 'x')) {
      done();
    } else {
      return done('letter in string test failed!');
    }
  });

  it('should return `false` for letter not in string', function (done) {
    if (!exists(string, 'p')) {
      done();
    } else {
      return done('letter not in string test failed!');
    }
  });

  it('should return `true` if element does exist in array', function (done) {
    if (exists(array, 'element')) {
      done();
    } else {
      return done('element in array test failed!');
    }
  });

  it('should return `false` if element does not exist in array', function (done) {
    if (!exists(array, 'could')) {
      done();
    } else {
      return done('element in not array test failed!');
    }
  });

  it('should return `true` if property does exist in object', function (done) {
    if (exists(object, 'hello')) {
      done();
    } else {
      return done('property exists in object test failed!');
    }
  });

  it('should return `false` if element does not exist in array', function (done) {
    if (!exists(object, 'could')) {
      done();
    } else {
      return done('property does not exists in object test failed!');
    }
  });
});
