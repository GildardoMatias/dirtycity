import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import './leaflet-container.css';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Container({ alertas }) {
    return (
        <div>
            <h2 style={{ marginLeft: 18, color: '#3283a8' }}>REPORTES CIUDADANOS</h2>
            <br />

            <div style={{ width: '100vw', height: '100vh' }}>
                <MapContainer center={[19.572960, -101.808178]} zoom={13} scrollWheelZoom={false} >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        alertas.map((alerta) => {
                            return <Marker position={[alerta.latitud, alerta.longitud]} key={alerta.id}>
                                <Popup>
                                    <p style={{ color: 'red' }}>Reporte de Incidente</p> {alerta.detalles} <br />
                                </Popup>
                            </Marker>
                        })
                    }


                </MapContainer>
            </div>

        </div>

    )
}