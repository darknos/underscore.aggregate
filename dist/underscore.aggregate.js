/*! underscore.aggregate - v0.2.0 - 2014-07-29 - Sergey Nosenko */
(function(_){
	

var FUNCTIONS = {
	sum : function(list, field, context) {
		return _.reduce(list, function(memo, num) {
			var val = _.isFunction(field) ? field(num, context) : num[field];
			return memo + val;
		}, 0, context);
	},
	avg : function(list, field, context) {
		var sum =  _.reduce(list, function(memo, num) {
			var val = _.isFunction(field) ? field(num, context) : num[field];
			return memo + val;
		}, 0, context);
		var count = _.size(list);
		return count ? sum / count : null;
	},
	count : function(list, field, context) {
		var count = _.size(list);
		return count;
	}
};

FUNCTIONS.SUM = FUNCTIONS.sum;
FUNCTIONS.AVG = FUNCTIONS.avg;
FUNCTIONS.COUNT = FUNCTIONS.count;

function aggregate(obj, fields, context) {
	var result = {};
	_.each(fields, function(list, key) {
		if (!_.isArray(list))
			list = [ list ];
		_.each(list, function(field) {
			result[key+"_"+field] = FUNCTIONS[key](obj, field, context);
		});
	});
	return result;
}

function aggregateBy(obj, group, fields, context) {

	var result = _.groupBy(obj, group, context);
	_.each(result, function(list, key) {
		result[key] = aggregate(list, fields, context);
	});

	return result;
}

_.mixin({
	aggregate: aggregate,
	aggregateBy: aggregateBy
});



})(_);
