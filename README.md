# Aggregate SUM,AVG and COUNT functions for underscore

## SYNOPSIS

~~~
var data = [{name:"a", field:1},{name:"a", field:2},{name:"a", field:3},{name:"b", field:4},{name:"b", field:5}]

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


~~~
