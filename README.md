# No Filter

### Introduction

Today we're going to explore the `filter` operation, which is a lot like the `map` operation, but also... totally different.


### So What's Map And What's Filter?

They both take an array and return an array. But whereas `map` always returns the same number of things, but transformed, `filter` returns fewer things NOT transformed.

See the below graphic:

![map, filter, and reduce explained with emoji](http://www.globalnerdy.com/wp-content/uploads/2016/06/map-filter-reduce-in-emoji-1.png)
[Credit link](http://www.globalnerdy.com/2016/06/23/map-filter-and-reduce-explained-using-emoji/)

This is the more advanced form of the map operation, where you give the `map` function an array and a function that performs the transformation for you. But focus on the operation itself: as you can see, a map operation takes each of the given array items and transforms them, giving you new values, but the same number, in a one to one relationship. Cow becomes hamburger, potato becomes fries, etc. Clearly some transformation is happening to each original emoji that "cooks" it (pulling up its matching cooked emoji in some data structure?) and pushes the resulting value into a new array, returning it.

The `filter` operation, on the other hand, doesn't transform its ELEMENTS at all. Instead, it simply has a boolean check, in this case contained in `isVegetarian`, that, if true, means it gets pushed into the new array. The result is that all of the elements that AREN'T vegetarian, like the hamburger and drumstick, simply fail to make the cut and never get pushed into the new array, thus getting filtered out.

I'll leave `reduce` to another day!

So to sum up: a map operation gives you new values, one for each old value. A filter operation gives you no new values, just the same values, but with some left out.


### Guidelines

* Every one of these four functions is a simple filter. Check the tests for full descriptions and examples.
