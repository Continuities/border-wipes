(function(window, document) {
	
	function _initElement(element) {
		var content = element.innerHTML
		, borderCont = document.createElement('div')
		, border = document.createElement('div')
		, elWidth = element.offsetWidth
		, elHeight = element.offsetHeight
		, diag = Math.ceil(Math.sqrt((elWidth * elWidth) + (elHeight * elHeight)))
		;


		borderCont.className = 'border-container';
		borderCont.style.width = diag + 'px'; borderCont.style.height = diag + 'px';
		borderCont.style.top = (elHeight - diag) / 2 + 'px';
		borderCont.style.left = (elWidth - diag) / 2 + 'px';
		borderCont.style.transform = 'rotate(45deg) translate3d(-' + diag + 'px, 0, 0)';
		border.className = 'border';
		border.style.width = elWidth + 'px'; border.style.height = elHeight + 'px';
		border.style.top = (diag - elHeight) / 2 + 'px';
		border.style.left = (diag - elWidth) / 2 + 'px';
		border.style.transform = 'translate3d(' + diag + 'px, 0, 0) rotate(-45deg)';

		borderCont.appendChild(border);
		element.insertBefore(borderCont, element.firstChild);

		borderCont.style.overflow = 'visible';
		setTimeout(function() {
			borderCont.style.overflow = 'hidden';
		}, 0);
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