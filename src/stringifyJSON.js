// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

    var result = '';

    if (obj === undefined) {

    }

    else if (typeof obj === 'function') {

    }

    else if( Array.isArray(obj) ) {
      result += '[';
      for (var i = 0; i < obj.length; i++) {
        result += stringifyJSON(obj[i]);
        if( i !== obj.length - 1) {
          result += ',';
        }
      }
      result += ']';
    } else if( typeof obj === 'object' ) {
      if (obj === null) {
        result += 'null';
      }
      else {
        var keys = Object.keys(obj);
        result += '{';
        keys.forEach( function (key) {
          if (typeof obj[key] === 'function' || obj[key] === undefined ) {

          } else {
            result += '"' + key + '":';
            result += stringifyJSON(obj[key]);
            if (key !== keys[keys.length - 1]) {
              result += ',';
            }
          }
        });
       result += '}';
      }
    } else if (typeof obj === 'string') {
      result += '"';
      result += obj;
      result += '"';
    } else {
      result += obj;
    }
    return result;
};
