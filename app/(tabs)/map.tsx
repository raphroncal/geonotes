import { Link } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Modal from "./modal";

export default function Map() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [mapRegion, setMapRegion] = useState({
        latitude: 14.540635977344408,
        longitude: 121.02691688205952,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
    });

    return (
        <View>
            {isModalOpen ? <Modal /> : undefined}
            <MapView region={mapRegion} className="w-full h-full">
                <Marker
                    coordinate={mapRegion}
                    onPress={() => {
                        setModalOpen(true);
                    }}
                />
            </MapView>
        </View>
    );
}
