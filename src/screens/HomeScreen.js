import React,{useEffect, useState} from "react";
import { View,Text, StyleSheet } from "react-native";
//import CartScreen from "./CartScreen";
const HomeScreen = () => {


    return(

        <View>
            <Text style = {styles.text}>Welcome to screen</Text>
        </View>

    );

};
const styles = StyleSheet.create({
  text:{
      fontSize:30,
      fontFamily: "Italian",
      fontHeight: 20,
  },  
});

export default HomeScreen;