const headline = document.getElementsByTagName("h1"); 
console.log(headline[4].innerText = "หมูเด้ง"); // "Hello World"
const getByClass = document.getElementsByClassName("font-thai");
console.log(getByClass)

//const isBreak = window.confirm("ปิดเว็บมั้ย"); // confirm dialog
//window.alert(isBreak);
//console.log(isBreak); // true or false
//const close = window.confirm("ปิดหน้าต่างนี้มั้ย you sure?"); // confirm dialog
//if (isBreak){
//    window.close; // close the window
//}
//const localtionto = window.confirm("ไปที่หน้าใหม่มั้ย?"); // confirm dialog
//if (localtionto) {
//window.location.assign('Index.html'); // show the current URL
//}

//function replaceTo() {
//    window.location.replace('Index.html'); // show the current URL
//}

//function assign() {
//    window.location.assign('Index.html'); // show the current URL
//}

//function backToฤ() {
//    history.back('age.html'); // show the current URL
//}
//location.back

const c = window.confirm('ไปหน้าใหม่')
if (c) {
    window.alert ("ี" + screen.width + "*" + screen.height); // show the current URL
}