import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../title/style"

export default function Title(){
    return(
        <View style={styles.mainText}>
            <Text style={styles.text}>Calcular iMC</Text>
        </View>
    );
}



