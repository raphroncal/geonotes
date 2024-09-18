import { useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Card from "@/components/Card";
import { Note } from "./_layout";

export default function Map() {
    const mapRef = useRef<MapView>(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [mapRegion, setMapRegion] = useState({
        latitude: 14.540635977344408,
        longitude: 121.02691688205952,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
    });
    const date = new Date();
    const addNote = (e: any) => {
        console.log("i'm in");
        console.log(e.nativeEvent.coordinate.latitude);
        console.log(e.nativeEvent.coordinate.longitude);
    };

    let testData: Note = {};
    testData["test"] = {
        title: "Note Title",
        date: new Date(),
        body: "test body",
        coordinates: {
            longitude: 121.02691688205952,
            latitude: 14.540635977344408,
            longitudeDelta: 0.01,
            latitudeDelta: 0.01,
        },
    };
    let testKeys = Object.keys(testData)[0];

    return (
        <View>
            {isModalOpen ? (
                <TouchableOpacity
                    className="z-10 absolute inset-x-0 inset-y-0 justify-center items-center bg-black/70"
                    onPress={() => {
                        setModalOpen(false);
                    }}
                >
                    <View className="w-2/3">
                        <Card id={testKeys} />
                    </View>
                </TouchableOpacity>
            ) : undefined}
            <MapView
                region={mapRegion}
                ref={mapRef}
                onPress={addNote}
                className="relative w-full h-full"
            >
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
