import React, { useState } from "react";
import { TextInput,replace, View, Text, Keyboard, TouchableOpacity, Vibration, Pressable, FlatList} from "react-native";
import styles from "../Form/style.js"
import ResultImc from "./ResultIMC/"


export default function Form(){
    const [height, setHeight] = useState(null )
    const [weight, setWeight ]=  useState(null )
    const [messageImc, setMessageImc] = useState("Peencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("calcular")
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])
   
   
    function imcCaculator(){
        let valueHeight = height.replace(",",".")
        let totalImc = ((weight/(valueHeight*valueHeight)).toFixed(2))
        setImcList((arr) => [...arr,{id: new Date().getTime(), heig: valueHeight, weig: weight, imc: totalImc} ])
        setImc(totalImc)

    }
    function verification(){
        if (weight ||  height == null){
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório")
        }
}
  
    function validationImc(){
        if (weight != null && height != null){
            imcCaculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é: ")
            setTextButton("Calcular novamente")
            Keyboard.dismiss()
            setErrorMessage(null)
            return
        }
        verification()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura.")
        verification()
    }
    return(                         
        <Pressable
        onPress={Keyboard.dismiss}
         style={styles.mainMain}>
            { imc == null ?
            <View style={styles.viewMain}>
                <Text style={styles.text}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput 
                style={styles.input}
                onChangeText={(text) => setHeight(text)}
                value={height}
                placeholder="Ex 1.75" 
                keyboardType="numeric"
                ></TextInput>

                <Text style={styles.text}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                style={styles.input}
                onChangeText={(text) => setWeight(text)}
                value={weight}
                placeholder="Ex 75.500"
                keyboardType="numeric"
                ></TextInput>

                <TouchableOpacity
                style={styles.button}
                onPress={() => {validationImc()}}
                 >
                    
                <Text style = {styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
                
                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
            </View>
            : 
            
            <View style={styles.else}>
            
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
            
            <TouchableOpacity
            style={styles.button}
            onPress={() => {validationImc()}}
             >
            <Text style = {styles.textButton}>{textButton}</Text>
            </TouchableOpacity>
            <Text style={styles.textHistorico}>Histórico de IMC</Text>
            <FlatList
            indicatorStyle={styles.listImc}
            data={imcList.reverse()}
            renderItem={({item}) => {
                
                return(
                    <View style={styles.historico}>
                        <View style={styles.textPai}>
                        <Text> Altura: {item.heig}</Text>
                        <Text> Peso: {item.weig}</Text>
                        <Text> IMC: {item.imc}</Text></View>                       
                    </View>
                               
                ) 
            }}
           >

            </FlatList>
            </View>
 
            }
            
        </Pressable>   
    )
}


