// const url = 'https://jsonplaceholder.typicode.com/posts/1'
const userURL = 'http://localhost:3000/user'
function get(url, callback) {
  var request = new XMLHttpRequest()
  request.open('GET', url)
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      var type = request.getResponseHeader('Content-Type')
      if (type.indexOf('xml') !== -1 && request.responseXML) {
        callback(request.responseXML)
      } else if (type.indexOf('json') !== -1) {
        callback(JSON.parse(request.responseText))
      } else {
        callback(request.responseText)
      }
    }
  }
  request.send(null)
}

// get(url, console.log)
// jQuery.ajax({
//   type: 'GET',
//   url: url,
//   data: null,
//   success: console.log
// })

function makeAjaxCall(url, type) {
  return $.ajax({
    url,
    type,
    dataType: 'json'
  })
}

// const p = makeAjaxCall(url, 'GET').then(console.log)

name.value = 123
makeAjaxCall(userURL, 'GET')
  .then(resp => {
    document.querySelector('#name').value = resp.name
    document.querySelector('#email').value = resp.email
  })
