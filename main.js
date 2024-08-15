document.getElementById("description").addEventListener("click", () => {
  alert("ここには何もありません");
});

document.getElementById("index").addEventListener("click", () => {
  location.href = "https://asa-kawa.github.io/Asa-kawaIndex/";
});

function setupCloseButton() {
  const close_button = document.getElementById("close");

  if(window.opener || (window.top === window && history.length <= 1)) {
    close_button.textContent = "終了";

    close_button.addEventListener("click", () => {
      if (!confirm("本当に閉じていいですか？") || !confirm("本当の本当に閉じていいですか？")) {
        alert("キャンセルしました");
        return;
      }
    
      window.close();
    });

    return;
  }

  close_button.addEventListener("click", () => {
    alert("閉じれません");
  });
}

setupCloseButton();