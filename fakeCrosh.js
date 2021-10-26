const jsbinShowEdit = null;
var input = document.getElementById('hiddenInput');
var mirror = document.getElementById('mirrorInput');

String.prototype.insert = function(start, newStr) {
	return this.slice(0, start) + newStr + this.slice(start);
}

input.focus();
document.addEventListener('keydown', () => {
	input.focus();
	window.setTimeout(() => {
		mirror.innerHTML = hiddenInput.value;
		mirror.innerHTML = mirror.innerHTML.insert(input.selectionStart, `<span id='caret'></span>`);
	}, 0);
});
