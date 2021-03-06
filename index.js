'use strict';

var isObject = function (o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

// shallow copy
var cloneObject = function (_old) {
  var _new = {};
  for (var i in _old) {
    _old.hasOwnProperty(i) && (_new[i] = _old[i]);
  }
  return _new;
}

// var define = (typeof Reflect !== 'undefined' && Reflect.defineProperty)
//   ? Reflect.defineProperty
//   : Object.defineProperty;

var distributor = function (data, defaultResult) {

  defaultResult = defaultResult || undefined;

  if (!data || !isObject(data)) {
    throw new TypeError('param "data", expected a object');
  }

  var rootData = cloneObject(data);
  var types = Object.keys(rootData);
  var currentType = types[0];
    
  for(var i = 0; i < types.length; i++) {
    if(!isObject(rootData[types[i]])) {
      throw new TypeError('param "rootData['+types[i]+']", expected a object');
    }
  }

  var rootObj = {};
  var tempObj = {};

  types.forEach(function (typeName) {
    Object.keys(rootData[typeName])
          .forEach(function (val) {
            if(!tempObj[val])
              tempObj[val] = {
                enumerable: true,
                get: function(){ return rootData[currentType][val] || defaultResult; },
                set: function(val){ return null; }
              }
          });
  });
  
  Object.defineProperties(rootObj, tempObj);

  return {
    data: rootObj,
    setType: function (type) {
      if(types.indexOf(type) === -1){
        throw new Error('setType error: '+ type +'type no exist');
      } else {
        currentType = type;
      }
    },
    getType: function () { return currentType; }
  }
}

module.exports = distributor;