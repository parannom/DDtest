window.ue = {
    ue_open_url: function(url) {
        ue.interface.MyTest(url);
    }
};

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A' && event.target.target === '_blank') {
        event.preventDefault();
        var url = event.target.href;
        window.ue.ue_open_url(url);
    }
});