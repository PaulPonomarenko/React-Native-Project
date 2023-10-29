import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  const { longitude, latitude, photoName } = route.params;

  const defaultLatitude = 37.4220936;
  const defaultLongitude = -122.083922;
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: latitude ? latitude : defaultLatitude,
          longitude: longitude ? longitude : defaultLongitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />
      <Marker
        coordinate={{
          latitude: latitude ? latitude : defaultLatitude,
          longitude: longitude ? longitude : defaultLongitude,
        }}
        title={photoName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
export default MapScreen;
