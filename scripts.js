function openExternalURL(url) {
    // Unreal Engine의 함수를 호출하기 위해 JS를 통해 URL을 보냄
    if (window.ue && window.ue.openURL) {
        window.ue.openURL(url);
    } else {
        console.log("Unreal Engine context is not available");
    }
}