import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import axios from 'axios';

const API_KEY = '91a01f23e39541b0bd45b80fdbffb23f';

const MapComponent = ({ startAddress, endAddress }) => {
    const [coordinates, setCoordinates] = useState({
        start: [50.671062, 17.926126],
        end: [50.049683, 19.944544]
    });

    const getCoordinates = async (address) => {
        try {
            const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${API_KEY}`);
            const { lat, lng } = response.data.results[0].geometry;
            return [lat, lng];
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    };

    useEffect(() => {
        const fetchCoordinates = async () => {
            const startCoords = await getCoordinates(startAddress);
            const endCoords = await getCoordinates(endAddress);
            if (startCoords && endCoords) {
                setCoordinates({ start: startCoords, end: endCoords });
            }
        };
        fetchCoordinates();
    }, [startAddress, endAddress]);

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
        <MapContainer center={coordinates.start} zoom={6} style={{ height: "70vh", width: "70%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={coordinates.start}></Marker>
            <Marker position={coordinates.end}></Marker>
            <RoutingMachine start={coordinates.start} end={coordinates.end} />
        </MapContainer>
    );
};

export default MapComponent;

