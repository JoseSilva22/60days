
var start = new Date(2019, 6, 28, 14, 32, 0, 0);
var end = new Date(2019, 8, 27, 14, 32, 0, 0);
end.setDate(end.getDate() + 61);
var startTime = start.getTime()/1000;
var endTime = end.getTime()/1000;


function updateBar() {
	currTime = Date.now()/1000;
	percent = (currTime - startTime) / (endTime - startTime) * 100;
    document.getElementById("percentage").innerHTML = percent;
}

var timer = setInterval(updateBar, 1000);