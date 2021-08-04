//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View} from 'react-native';
import ViewImageScreen from './screens/ViewImageScreen';
import WelcomeScreen from './screens/WelcomeScreen';
//import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      {/* <WelcomeScreen /> */}
       <ViewImageScreen />
    </SafeAreaView>
  );
}








const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"black",
     // padding: Platform.OS==='android'?StatusBar.currentHeight : 0
     //padding: Platform.OS==='android'?100:0
    }
    
 
});
