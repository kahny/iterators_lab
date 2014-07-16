# Iterators Lab


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function` are functions that operate on other functions, this can be through taking them as arguments or returning them.An example of this, is using foreach, where we can pass our action as a function value. 

	function forEach(array, action) {
	  for (var i = 0; i < array.length; i++)
	    action(array[i]);
	}

	forEach(["Wampeter", "Foma", "Granfalloon"], print);


Pretending we implemented the following methods, update this README with a description of each of the following and an example youve created:


* `max`
	The Math.max() function returns the largest of zero or more numbers.
	Math.max(1,2,3,4) = 4 

* `min`
	The Math.min() function returns the smallest of zero or more numbers.
	Math.min(1,2,3,4) = 1

* `each`
	forEach performs a specified action for each element in an array 

	var array = ["a", "b", "c"]; 
	array.forEach(function(entry){
		console.log(entry);
	})

prints in the console: 
		a 
		b 
		c 
		d

* `map`
	Map provides a callback funcion in order and constructs a new array from the results 

	var numbers = [1, 16, 25]
	var roots = numbers.map(Math.sqrt);
	
	roots
	[1, 4, 5]

	you can also use this for just a function in general instead of calling math, the bottom will return the same result as the previous example  

	var numbers = [1, 16, 25];
	var doubles = numbers.map(function(num){
  	return Math.pow(num, .5);
	});


* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


	The filter function creates a new array with all elements that pass the test implemented by the provided function 

	function isSmallEnough(element) {
		return element <=10;
	}

	var filtered = [1,2,21,42,3].filter(isSmallEnough)

	filtered
	[1, 2, 3]

* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

	The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value.

	var flattened = [[1,3], [5,7], [9,11]].reduce(function(a,b){
	return a.concat(b);
	});
	undefined
	flattened
	[1, 3, 5, 7, 9, 11]


* `reject`: [note](http://underscorejs.org/#reject)

This is essentially the opposite of filter. 

	function isLargeEnough(element){
		return element>10;
	}

	var small = [1,2,21,42,3].reject(isLargeEnough)


num=[1,2,3,4,5,6]
var odds = num.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [1, 3, 5]



### Phase-2 

* Write a test in the `test` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration. 

* Re-implement the `each` function we did in class, but write the spec for it first. Continue this exercise with `map` and `filter`.


### Phase-3

Implement the remaining iterator methods in the namespace.


### Phase-4

Refactor the following code using `map` to make only one call to the `map` function versus the two below.


```
var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);
```




