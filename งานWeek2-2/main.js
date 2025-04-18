function setAlert() {
   let intervalid = 0;
   intervalid = setInterval(function() {
    const isBreak = confirm("คุณต้องการพักสายตาหรือไม่");
    if (isBreak) {
        clearInterval(intervalid); // stop the interval
        alert("ขอบคุณที่พักสายตา");

    }
   }, 2 * 60 * 1000);
}