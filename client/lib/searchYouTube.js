var searchYouTube = (options, callback) => {
  var maxResults = options.max || 5;
  callback = callback || function(data) { console.log(data); };
  var results;
  $.ajax('https://www.googleapis.com/youtube/v3/search?part=snippet&key=' + options.key + '&q=' + options.query + '&maxResults=' + maxResults + '&type=video&videoEmbeddable=true', {
    success: function(data) {
      results = data;
      callback(data);
    },
    error: function(data) {
      console.error('AJAX Fail. No bueno.', data);
    }
  });
  return results;
};

window.searchYouTube = searchYouTube;

