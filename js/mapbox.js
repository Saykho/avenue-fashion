mapboxgl.accessToken = 'pk.eyJ1Ijoicm9oZXlhYzk1NiIsImEiOiJjbDllZG94a2swOHZxM3Byc2MzN2Y5cWIzIn0.vP9wHB_7Lz6srO8hqgL5vA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-0.1363, 51.5127], //  position [lng, lat]
    zoom: 14,
    projection: 'globe'
});
map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});

const marker1 = new mapboxgl.Marker()
    .setLngLat([-0.1363, 51.5127])
    .addTo(map);