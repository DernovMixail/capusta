var slider_date = document.getElementById("slider_date");
var output_date = document.getElementById("out_date");
var line_date = document.getElementById("line_d")
output.innerHTML = slider.value; // Display the default slider value
var range = this.value/30000*100;
// Update the current slider value (each time you drag the slider handle)
slider_date.oninput = function() {
output_date.value = this.value;
var range = this.value/360*100;
line_date.style.width = "{0}%".replace("{0}", range);
}

var slider = document.getElementById("slider");
var output = document.getElementById("out");
var line = document.getElementById("line")
output.innerHTML = slider.value; // Display the default slider value
var range = this.value/30000*100;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
output.value = this.value;
var range = this.value/30000*100;
line.style.width = "{0}%".replace("{0}", range);
}