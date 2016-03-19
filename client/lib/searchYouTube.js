var searchYouTube = (options, callback) => {
  var maxResults = options.max || 5;
  $.ajax('https://www.googleapis.com/youtube/v3/search&key=' + options.key + '&q=' + options.query + '&maxResults=' + maxResults + '&videoEmbeddable=true', {
    success: function(data) {
      callback(data);
    },
    error: function(data) {
      console.error('AJAX Fail. No bueno.', data);
    }
  });
};

window.searchYouTube = searchYouTube;

