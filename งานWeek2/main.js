
const name = window.prompt('What is your name')

if (username !== null || username !== "") {
    window.alert("Please enter your name")  
}
document.getElementById("name").innerText = "สวัสดี" + username;

function userAgent() {
    alert(navigator.userAgent)
  }
    function refresh() {
    alert (location.reload())
    }
    function SongJinwoo() {
        window.open("https://www.youtube.com/watch?v=IrHTT2IEKpE") // show the current URL
    }