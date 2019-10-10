var oDiv = document.getElementsByTagName('div')[0];
var oUl = oDiv.getElementsByTagName('ul')[0];
var oBtnLeft = oDiv.getElementsByClassName('leftBtn')[0];
var oBtnRight = oDiv.getElementsByClassName('rightBtn')[0];
function startMove(obj,target){
	obj = oUl;
	var toTarget = obj.offsetLeft + target;
	var speed = (toTarget - obj.offsetLeft)/7; 
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		// if(obj.offsetLeft == 0 && target > 0){
		// obj.style.left = -2800 + 'px';
		// }
		obj.style.left = obj.offsetLeft + speed + 'px';
		speed > 0?Math.ceil(speed):Math.floor(speed);
		if(Math.abs(obj.offsetLeft) >= Math.abs(toTarget)){
			obj.style.left = toTarget + 'px';
			if (obj.offsetLeft == -2800 && target < 0){
				obj.style.left = 0 + 'px';
			}
			// clearInterval(obj.timer);
		}
	},1000)

}
oBtnLeft.onclick = function(){
	startMove(this,400);
}
oBtnRight.onclick = function(){
	startMove(this,-2800);
}
