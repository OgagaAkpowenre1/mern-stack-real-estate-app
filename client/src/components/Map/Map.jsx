import "leaflet/dist/leaflet.css";
import './map.scss';
import {MapContainer, TileLayer} from "react-leaflet";
import Pin from "../Pin/Pin";


function Map({items}){
    const position = [51.505, -0.09]

  return (
    <MapContainer  center={
      items.length === 1
        ? [items[0].latitude, items[0].longitude]
        : [52.4797, -1.90269]
    } zoom={7} scrollWheelZoom={false}  style={{ height: "100%", width: "100%" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item => (<Pin item={item} key={item.id} />))}
  </MapContainer>
  )
}

export default Map