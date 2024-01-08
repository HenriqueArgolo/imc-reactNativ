import { StyleSheet } from "react-native";

    const styles = StyleSheet.create({
        
        viewMain:{
            display: "flex",
            alignItems: "center",
            height: '100%',
        },
        mainMain:{
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: 'white',
            height: '100%',
        },
        
        input:{
            width:300,
            height: 50,
            borderWidth: 0,
            borderRadius: 15,
            marginBottom: 10,
            marginTop: 5,
            backgroundColor:'#e4e4e4',
            padding: 5,
            textAlign: 'left'
        },
    
        text:{
            color: 'gray',
            fontSize: 15,
            textAlign: 'left',
            marginTop: 15
        },

        button:{
            display: "flex",
            justifyContent: "center",
            backgroundColor: '#74819d',
            width: 280,
            height: 50,
            borderRadius: 10, 
            marginTop: 10
            
            
        },

        textButton:{
            textAlign: "center",
            color: 'white',
            fontSize: 16,
        
        },

        errorMessage:{
            fontSize: 12,
            color: 'red',
            

        },
       
    
    });

    export default styles


