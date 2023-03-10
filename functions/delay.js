exports.handler = function(context, event, callback) {
  setTimeout(function() {
      return callback(null, {});
  }, event.milliseconds ? event.milliseconds : 1000)
};