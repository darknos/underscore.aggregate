# Aggregate SUM,AVG and COUNT functions for underscore

## SYNOPSIS

~~~
var data = [ {
	name : "a",
	field : 1
}, {
	name : "a",
	field : 2
}, {
	name : "a",
	field : 3
}, {
	name : "b",
	field : 4
}, {
	name : "b",
	field : 5
} ];


test('COUNT, AGV and SUM grouped by name', function() {
	var res = _.aggregateBy(data, "name", {
		"count" : "field",
		"sum" : "field",
		"avg" : "field"
	});
	equal(res.a.count_field, 3);
	equal(res.b.count_field, 2);
	equal(res.a.avg_field, 2);
	equal(res.b.avg_field, 4.5);
	equal(res.a.sum_field, 6);
	equal(res.b.sum_field, 9);
});


test('COUNT, AGV and SUM', function () {
     var res = _.aggregate(data, {"count": "field", "sum":"field", "avg":"field"});
     equal(res.count_field,5);
     equal(res.avg_field,3);
     equal(res.sum_field,15);
});


~~~


## aggregate(data, fields, context)

### data : array

### fields : object {aggregate_function: fields, ...}

* aggregate_function : sum, avg, count (also possible in upper case)
* fields : string | function | array


## aggregateBy(data, group_property, fields, context)

### data : array

### group_property: string | function

### fields : object {aggregate_function: fields, ...}

* aggregate_function : sum, avg, count (also possible in upper case)
* fields : string | function | array
