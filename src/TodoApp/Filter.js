export default {
	completed: function() {
		  return function( items) {
		    var filtered = [];
		    angular.forEach(items, function(item) {
		      if(item.status==='completed') {
		        filtered.push(item);
		      }
		    });
		    return filtered;
		  };
		},
   incomplete:function() {
		  return function( items, userAccessLevel) {
		    var filtered = [];
		    angular.forEach(items, function(item) {
		      if(item.status==='incomplete') {
		        filtered.push(item);
		      }
		    });
		    return filtered;
		  };
}
};