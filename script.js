(function(window, document) {
	
	function _initElement(element) {
		var content = element.innerHTML
		, borderEl = document.createElement('div')
		;

		borderEl.className = 'border-container';
		element.insertBefore(borderEl, element.firstChild);
	}

	window.addEventListener('load', function() {
		Array.prototype.forEach.call(document.getElementsByClassName('angle-wipe'), _initElement);

		// TEST
		var gone = false;
		setInterval(function() {
			Array.prototype.forEach.call(document.getElementsByClassName('angle-wipe'), function(el) {
				el.className = gone ? 'angle-wipe' : 'angle-wipe go';
			});
			gone = !gone;
		}, 2000);
	});

})(window, document);