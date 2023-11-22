function post (){
  //リクエストを送信する処理
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);     //新たに生成したFormDataオブジェクトを変数formDataに格納しています。
    const XHR = new XMLHttpRequest();     //変数名のXHRはXMLHttpRequestの略
    XHR.open("POST", "/posts", true);     //第一引数にはHTTPメソッド、第二引数にはパス、第三引数には非同期通信であるかをtrueかfalse
    XHR.responseType = "json";     //（JavaScript Object Notation）
    XHR.send(formData);            //フォームに入力された内容をサーバー側に送信します.
  });
 };
 
 window.addEventListener('turbo:load', post);