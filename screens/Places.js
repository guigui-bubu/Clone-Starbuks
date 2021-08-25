// Librairies
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux"; // selectionne une partie de notre reducer

// Composant
import Place from "../components/Place/Places";

function Places(props) {
  // Variable
  const places = useSelector((state) => state.places.places);

  let displayedPlaces;

  //displayedPlaces = places.map((toto) => (
  //  <View Key={place.id}>
  //    <Text>{toto.location}</Text>
  //  </View>
  // ));

  return (
    <View>
      <FlatList
        data={places}
        renderItem={(item) => <Place item={item.item} />}
        keyExtractor={(item) => item.id.toString()} // pour mettre les id en string et non en number pour la key
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Places;
