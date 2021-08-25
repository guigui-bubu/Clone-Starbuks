// Librairie

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";
import Colors from "../constants/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

function Informations(props) {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Service au consomateur</Text>
        <View style={styles.contact}>
          <Ionicons name="call-outline" size={35} color={Colors.primary} />
          <Text style={styles.info}>8033</Text>
        </View>
        <View style={styles.contact}>
          <Ionicons name="mail-outline" size={35} color={Colors.primary} />
          <TouchableWithoutFeedback
            onPress={() => Linking.openURL("mailto:hello@starbucks.com")}
          >
            <Text style={{ ...styles.info, fontSize: 14 }}>
              hello@starbucks.com
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <View style={styles.button}>
            <Ionicons name="close" size={23} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textTransform: "uppercase",
    fontSize: 17,
    color: Colors.primary,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 195,
    marginTop: 30,
  },
  info: {
    fontWeight: "bold",
    fontSize: 30,
  },
});

export default Informations;
