function converterPxOnNum(nr){

	return Number(nr.substr(0,nr.length - 2));
}

function moveAxisX (direction){

	var ball = document.getElementById('ball');
	var frame = document.getElementById('frame');

	var currentLocationX = converterPxOnNum(ball.style.marginLeft);

	ball.style.marginLeft = currentLocationX + 1* direction + "px";

}

function changeDirectionOnAxisX (currentDirection){

	var direction = currentDirection;

	var leftBorder = 0;

	var rightBorder = converterPxOnNum(frame.style.width) - converterPxOnNum(ball.style.width);

	var currentLocationX = converterPxOnNum(ball.style.marginLeft);

	if (currentDirection == 1 && (currentLocationX - rightBorder) >=0) direction = -1;
	if (currentDirection == -1 && (currentLocationX - leftBorder) <=0) direction = 1;

	return direction;
}

function moveAxisY (direction){

	var ball = document.getElementById('ball');
	var frame = document.getElementById('frame');

	var currentLocationY = converterPxOnNum(ball.style.marginTop);

	ball.style.marginTop = currentLocationY - 1* direction + "px";

}

function changeDirectionOnAxisY (currentDirection){

	var direction = currentDirection;

	var topBorder = 0;

	var bottomBorder = converterPxOnNum(frame.style.height) - converterPxOnNum(ball.style.height);

	var currentLocationY = converterPxOnNum(ball.style.marginTop);

	if (currentDirection == 1 && (currentLocationY - topBorder) <=0) direction = -1;
	if (currentDirection == -1 && (currentLocationY - bottomBorder) >=0) direction = 1;

	return direction;
}

function setBallOnMiddle(){

	var ball = document.getElementById('ball');
	var frame = document.getElementById('frame');

	ball.style.marginTop = parseInt(converterPxOnNum(frame.style.height) / 2 - converterPxOnNum(ball.style.height) / 2) + "px";
	ball.style.marginLeft = parseInt(converterPxOnNum(frame.style.width) / 2 - converterPxOnNum(ball.style.width) / 2) + "px";

}

var directionX = 1;
var directionY = 1; 

var speedX = 2;
var speedY = 5;

setBallOnMiddle();

setInterval("moveAxisX(directionX); directionX = changeDirectionOnAxisX(directionX);", speedX);
setInterval("moveAxisY(directionY); directionY = changeDirectionOnAxisY(directionY);", speedY);