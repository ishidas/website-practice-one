//******
//1. create <div> element inside of <body>
//2. create <button> element inside of that div you created in step 1.
//3. Give the button element "id" called "changeColor"
// === added above lists inside of index.html



//document.getElementById("changeColor").addEventListener("click", function() {

//i can't figure out how to put eventListener in here. and how should I add alert? still searching the answer... 041919

//4. inside of this JS file, get the button element by id and add a click eventListener
//5. when a user clicks on the button, alert should pop up in the browser, and background color should change
//   to color of your choice.
//Bonus - you can also add a condition using "if else" statement.
//  condition is:  if the color of your choice is already used as background color,
//  change the background color back to white.
//*****

document.getElementById("changeColor").addEventListener("click",function(){
var bodyElement = document.querySelector("body")
console.log(bodyElement)
alert("changed color");
if(bodyElement.style.backgroundColor == ""){
bodyElement.style.backgroundColor = "red";
}else {
bodyElement.style.backgroundColor = "pink";
}

//最初の状態では背景の指定は何もない状態。だから””（empty string)にするとifが上から順番に動作する
// ここに"whilte"を入れると、最初の段階で背景が白かどうかをチェックして、白だったらifが適応される。
//でも、白だという指定がない状態だから"whilte"（見た目上は同じ白だから変わらないけど）にすると
// elseにある方が適応されてしまう


//bodyElement.style.backgroundColor = "red";
});

// documentはhtmlの全体を指す。htmlのelementの場合””をつけずに書く。そのままだとvarだと認識する
// さわこっちのLineにあったdefaultでhtmlでボタンとかフォームとかにすでにくっついてるイベントを取り消す。
// フォームとかでいろんなイベントがくっついてる時にそのコードを入れておくと
// 誤作動？誤送信を防ぐためによく活用される
// thisとwindowのことはちょっとややこしい
//querySelectorはもう少しチェック　MDN
//
