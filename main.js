document.getElementById("description").addEventListener("click", () => {
  alert("ここには何もありません");
});

document.getElementById("close").addEventListener("click", () => {
  if (!confirm("本当に閉じていいですか？") || !confirm("本当の本当に閉じていいですか？")) {
    alert("キャンセルしました");
    return;
  }
  window.close();
});

document.getElementById("index").addEventListener("click", () => {
  location.href = "https://asa-kawa.github.io/Asa-kawaIndex/";
});
