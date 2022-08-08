/* Task 1 */
function display(){
  let name = document.getElementById("login").value;
  let rememberme = document.getElementById("rememberme").checked;
  let no = rememberme ? "" : "не ";

  document.getElementById("hello").innerText = `Привет, ${name}! Я тебя ${no}запомнил.`;
}