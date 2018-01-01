var fetch = function () {
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+$('#isbn').val(),
    success: function(data) {
      var source = $('#bookinfo').html();
      var template = Handlebars.compile(source);
      var newHTML = template(data.items[0].volumeInfo);
      $('.top').append(newHTML);
      console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });
};
$('.btn').on('click', fetch);
