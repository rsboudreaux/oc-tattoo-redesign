"use strict";

function getQueryVariable(e) {
    for (var t = window.location.href, s = t.split("?")[1].split("&"), a = 0; a < s.length; a++) {
        var r = s[a].split("=");
        if (decodeURIComponent(r[0]) === e) return decodeURIComponent(r[1])
    }
    return null
}

function setUserwayFirsTabHeadColour() {
    var e = document.getElementsByClassName("widget-header-wrapper")[0],
        t = getQueryVariable("color"),
        s = getQueryVariable("isLight");
    if (t) {
        var a = "true" === s;
        e.setAttribute("style", "background:" + t + "!important"), a ? (e.classList.remove("light-head"), e.classList.add("dark-head")) : (e.classList.add("light-head"), e.classList.remove("dark-head"))
    } else e.setAttribute("style", ""), e.classList.add("light-head"), e.classList.remove("dark-head")
}

function setUserWayFirstTabMenuOffset(e) {
    getQueryVariable("size") && "large" === getQueryVariable("size") ? e.classList.add("userway-large") : e.classList.remove("userway-large")
}

function setUserWayFirstTabMenuPosition(e) {
    var t = getQueryVariable("position");
    e.classList.add("p" + t)
}

function setUserWayFirstTabMenuEnterBlock(e) {
    for (var t = e.querySelectorAll(".menu-opt-item-enter-wrp"), s = 0; s < t.length; s++) {
        t[s].innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAjFJREFUWAntlr1PFFEQwGdmd/kwFAYrQkNpQmNioTFGiSYcV4EFpcHG04gWFjZGI/AXkBgvUQIktjZHweE1hHAUJJYWVAZJ2JwWJpi7qMTdHd9beZvl2OUZ7/bYkHvFzpvMm5nfzr55+xBSMjKZx70/uJrHNPBcH76b9QDmmbnPTAOQy1xUHKQmaZFtIN2XaFeoXSFdBXT29h46vRXKZh91jo9PdejesFH7P+2hoTtTXTXn19LX75XLjSbU+WuBJIxr2wUGzhChdr0uoc5+bIIwjC7Q/9pv3po8p3zFXehbLFAUDJGxrZybJX//dC4FsRB3IoGiYJDwxWrx1U7g3ISJuJCh57pPQqFKRkjxp3Ew5dLcTP3aRvXVzcpDYH7gx0H0yLLuH7oxtgoml8tZW9v8DDx+ql4KmRfWl/NbwZ06GoYWDaS3yqlR6XhuDyAMAsNtUZlBFQ8BPxpnrStr7/I1H+gAZlm09g21qFVSwHwAwtFy6U1F5iQJ49j2RqthBEhNHGvTRn//NQUjgUzH3i0LeVEqcoiS7Yrnp79ak58IVQawCXGdus8U1wqze/UZTCDjObJXEC3Y6RsRHcvsmGh2i9cnjtP9PXQ1c28kDIWInwXU0ElABV2WFqgASJYwDVCHgNIAdQTopKEigeKgeoyu8ysrL/elPakR+beXyTZKr98z0pjoOB9AHAsDVXf/QlIgKm4sUBSUSdStHJOSxwJFQSUFouJqgcJQ4HlflGNS8g/A2wx4ZdD64AAAAABJRU5ErkJggg==" width="12" height="12" /><div class="enter-word">enter</div>'
    }
}

function setUserWayFirstTabMenuFooterLogo(e) {
    var t = getQueryVariable("logosrc"),
        s = getQueryVariable("logourl");
    if (t || s) {
        var a = "";
        t && (a = '<img class="first-tab-company-logo" alt="Company logo" src="' + t + '" />', s && (a = '<a href="' + s + '" class="first-tab-company-logo-link" target="_blank">' + a + "</a>"));
        e.querySelector(".widget-footer").innerHTML = a
    }
}

function localizeMenu(e, t) {
    var s = e.querySelector(".widget-header .title"),
        a = e.querySelector("#visuallyImpaired"),
        r = e.querySelector("#skipToMain"),
        n = e.querySelector("#openAccessibilityMenu");
    s.innerText = locales.title, a.innerText = t ? locales.disable_accessibility : locales.enable_accessibility, r.innerText = locales.skip, n.innerText = locales.open, isAllFeaturesEnabled = t
}

