let count = 0;
const countEl = document.getElementById("count-el");
countEl.textContent = count;
function increment() {
  count++;
  countEl.textContent = count;
}
const saveEl = document.getElementById("save-el");
function save() {
  if (count != 0) {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
  }
}
