const progressBar = document.getElementById('progress-bar')
const contentContainer = document.getElementById('content')
const progressContainer = document.getElementById('progress-container')
const progressCover = document.getElementById('progress-cover')

let articleRead = false
function progressBarUpdate() {

    if(articleRead) {
        return
        //remove event listener
        //analytics API request
    }
    let scroll = document.documentElement.scrollTop + 50

    let height = contentContainer.scrollHeight - document.documentElement.clientHeight

    let percentage = (scroll / height) * 100


    progressContainer.style.visibility = 'visible'

    progressCover.style.transform = `translateX(${percentage}%)`

    if(percentage >= 100) {
        //progressBar.style.background = '#00ff10'
        articleRead = true
        progressBar.classList.add('finished')
    }
    
}
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
window.addEventListener('scroll', progressBarUpdate)