function changeBgColor(){
	document.getElementById('press-me').innerHTML="Press Me!";
	document.getElementById('main-bucket').style.backgroundColor="lightgreen";
	document.getElementById('press-me').style.color="green";
}

document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('main-bucket').onclick=function(){
		document.getElementById('press-me').innerHTML="Welcome to FCC Ottawa!";
		document.getElementById('main-bucket').style.backgroundColor="#006400";
		document.getElementById('press-me').style.color="white";
		window.setTimeout("changeBgColor()",2000);
	}
})