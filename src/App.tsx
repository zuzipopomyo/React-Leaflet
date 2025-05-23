import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./index.css";
import 'leaflet/dist/leaflet.css';
function App() {
  const marker: { geocode: [number, number]}[] = [
    {
      geocode: [16.79914330060793, 96.17614018127854],
    },{
      geocode: [16.7696732, 96.1723748],
    }
  ];

  

  return (
    <div className="text-center">
      <MapContainer center={[16.8409, 96.1735] as [number, number]} zoom={13} scrollWheelZoom={false} className="h-screen">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // Pass attribution inside the 'attribution' option
          // See: https://react-leaflet.js.org/docs/start-installation/#tilelayer
          // and https://react-leaflet.js.org/docs/api-components/#tilelayer
          // for more details
          // @ts-ignore
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* <TileLayer attribution="Stame Watercolor" url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"/> */}
        {marker.map((item, index) => (
          <Marker key={index} position={item.geocode}>
            
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
