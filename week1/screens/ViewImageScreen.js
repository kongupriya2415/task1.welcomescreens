import React from 'react'
import {ImageBackground,StyleSheet,SafeAreaView, View,Image,Text,Platform,StatusBar} from 'react-native'

const ViewImageScreen = () =>{
return(
<SafeAreaView style={styles.container}>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<View style={{height:50,width:50,backgroundColor:"#fc5c65",marginLeft:20}}></View>
 <View style={{height:50,width:50,backgroundColor:"#4ECDC4",marginRight:20}}></View>
</View>

<View style={{alignItems:'center',marginTop:30}}>
 <Image  style={{height:"95%",width:"120%"}} resizeMode='contain' source= {require('../assets/chair.jpg')}></Image> 
 </View>




</SafeAreaView>
)
}


export default ViewImageScreen;

const styles = StyleSheet.create({
    container:{
        padding: Platform.OS==='android'?StatusBar.currentHeight : 0 
    }
    
 
});
