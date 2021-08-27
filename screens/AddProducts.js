import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Platform,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux"; // pour lancer une action
import * as productActions from "../store/actions/products";

function AddProduct(props) {
  // State
  const [productName, setProductName] = useState("");

  // Variable
  const dispatch = useDispatch();

  // Fonction
  const onSubmitPresseHandler = () => {
    // Fermer le clavier
    Keyboard.dismiss();
    dispatch(productActions.addProduct(productName));
    // Afficher une alerte
    Alert.alert(`Yes, votre porposition a été accepté avec succés`);
    // vider le champ formulaire
    setProductName("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Nom du produit</Text>

        <TextInput
          style={styles.input}
          placeholder="Tapez quelque chose..."
          //placeholderTextColor="purple" // pour changer la coleur du text
          autoCapitalize="words" // pour changer les Majuscules
          //autoCorrect={false} // pour eviter l'auto correction
          // autoFocus={true} // pour focus le input
          // keyboardAppearance="dark" // pour changer la couleur du clavier
          // keyboardType="url" // type de clavier
          // maxLength={5} // maximum de lettre
          //multiline={true} // pour mettre sur plusieurs lignes le texte
          value={productName}
          onChangeText={setProductName}
        />

        <TouchableOpacity
          style={styles.submit}
          activeOpacity={0.8}
          onPress={onSubmitPresseHandler}
        >
          <Text style={styles.submitText}>Ajouter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: Dimensions.get("window").width * 0.7,
    elevation: 1, // seulement pour android
    shadowColor: "black", // seulement pour ios
    shadowOffset: { width: 0, height: 0 }, // seulement pour ios
    shadowOpacity: 0.15, // seulement pour ios
    shadowRadius: 50, // seulement pour ios
  },
  input: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 3,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "ios" ? 10 : 5,
    backgroundColor: "#ecf0f1",
    marginTop: 10,
  },
  label: {
    color: Colors.primary,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  submit: {
    backgroundColor: Colors.primary,
    padding: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: 15,
  },
  submitText: {
    color: "white",
  },
});

export default AddProduct;
