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
* `map`
* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* `reject`: [note](http://underscorejs.org/#reject)

Use the notes provided to help guide you explanation.




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




