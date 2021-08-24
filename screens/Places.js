// Librairies
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Places(props) {
    let fromLogo = false;
    if (props.route.params && props.route.params.fromLogo) {
        fromLogo = props.route.params.fromLogo;
    }

    return (
        <View>
            <Text>Places</Text>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Text>Redirection</Text>
            </TouchableOpacity>
            {fromLogo && <Text>Vous avez découvert l'easter egg</Text>}
        </View>
    );
}

const styles = StyleSheet.create({});

export default Places;
