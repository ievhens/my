/* Task 1 */

function addCopyright() {
  let selection = window.getSelection();

  let temp = document.createElement("div");
  for (let i = 0; i < selection.rangeCount; ++i) {
      temp.appendChild(selection.getRangeAt(i).cloneContents());
  }
  let selectionHTML = temp.innerHTML;
  
  let d = new Date;
  let day = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();


  let copyright = `<br><br>&copy; Copied from ordered table<br><br>${day}/${month}/${year}<br>${hours}:${minutes}:${seconds}`;
  let topaste = selectionHTML + copyright;

  let temp2 = document.createElement('div');

  document.body.appendChild(temp2);
  temp2.innerHTML = topaste;
  selection.selectAllChildren(temp2);
  window.setTimeout(function () { document.body.removeChild(temp2); }, 0);
}
