import React, { useState } from "react";
import { TextInput, View, Text, Button, Touchableop, TouchableOpacity} from "react-native";
import styles from "../Form/style.js"
import ResultImc from "./ResultIMC/"


export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight ]=  useState(null)
    const [messageImc, setMessageImc] = useState("Peencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("calcular")
    
    function imcCaculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }
    
    function validationImc(){
        if (weight != null && height != null){
            imcCaculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é: ")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura.")
    }
    return(                         
        <View style={styles.mainMain}>
            <View style={styles.viewMain}>
                <Text style={styles.text}>Altura</Text>
                <TextInput 
                style={styles.input}
                onChangeText={(text) => setHeight(text)}
                value={height}
                placeholder="Ex 1.75" 
                keyboardType="numeric"
                ></TextInput>

                <Text style={styles.text}>Peso</Text>
                <TextInput
                style={styles.input}
                onChangeText={(text) => setWeight(text)}
                value={weight}
                placeholder="Ex 75.500"
                keyboardType="numeric"
                ></TextInput>

                <TouchableOpacity
                style={styles.button}
                onPress={() => {validationImc()}}>
                <Text style = {styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
                
                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
            </View>
        </View>  
    )
}


