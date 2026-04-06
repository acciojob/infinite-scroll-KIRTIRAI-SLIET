//your code here!
const list = document.getElementById("infi-list");
let count = 0;

function addItems(n) {
  for (let i = 0; i < n; i++) {
    const li = document.createElement("li");
    count++;
    li.textContent = `List Item ${count}`;
    list.appendChild(li);
  }
}

addItems(100);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= fullHeight - 5) {
    addItems(2);
  }
});
