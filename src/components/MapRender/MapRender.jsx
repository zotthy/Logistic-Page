import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import axios from 'axios';

const API_KEY = '91a01f23e39541b0bd45b80fdbffb23f';  //

const MapComponent = () => {
    const [coordinates, setCoordinates] = useState({
        start: [50.671062, 17.926126],
        end: [50.049683, 19.944544]
    });
    const [addresses, setAddresses] = useState({ start: '', end: '' });

    const getCoordinates = async (address) => {
        try {
            const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${API_KEY}`);
            const { lat, lng } = response.data.results[0].geometry;
            return [lat, lng];
        } catch (error) {
            console.error('Error fetching coordinates:', error);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const startCoords = await getCoordinates(addresses.start);
        const endCoords = await getCoordinates(addresses.end);
        if (startCoords && endCoords) {
            setCoordinates({ start: startCoords, end: endCoords });
        }
    };

    const RoutingMachine = ({ start, end }) => {
        const map = useMap();

        useEffect(() => {
            if (!map) return;

            const routingControl = L.Routing.control({
                waypoints: [
                    L.latLng(start[0], start[1]),
                    L.latLng(end[0], end[1])
                ],
                routeWhileDragging: true,
                showAlternatives: false,
                addWaypoints: false,
                draggableWaypoints: false,
            }).addTo(map);

            return () => map.removeControl(routingControl);
        }, [map, start, end]);

        return null;
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={addresses.start}
                    onChange={(e) => setAddresses({ ...addresses, start: e.target.value })}
                    placeholder="Enter start location"
                />
                <input
                    type="text"
                    value={addresses.end}
                    onChange={(e) => setAddresses({ ...addresses, end: e.target.value })}
                    placeholder="Enter end location"
                />
                <button type="submit">Get Route</button>
            </form>
            <MapContainer center={coordinates.start} zoom={6} style={{ height: "100vh", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={coordinates.start}></Marker>
                <Marker position={coordinates.end}></Marker>
                <RoutingMachine start={coordinates.start} end={coordinates.end} />
            </MapContainer>
        </div>
    );
};

export default MapComponent;

