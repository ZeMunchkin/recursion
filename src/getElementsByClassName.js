
var getElementsByClassName = function(className) {
  var result = [];

  var findNodes = function (node) {

    var allChildren = node.childNodes;

    allChildren.forEach( function( element ) {
      var classArray = element.classList;

      if( classArray ) {
        classArray.forEach( function( eachClass ) {
          if( eachClass === className ) {
            result.push( element );
          }
        });
      }

       if( element.childNodes[0] ) {
         findNodes( element );
       }
    });
  }

  findNodes( document );
  return result;
};
