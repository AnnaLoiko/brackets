module.exports = function check(str, bracketsConfig) {
  let arrStr = str.split('');
  let result;

  bracketsConfig.forEach(element => {
    for ( let i = arrStr.length ; i >= 0 ; i--) {

      if ( arrStr.lastIndexOf(element[0]) < 0) return;
              
      var indexOpen = (element[0]===element[1]) ? arrStr.indexOf(element[0]) : arrStr.lastIndexOf(element[0]) ;
      var indexClose = arrStr.indexOf(element[1], indexOpen+1);

      if ( indexOpen % 2 === indexClose % 2 || indexClose < 0) { 
        result = false; 
        break;
      }

      delete arrStr[indexClose];
      delete arrStr[indexOpen];
      result = true;

    };
  });

  var filterArrStr = arrStr.filter( e => typeof e == "string" );
  return result = (filterArrStr.length > 0) ? false : true ;
}
