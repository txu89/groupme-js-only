var groups

var message;

function saveMessage() {
  message = document.getElementById('message').value
  var send = JSON.stringify({
        'message': {
          'source_guid': Math.floor((Math.random() *1000000) +1),
          'text': message,
        }
      })
  console.log(send)
  return send
}

function httpPostAsync(Url, callback) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.onreadystatechange= function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText)
  }
  xmlHttp.open('POST', Url, true)
  xmlHttp.setRequestHeader('content-type', 'application/json')
  xmlHttp.setRequestHeader('X-Access-Token', 'BGil3vVRxa89yPYS30uEVochMQ32vKDy4PRcQRxs')
  xmlHttp.send(saveMessage())
}

function sendMessage () {
  httpPostAsync('https://api.groupme.com/v3/groups/11518960/messages',
      function (response) {
        console.log(response)
      }
  )
}

function httpGetAsync(Url, callback) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.onreadystatechange= function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText)
  }
  xmlHttp.open('GET', Url, true)
  xmlHttp.send(null)
}

httpGetAsync('https://api.groupme.com/v3/groups?token=BGil3vVRxa89yPYS30uEVochMQ32vKDy4PRcQRxs', function(response) {
    groups = response
    console.log(groups)
  })

document.getElementById('groups').innerHTML = groups
