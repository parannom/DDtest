    document.addEventListener('click', function(event) {
        if (event.target.tagName === 'A' && event.target.target === '_blank') {
            var url = event.target.href;
            console.log(url);
            if (window.ue && window.ue.ueobject) {
                window.ue.ueobject.launchurl(url).then(() => {
                    console.log("ue response!");
                });
            }
        }
    });
