import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
//import logoImagem from '../../../Imagens/Icone_ShopEasy.png'

export const Logo = () => {
    return (
        <Image/>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111926',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      height: 119,
      width:200,
    },
    button: {
      backgroundColor: '#26a1e4',
      padding: 10,    
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  
  });
  