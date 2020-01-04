var express = require('express'); // 설치한 express module을 불러와서 변수에 담는다.
var app = express(); //express를 실행하여 app object를 초기화 한다.

app.get('/', function(req, res){ // '/'위치에 get 요청을 받을 경우,
  res.send('Hello World!');  //"Hello World!"를 보낸다.
});

var port = 3000;  //사용할 포트 번호를 port 변수에 넣는다.
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
