import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

// UTIL FUNCTION
// Get Coordinates in array format
const getCoordinates = el => {
  const coordinatesLon = Number(el.getAttribute("data-lon"));
  const coordinatesLat = Number(el.getAttribute("data-lat"));
  return [coordinatesLon, coordinatesLat];
};

const createGeoJason = (el, index) => {
  // get mark coordinates
  const coordinates = getCoordinates(el);
  const isMarked = el.getAttribute("data-marked");

  const completedObject = {
    index: index,
    geometry: {
      coordinates: coordinates
    },
    marked: isMarked
  };
  return completedObject;
};

const addMapEvent = (obj, elements, map) => {
  obj.element.addEventListener("click", () => {
    console.log(obj);
    console.log(elements);
    elements.forEach(siteBox => siteBox.classList.remove("open"));
    elements[obj.index].classList.add("open");
    console.log(obj.index);

    map.flyTo({
      center: obj.flyTo.coordinates,
      zoom: obj.flyTo.zoom,
      speed: obj.flyTo.speed
    });
  });
};

export const buildMap = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibG9uZXJzY29tcGFueSIsImEiOiJjandqNTlsYXIwNjduNDRwNjhkemhhZXVtIn0.c2PlH4OqBZUOQgDM4hg7fw";
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/lonerscompany/ck2waac450nav1dtdnrizbfoi",
    center: [15.565441, 49.984897],
    scrollZoom: false,
    zoom: 5,
    minZoom: 5,
    maxZoom: 8
  });

  //map.scrollZoom.disable();

  const locationEls = Array.from(
    document.getElementsByClassName("map-location")
  );

  const geojson = locationEls.map(createGeoJason);

  console.log(geojson);

  geojson.forEach(marker => {
    var el = document.createElement("div");
    el.className = "h-4 w-4 bg-gray-300 rounded-full cursor-pointer";

    if (marker.marked) {
      el.classList.add("bg-blue-600");
      el.classList.add("z-10");
    }

    var mapEntryObj = {
      element: el,
      index: marker.index,

      flyTo: {
        coordinates: marker.geometry.coordinates,
        zoom: 7,
        speed: 1.5
      }
    };

    addMapEvent(mapEntryObj, locationEls, map);

    // add marker to map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
  });
};
