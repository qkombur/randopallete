//Array of material design hexcodes.
var palette = [ "#ff1744", "#f50057", "#d500f9", "#651fff", "#3d5afe", "#2979ff", "#00b0ff", "#00e5ff", "#1de9b6", "#00e676",
               "#b71c1c", "#880e4f", "#4a148c", "#311b92", "#1a237e", "#0d47a1", "#01579b", "#006064", "#004d40", "#1b5e20",
               "#ffebee", "#fce4ec", "#f3e5f5", "#ede7f6", "#e8eaf6", "#e3f2fd", "#e1f5fe", "#e0f7fa", "#e0f2f1", "#e8f5e9",
               "#ffcdd2", "#f8bbd0", "#e1bee7", "#d1c4e9", "#c5cae9", "#bbdefb", "#b3e5fc", "#b2ebf2", "#b2dfdb", "#c8e6c9"]
               
//reloads page. feels hacky
function newPalette() {
    location.reload();
}

// loop that writes html to page.
for ( var i = 0; i < 9; i+=1) {
	var html = '<div class="color"' + '>' +
	'</div>';
	document.write(html);
	var elems = document.getElementsByClassName('color');
	//this loop picks 2 random colors
		for(var i = 0; i < elems.length; i++) {
			//pick a random hexcode from the array palette
			var rand = palette[Math.floor(Math.random() * palette.length)];
			//sets css style to random color
			elems[i].style.backgroundColor = rand;
			//used for accent color
			rand = palette[Math.floor(Math.random() * palette.length)];
			elems[i].style.borderBottomColor = rand;
	}

}