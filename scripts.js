document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A' && event.target.target === '_blank') {
        var url = event.target.href;
        window.interface.MyTest(url);
    }
});
