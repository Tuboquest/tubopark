import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function MapsScreen() {
  const [location, setLocation] = useState<any>();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        // return;
      }

      await Location.getCurrentPositionAsync()
        .then((location) => {
          setLocation(location.coords);
        })
        .catch((e) => {
          setLocation({
            latitude: 48.5835364327068,
            longitude: 7.7500315180398935,
          });
        });
    })();
  }, []);

  return (
    <View style={styles.container}>
      {location && ( // Bloque la vue de la map si pas de localisation
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider="google"
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={"Votre position"}
            description={"Ceci est votre position actuelle"}
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
