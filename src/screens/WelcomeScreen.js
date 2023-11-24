import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image 
      source={require("../../assets/images/welcome1.png")}
      />
      <Text style={{color: "#f96163", fontSize: 22, fontWeight: "bold"}}>40K+ Premium Recipes</Text>

      <Text style={{fontSize: 42, fontWeight: "bold", color: "#3c444c", marginTop: 35,}}>
        Cook Like A Chef
      </Text>

      <TouchableOpacity 
        style={{backgroundColor: "#f96163",
        borderRadius: 18, 
        paddingVertical: 18, 
        width: "80%", 
        alignItems: "center",
        marginTop: 40,
      }} onPress={() => navigation.navigate("RecipeList")}>
        <Text style={{fontSize: 18, color: 'white', fontWeight: "700", }}> Let's Go</Text>
      </TouchableOpacity>

    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})