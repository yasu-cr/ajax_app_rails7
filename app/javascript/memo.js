const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

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
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
};
 
window.addEventListener('turbo:load', post);