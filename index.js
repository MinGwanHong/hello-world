var express = require('express'); // 설치한 express module을 불러와서 변수에 담는다.
var app = express(); //express를 실행하여 app object를 초기화 한다.

// app.get('/', function(req, res){ // '/'위치에 get 요청을 받을 경우,
//   res.send('Hello World!');  //"Hello World!"를 보낸다.
// });

//1 ejs를 사용하기 위해서 express의 view engine에 ejs를 set하는 코드입니다.
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

//2 query를 통해서 이름을 받는 코드입니다. 모든 query들은 req.query에 저장됩니다.
app.get("/hello", function(req, res){
  res.render("hello", {name:req.query.nameQuery});
});

//3 route parameter를 통해 이름을 받는 코드입니다. 콜론(:)으로 시작되는 route은 해당 부분에 입력되는 route의 텍스트가 req.params에 저장됩니다.
// 예를들어 /hello/Kim을 입력하면 "/hello/:nameParam"에 의해 세미콜론이 있는 route의 2번째 부분 즉, Kim이 req.params.nameParam에 저장됩니다.
app.get("/hello/:nameParam", function(req, res){
  res.render("hello", {name:req.params.nameParam});
});

var port = 3000;  //사용할 포트 번호를 port 변수에 넣는다.
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});
