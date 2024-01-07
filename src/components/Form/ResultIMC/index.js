import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./style";
export default function ResultImc(props){
    return(
        <View style={styles.mainMessage}>
            <Text style={styles.text}>{props.messageResultImc}</Text>
            <Text style={styles.result}>{props.resultImc}</Text>
        </View>
    );
}

