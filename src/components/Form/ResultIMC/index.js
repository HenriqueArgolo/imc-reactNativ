import React from "react";
import { View, Text, StyleSheet, Share, TouchableOpacity } from "react-native";
import styles from "./style";
export default function ResultImc(props){

    const onShare = async () => {
        const result = await Share.share({
            message: "meu IMC hoje é :" + props.resultImc
        })
    }

    return(
        <View style={styles.mainView}>  
                {props.resultImc != null ?
                    <TouchableOpacity
                    onPress={()=> {onShare()}}
                     style={styles.shareButton}>
                        <Text style={styles.textButton} >Share</Text>
                    </TouchableOpacity>
                :  
                <View/>
            }
            <Text style={styles.result}>{props.resultImc}</Text>
            <Text style={styles.text}>{props.messageResultImc}</Text>          
        </View>
    );
}

