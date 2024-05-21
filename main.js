redirect(window.location.pathname);

document.addEventListener("yt-navigate-start", (e) => {
    const path = e?.detail?.url;
    redirect(path);
});

function redirect(path) {
    const isNormalVideo = path.startsWith("/watch");
    const isShorts = path.startsWith("/shorts");
    if(isNormalVideo) {
        redirectNormalVideo(path);
    }
    else if(isShorts) {
        redirectShorts(path);
    }
    else {
        return;
    }
}

function redirectNormalVideo(path) {
    const newURL = new URL(window.location);
    const v = newURL.searchParams.get("v");
    const t = newURL.searchParams.get("t");
    newURL.pathname = `/embed/${v}`;

    if(t) {
        newURL.searchParams.append("start", t);
    }

    window.location.replace(newURL.toString());
    
    if(t) {
        window.location.replace(`https://tsai1247.github.io/eMbEdedTUBE?v=${v}&t=${t}`);
    }
    else {
        window.location.replace(`https://tsai1247.github.io/eMbEdedTUBE?v=${v}`);
    }

}

function redirectShorts(path) {
    const isShorts = path.startsWith("/shorts/");
    const newURL = new URL(window.location);
    const v = newURL.pathname.replace("shorts/", "");
    window.location.replace(`https://tsai1247.github.io/eMbEdedTUBE?v=${v}`);
}

// https://www.youtube.com/live_chat?v=12345&embed_domain=www.example.com。
