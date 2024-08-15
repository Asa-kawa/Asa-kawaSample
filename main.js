document.getElementById("description").addEventListener("click", () => {
  alert("ここには何もありません");
});

document.getElementById("close").addEventListener("click", () => {
  const result = confirm("本当に閉じていいですか？");
  if (result) {
    window.close();
  } else {
    alert("キャンセルしました")
  }
});

document.getElementById("index").addEventListener("click", () => {
  location.href = "https://asa-kawa.github.io/Asa-kawaIndex/";
});
