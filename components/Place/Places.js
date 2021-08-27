import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Colors from "../../constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux"; // pour lancer nos actions avec redux
import * as placesActions from "../../store/actions/places"; // pour importer ttes les actions 'places'

function Place(props) {
  // Variable
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => dispatch(placesActions.deleteStore(props.item.id))}
    >
      <View style={styles.container}>
        <ImageBackground source={props.item.store} style={styles.background}>
          <View style={styles.info}>
            <Text style={styles.location}>{props.item.location}</Text>
            <Text style={styles.country}>{props.item.country}</Text>
          </View>
        </ImageBackground>

        <View style={styles.contact}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${props.item.phoneNumber}`)}
          >
            <Text style={styles.phone}>{props.item.phoneNumber}</Text>
          </TouchableOpacity>
          <Ionicons name="call" size={15} color={Colors.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 15,
    marginHorizontal: 15,
    overflow: "hidden",
    borderRadius: 10,
  },
  location: {
    fontWeight: "bold",
    color: "white",
    fontSize: 17,
  },
  country: {
    fontStyle: "italic",
    color: "white",
  },
  phone: {
    marginRight: 10,
    color: Colors.primary,
  },
  background: {
    width: "100%",
    height: 170,
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "flex-end",
  },
  info: {
    flex: 1,
    justifyContent: "flex-end", // placer à la fin
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
});

export default Place;
