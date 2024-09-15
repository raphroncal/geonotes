import Card from "@/components/Card";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Map() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [mapRegion, setMapRegion] = useState({
        latitude: 14.540635977344408,
        longitude: 121.02691688205952,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
    });
    const date = new Date();

    return (
        <View>
            {isModalOpen ? (
                <TouchableOpacity
                    className="z-10 absolute inset-x-0 inset-y-0 justify-center items-center bg-black/70"
                    onPress={() => {
                        setModalOpen(false);
                    }}
                >
                    <Card title="Title" date={date} />
                </TouchableOpacity>
            ) : undefined}
            <MapView region={mapRegion} className="relative w-full h-full">
                <Marker
                    className="static"
                    coordinate={mapRegion}
                    onPress={() => {
                        setModalOpen(true);
                    }}
                />
            </MapView>
        </View>
    );
}
