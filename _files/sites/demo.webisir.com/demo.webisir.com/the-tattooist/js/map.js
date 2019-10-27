"use strict";

function isMobile() {
    return /(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent)
}

function init() {
    {
        var e = {
                draggable: isMobile() ? !1 : !0,
                streetViewControl: !1,
                disableDoubleClickZoom: !0,
                scrollwheel: !1,
                zoom: mapData.zoom,
                center: new google.maps.LatLng(mapData.latitude, mapData.longitude),
                styles: [{
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#444444"
                    }]
                }, {
                    featureType: "administrative.locality",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#cfc8be"
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [{
                        color: "#f2f2f2"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 45
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [{
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{
                        color: "#cfc8be"
                    }, {
                        visibility: "on"
                    }]
                }]
            },
            t = new google.maps.Map(document.getElementById("map"), e);
        new google.maps.Marker({
            position: e.center,
            map: t,
            icon: mapData.marker
        })
    }
}
var mapData = config.gmap;
google.maps.event.addDomListener(window, "load", init);