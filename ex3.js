$(window).on('load', function(){
  $('p').on('click dblclick', function(event) {
    $(this).toggleClass('clicked')
    $('span')
      .html('You ' + event.type + 'ed on ' + event.pageX + ':' + event.pageY)
  })

  var colors = ['red', 'green', 'blue']
  $('.square').hover(function() {
    var i = $('.square').index(this)
    $(this).css('background-color', colors[i])
  }, function() {
    $(this).css('background-color', '')
  })
  $('.wrapper').on('click', function(event) {
    if ($(event.target).hasClass('square')) {
      var i = $('.square').index(event.target)
      var color = colors[i]
    } else {
      var color = ''
    }
    $('.wrapper').css('background-color', color)
  })
})
