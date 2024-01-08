import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    text:{
        fontSize: 18,
        color: '#74819d',
        width: '100%',
        textAlign: "center"
    },

    mainMessage:{
        display:"flex",
        alignItems: "center",
        marginTop: 60,
        height: 100,
        width: 200,
        
        
    },

    result:{
        fontSize: 30,
        color: '#74819d'
    },

    viewShare:{  
        display: "flex",
        alignItems: "center",
        width: '100%',
        marginBottom: 5,

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