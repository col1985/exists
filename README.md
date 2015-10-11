# exists

![Build Passing](https://travis-ci.org/col1985/exists.svg?branch=master)
[![NPM version](https://badge.fury.io/js/exists.svg)](http://badge.fury.io/js/exists)

Module to check if datatype contains param passed! 

###Install

```bash

npm i exists --save
```

###Example

```javascript

var exists = require('exists');

//sample datatypes
var array = ['hello', 'World'],
  string = 'exists',
  object = { name: 'your name'};

// check array has element
exists(array, 'World'); // true
exists(array, 'earth'); // false

// check object has property
exists(object, 'name'); // true
exists(object, 'mars'); // false

// check string has letter
exists(string, 'x'); // true
exists(string, 'w'); // false

```

