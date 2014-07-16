// var expect = require('chai').expect,
//   Iterators = require('../src/iterators.js');

// describe('Iterators', function(){
//   describe('#max', function(){
//     var myArr;
//     beforeEach(function(){
//       myArr = [66,22,67, 34];
//     });
//     it('should return the maximum in an array', function(){
//       expect(Iterators.max(myArr)).to.equal(67);
//     })    
//     it('should return -Infinity for empty array', function(){
//       myArr = [];
//       expect(Iterators.max(myArr)).to.equal(-Infinity);
//     })
//   })
// })



//Below is for Min 

// var expect = require('chai').expect,
//   Iterators = require('../src/iterators.js');

// describe('Iterators', function(){
//   describe('#min', function(){
//     var myArr;
//     beforeEach(function(){
//       myArr = [66,22,67, 34];
//     });
//     it('should return the minimum in an array', function(){
//       expect(Iterators.min(myArr)).to.equal(22);
//     })    
//     it('should return Infinity for empty array', function(){
//       myArr = [];
//       expect(Iterators.min(myArr)).to.equal(Infinity);
//     })
//   })
// })



//Each 

// var expect = require('chai').expect,
//   Iterators = require('../src/iterators.js');

// describe('Iterators', function(){
//   describe('#each', function(){
//     var myArr = [1,2,3];
//     var counter = 0; 
//     it('should return run for each element in the array', function(){
//       Iterators.each(myArr, function(curr, index){
//         counter+=curr;
//       });
//       expect(counter).to.equal(6)
//     }); 
//   })
// })



//map

// var expect = require('chai').expect, 
//   Iterators = require('../src/iterators.js');

// describe('Iterators', function(){
//   describe('#map', function(){
//     var myArr = [1,2,3];
//     it('should return all the numbers x 5 in the array', function(){

//       var result = Iterators.map(myArr, function(curr, index){
//         return curr * 5 ; 
//       });
//       expect(result).to.deep.equal([5,10,15])
//     })    
//   })
// })

//why is this one failing? returns [5,10,15]

//filter 

var expect = require('chai').expect, 
  Iterators = require('../src/iterators.js');

describe('Iterators', function(){
  describe('#filter', function() {
      var myArr = [1,2,3];
      it('should call the function on each item in the array', function() {
        expect(Iterators.filter(myArr, function(curr) {return curr < 2})).to.deep.equal([1]);
      });
  });
})
  
//to compare arrays you need to use .to.deep.equal 


