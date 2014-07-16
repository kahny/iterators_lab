// var Iterators = (function() {
//   var api = {
//     max: function(numList){
//       var max = -Infinity;
//       for (var i = 0; i < numList.length; i++) {
//         if ( numList[i] > max ) {
//           max = numList[i];
//         }
//       };
//       return max;
//     }
//   };

//   return api;
// })();

// module.exports = Iterators;



// This is the function for Min 
// var Iterators = (function(){
//   var api = {
//     min: function(numList){
//       var min = Infinity;
//       for(var i = 0; i <numList.length; i++){
//         if ( numList[i] < min ) {
//           min = numList[i];
//         }
//       };
//       return min;
//     }
//   };

//   return api;
// })();

// module.exports = Iterators





// //this is the function for each 
// var Iterators = (function(){
//   var api = {
//     each: function(list, action){
//       for (var i = 0 ; i < list.length; i++ ){
//         action(list[i], i)
//       };
//       return list; 
//     }
//   };
//   return api;
// })();

// module.exports = Iterators


// this is the function for map 
// var Iterators = (function(){
//   var api = {
//     map: function(list, action){
//       var newArray = [];
//       for (var i = 0 ; i < list.length; i++){
//         var result = action(list[i]);
//         newArray.push(result)
//       }
//       return newArray;
//     }
//   };
//   return api;
// })();

// module.exports = Iterators 




// This is the function for filter 
var Iterators = (function(){
  var api = {
    filter: function(list, action){
      var newArray = [];
      for (var i = 0 ; i < list.length; i++){
        if(action(list[i]))
          newArray.push(list[i])
      }
      return newArray
    }
  };
  return api;
})();

module.exports = Iterators 

