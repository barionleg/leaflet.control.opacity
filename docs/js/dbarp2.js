//MIERUNE Color
const m_color = new L.tileLayer('https://tile.mierune.co.jp/mierune/{z}/{x}/{y}.png', {
    attribution:
        "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.",
});

//MIERUNE MONO
const m_mono = new L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
    attribution:
        "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.",
});

//OSM
const o_std = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
});

//GSI Pale
var t_pale = ('https://archive.org/download/dbrein_tt_n/dbrein_tt_n.png', 
                 imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
                 L.imageOverlay(t_pale, imageBounds).addTo(map);
		{
            layers: 't_pale',
            maxZoom: 18,
            format: 'image/png',
            transparent: true
        });	

//GSI Ort
const t_ort = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg', {
    attribution:
        "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
});

//MAP
const map = L.map('map', {
    center: [48.85, 2.35],
    zoom: 13,
    zoomControl: true,
    layers: [m_mono],
});

//BaseLayer
const Map_BaseLayer = {
    'MIERUNE Color': m_color,
    'MIERUNE MONO': m_mono,
};

//AddLayer
const Map_AddLayer = {
    'OSM': o_std,
};

//LayerControl
L.control
    .layers(Map_BaseLayer, Map_AddLayer, {
        collapsed: true,
    })
    .addTo(map);

//OpacityControl
L.control
    .opacity(Map_AddLayer, {
        label: 'Layers Opacity',
    })
    .addTo(map);
