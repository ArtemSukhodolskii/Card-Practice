document.querySelector('.navbar-burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navbar-wrap').classList.toggle('open');
})