var html;
var rgbColor;
// var hexCode;
var x;
// used to reload page on button press
function newPalette() {
    location.reload();
}
/* translates rgb values into hexcode 
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
*/

function randomNumber(x){
	return  x = Math.floor(Math.random() * 256 )
}

// loop that generates rgb values and outputs a div class to the page.
for ( var i = 0; i < 9; i+=1) {
	html = '<div class="color"' + '>' +
	'</div>';
	document.write(html);
	var elems = document.getElementsByClassName('color');
	//this loop is used to avoid generating inline styles
		for(var i = 0; i < elems.length; i++) {
			var r = randomNumber(r);
			var g = randomNumber(g)
			var b = randomNumber(b)
			rgbColor = 'rgb(' + r + ',' + g + ',' + b + ')';
			//sets css style to random color
			elems[i].style.backgroundColor = rgbColor;
	}

}



/*   not impleted     Pulls every accent color into an array. see note.

[].filter.call(document.querySelectorAll('.color-group .color'), function(el) {
		return el.querySelector('.shade').textContent === 'A400';
	}).map(function (el) {
		return el.querySelector('.hex').textContent;
	}); */