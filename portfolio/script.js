const bar = document.getElementById('bar')
const close = document.getElementById('close')
const close1 = document.getElementById('close1')
const close2 = document.getElementById('close2')
const close3 = document.getElementById('close3')
const close4 = document.getElementById('close4')
const close5 = document.getElementById('close5')
const nav = document.getElementById('navbar-media')
if (bar) {
	bar.addEventListener('click', () => {
		nav.classList.add('active')
	})
}

if (close) {
	close.addEventListener('click', () => {
		nav.classList.remove('active')
	})
}

if (close1) {
	close1.addEventListener('click', () => {
		nav.classList.remove('active')
	})
}

if (close2) {
	close2.addEventListener('click', () => {
		nav.classList.remove('active')
	})
}

if (close3) {
	close3.addEventListener('click', () => {
		nav.classList.remove('active')
	})
}
if (close4) {
	close4.addEventListener('click', () => {
		nav.classList.remove('active')
	})
}
if (close5) {
	close5.addEventListener('click', () => {
		nav.classList.remove('active')
	})
}
