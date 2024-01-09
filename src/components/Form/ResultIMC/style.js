import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    text:{
        fontSize: 25,
        color: '#74819d',
        width: '100%',
        textAlign: "center"
    },

    mainView:{
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        height: 100,
        width: "100%",
        marginBottom: 50,
        flexDirection: "column-reverse"
        
        
    },

    result:{
        fontSize: 40,
        color: '#74819d',
        marginBottom: 10
    },

    shareButton:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 35,
        backgroundColor: '#64e048',
        borderRadius: 15,
    
        
    },

    textButton:{
        color: 'white'
    }

});

export default styles