function bindEvents(e) {
    function t(e) {
        return e.classList.contains("first-opt") ? "enable_for_visually_impaired" : e.classList.contains("middle-opt") ? "skip_to_main" : e.classList.contains("last-opt") ? "open_widget" : void 0
    }

    function s(e) {
        return e.classList.contains("first-tab-company-logo-link")
    }
    for (var a = e.querySelectorAll(".menu-opt-item, .first-tab-company-logo-link, .first-tab-menu-close"), r = 0; r < a.length; r++) ! function(e) {
        var r = a[e];
        s(r) || r.addEventListener("click", function(e) {
            e.preventDefault(), closeFirstTab(t(r))
        }), r.addEventListener("keydown", function(n) {
            "ArrowDown" !== n.code && 40 !== n.keyCode && 40 !== n.which || (n.preventDefault(), e === a.length - 1 ? a[0].focus() : a[e + 1].focus()), "ArrowUp" !== n.code && 38 !== n.keyCode && 38 !== n.which || (n.preventDefault(), 0 === e ? a[a.length - 1].focus() : a[e - 1].focus()), s(r) || "Enter" !== n.code && 13 !== n.keyCode && 13 !== n.which && "Space" !== n.code && 32 !== n.keyCode && 32 !== n.which || (n.preventDefault(), closeFirstTab(t(r)))
        })
    }(r);
    window.addEventListener("keydown", keyDownHandler), window.addEventListener("click", clickHandler), window.addEventListener("message", postMessageHandler);
    var n = document.querySelector(".first-tab-menu-close");
    n.addEventListener("keydown", closeKeyDownHandler), n.addEventListener("click", closeClickHandler);
    for (var r = 0; r < a.length; r++) {
        a[r].addEventListener("focusout", function() {
            setTimeout(function() {
                var e = document.querySelector(":focus");
                e && (e.classList.contains("menu-opt-item") || e.classList.contains("first-tab-menu-close") || e.classList.contains("first-tab-company-logo-link")) || closeFirstTab()
            }, 10)
        })
    }
}

function renderFirstTabContent() {
    var e = document.querySelector(".first-tab-menu");
    localizeMenu(e, getQueryVariable("enabled")), setUserWayFirstTabMenuFooterLogo(e), setUserWayFirstTabMenuEnterBlock(e), setUserWayFirstTabMenuPosition(e), setUserWayFirstTabMenuOffset(e), setUserwayFirsTabHeadColour(), bindEvents(e)
}

function closeFirstTab() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    window.parent.postMessage({
        isUserWay: !0,
        action: "close_first_tab",
        ftab_option: e
    }, "*")
}

function postMessageHandler(e) {
    var t = e.data || {};
    if (t.isUserWay && "first_tab_open" === t.action) {
        window.focus();
        document.querySelector("body *").style.fontFamily = "Metropolis", setTimeout(function() {
            var e = document.querySelector(".first-tab-menu"),
                s = e.querySelector(".menu-opt-item.first-opt"),
                a = e.querySelector("#visuallyImpaired"),
                r = t.all_enabled;
            isAllFeaturesEnabled !== r && (a.innerText = r ? locales.disable_accessibility : locales.enable_accessibility), isAllFeaturesEnabled = r, s.focus()
        }, 20)
    }
}

function keyDownHandler(e) {
    (85 === e.keyCode && e.ctrlKey || 27 === e.keyCode) && (e.preventDefault(), closeFirstTab())
}

function clickHandler(e) {
    var t = document.querySelector(".first-tab-menu");
    t !== e.target && !t.contains(e.target) && document.body.contains(e.target) && closeFirstTab()
}

function closeKeyDownHandler(e) {
    "Enter" !== e.code && 13 !== e.keyCode && 13 !== e.which && "Space" !== e.code && 32 !== e.keyCode && 32 !== e.which || (e.preventDefault(), closeFirstTab())
}

function closeClickHandler(e) {
    e.preventDefault(), closeFirstTab()
}
var isAllFeaturesEnabled = null;