var html = '';
var red;
var green;
var blue;
var rgbColor;
var hexCode;



function newPalette() {
    location.reload();
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

for ( var i = 0; i < 9; i+=1) {
	html = '<div class="color"' + '>' +
	'</div>';
	document.write(html);
	var elems = document.getElementsByClassName('color');
		for(var i = 0; i < elems.length; i++) {
			r = Math.floor(Math.random() * 256 );
			g = Math.floor(Math.random() * 256 );
			b = Math.floor(Math.random() * 256 );
			rgbColor = 'rgb(' + r + ',' + g + ',' + b + ')';
			hexCode = rgbToHex(r,g,b);
			elems[i].style.backgroundColor = rgbColor;
	}

}



/*   not impleted     Pulls every accent color into an array. see note.

[].filter.call(document.querySelectorAll('.color-group .color'), function(el) {
		return el.querySelector('.shade').textContent === 'A400';
	}).map(function (el) {
		return el.querySelector('.hex').textContent;
	}); */