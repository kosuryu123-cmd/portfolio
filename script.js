// 年号
const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

// 画像クリック → ライトボックス
const lb = document.getElementById("lightbox");
const lbImg = lb?.querySelector("img");

document.querySelectorAll(".card img").forEach(img => {
  img.loading = "lazy";
  img.style.cursor = "zoom-in";
  img.addEventListener("click", () => {
    if (!lb || !lbImg) return;
    lbImg.src = img.src;
    lb.classList.add("show");
    lb.setAttribute("aria-hidden", "false");
  });
});

// 閉じる（どこでもクリック / Esc）
lb?.addEventListener("click", () => {
  lb.classList.remove("show");
  lb.setAttribute("aria-hidden", "true");
});
window.addEventListener("keydown", (e)=>{
  if (e.key === "Escape" && lb?.classList.contains("show")) lb.click();
});
