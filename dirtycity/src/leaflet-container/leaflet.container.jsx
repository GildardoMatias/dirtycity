import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { FiMapPin } from 'react-icons/fi'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Container() {
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
                        [<Marker position={[19.572969, -101.808188]}>
                            <Popup>
                                <p style={{ color: 'orange' }}>Reporte de Infraestructura</p> Se reporta un poste en mal estado <br />
                            </Popup>
                        </Marker>,
                        <Marker position={[19.542660, -101.808178]}>
                            <Popup>
                                <p style={{ color: 'red' }}>Reporte de Incidente</p> Se reporta robo de un vehiculo <br />
                            </Popup>
                        </Marker>]
                    }
                    <Marker position={[19.572969, -101.808188]}>
                        <Popup>
                            <p style={{ color: 'orange' }}>Reporte de Infraestructura</p> Se reporta un poste en mal estado <br />
                        </Popup>
                    </Marker>
                    <Marker position={[19.542660, -101.808178]}>
                        <Popup>
                            <p style={{ color: 'red' }}>Reporte de Incidente</p> Se reporta robo de un vehiculo <br />
                        </Popup>
                    </Marker>

                </MapContainer>
            </div>

        </div>

    )
}