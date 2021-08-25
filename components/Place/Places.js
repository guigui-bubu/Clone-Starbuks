import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Touchable,
} from "react-native";
import Colors from "../../constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

function Place(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{props.item.location}</Text>
      <Text style={styles.country}>{props.item.country}</Text>
      <View style={styles.contact}>
        <Ionicons name="call" size={15} color="white" />
        <TouchableOpacity
          onPress={() => Linking.openURL(`tel:${props.item.phoneNumber}`)}
        >
          <Text style={styles.phone}>{props.item.phoneNumber}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryFaded,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 15,
    marginHorizontal: 5,
  },
  location: {
    fontWeight: "bold",
  },
  country: {
    fontStyle: "italic",
    marginBottom: 10,
  },
  phone: {
    marginLeft: 10,
    color: "purple",
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Place;
