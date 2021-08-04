import React from 'react'
import {ImageBackground,StyleSheet,SafeAreaView, View,Image,Text,Platform} from 'react-native'

const WelcomeScreen = () =>{
return(
<View>

<ImageBackground style={styles.container} source= {require('../assets/background.jpg')}>
  
<Image style={styles.image} resizeMode='contain' source= {require('../assets/logo-red.png')}></Image>

<Text>Sell What You Don't Need</Text> 
<View style={{height:65,width:500,backgroundColor:"#fc5c65",marginTop:440}}></View>
<View style={{height:65,width:500,backgroundColor:"#4ECDC4"}}></View>


</ImageBackground>




</View>
)
}


export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
        height:"103%",
        width:"107%",
        alignItems:"center",
        padding:35, 
        padding: Platform.OS==='android'?25:0
    },
    image:{
        height:90,
        width:90,
        marginTop:50,
        marginRight:20
    }
    
 
});
