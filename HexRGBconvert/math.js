// Javascript for the HexRGB

$(document).ready(function() {
	//Function to convert hex format to a rgb color
	var hex;

	function rgbify() {
	  hex = $('input').val().replace('#','');
	  
	  var reg = hex.length === 3 ? hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2] : hex;
	  var conv = reg.match(/.{2}/g);
	  
	  var r = parseInt(conv[0],16);
	  var g = parseInt(conv[1],16);
	  var b = parseInt(conv[2],16);
	  
	  var rgb = r+','+g+','+b;
	  rgb = rgb.replace(/NaN/g,' ... ');
	  
	  $('span').text('rgb('+rgb+')');
	}

	setInterval(rgbify,10);
});


	function copyToClipboard(element) {
	  var $temp = $("<input>");
	  $("body").append($temp);
	  $temp.val($(element).text()).select();
	  document.execCommand("copy");
	  $temp.remove();
	};


