$(document).ready(function(){
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

  function renderList() {
    $('#todo-list').html(localStorage.getItem('todo'))
  }
  function saveList() {
    localStorage.setItem('todo', $('#todo-list').html())
  }
  function addTodoItem() {
    var item = $('#todo-input').val()
    if (item) {
      $('#todo-list')
        .append('<li class="todo-item">' + item + '</li>')
      $('#todo-input').val('')
      saveList()
    }
  }
  $('#todo-app').on('click', addTodoItem)
  $('#todo-input').on('keypress', function(event) {
    if (event.key === 'Enter') {
      addTodoItem()
    }
  })
  $('#todo-list').on('click dblclick', function(event) {
    if (event.target.tagName === 'LI') {
      if (event.type === 'click') {
        $(event.target).toggleClass('checked')
      } else {
        $(event.target).remove()
      }
      saveList()
    }
  })

  renderList()
})
