document.addEventListener("DOMContentLoaded", function () {
    // Mapeamento dos IDs dos aplicativos e seus URLs correspondentes
    const appLinks = {
        "prime": "https://www.mediafire.com/file/sx8nf5ti9dxq3z9/prime-video-android-tv-6-17-0plusv15-1-0-291-armv7a.apk/file",
        "chrunch": "https://www.mediafire.com/file/mqxg8gxkzux9fsr/com.crunchyroll.crunchyroid_3.0.1-22059_1dpi_14lang_dcd33b5bf3027e51996e0e3909de669b_apkmirror.com.apkm+[MConverter.eu].apk/file",
        "iptv": "https://www.mediafire.com/file/0mgt2emd2c9eb1i/iptv-smarters-pro-3-1-5-1.apk/file",
        "max": "https://www.mediafire.com/file/fyy1h7v5dfj4zb4/com.wbd.stream_1.0.0.84-1701000084_minAPI21(arm64-v8a,armeabi-v7a,x86)(nodpi)_apkmirror.com.apk/file"
    };

    // Adiciona um evento de clique para cada app
    Object.keys(appLinks).forEach(appId => {
        const appElement = document.getElementById(appId);
        if (appElement) {
            appElement.addEventListener("click", function () {
                window.location.href = appLinks[appId];
            });
        }
    });
});
