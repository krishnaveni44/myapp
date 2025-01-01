import { StyleSheet, TouchableOpacity, Text,TextInput, Button,Alert,Image, View, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ScrollView } from 'react-native';
import React, { useState } from 'react';
import { faGift, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

export default function Successful() {
  const handleButtonPress = () => {
    Alert.alert("Button Pressed!", "You clicked the button.");
  };
  
  return(
  <ScrollView>
   
      
      <View style={styles.topHeaderCurve}> 
      <Image 
        source={require('../assets/images/tick-icon.png')} 
        style={styles.tickIcon}
        resizeMode="contain" 
      /> 
        <Text style={styles.paymentText1}>Payment Successful</Text>
        <Text style={styles.paymentText2}>Transaction ID:538901388</Text>
        <Text style={styles.paymentDetButton}>View Details</Text>
      </View>
      <View>
      
      </View>
      <View style={styles.mainContainer}>
      <View style={styles.rewardButton}>
      <FontAwesomeIcon icon={faGift} size={22} color="#1A9E75" />
      <Text style={styles.buttonText}>Rewards Earned</Text>
      <FontAwesomeIcon icon={faGreaterThan} size={25} color="#1A9E75" />
      </View>
      </View>
      <View style={styles.doneButton}>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonDoneText}>Done</Text>
      </TouchableOpacity>
      </View>
</ScrollView>
  )}

  const styles = StyleSheet.create({
    topHeaderCurve: {
      alignItems: 'center',
      backgroundColor: '#1A9E75',
      borderBottomLeftRadius: 200,
      borderBottomRightRadius: 200,
      paddingTop: 50,
      paddingBottom: 50,
    },
    paymentText1: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 600,
      marginBottom: 10,
    },
    paymentText2: {
      color: '#fff',
      fontSize: 14,
    },
    paymentDetButton: {
      backgroundColor: '#fff',
      borderRadius: 12,
      color: '#1A9E75',
      fontWeight: 600,
      marginTop: 30,
      paddingBottom: 7,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5, 
    },
    tickIcon: {
      width: 132,
    },
    mainContainer: {
      marginLeft: 20,
      marginRight: 20,
    },
    rewardButton: {
      alignItems: 'center',
      backgroundColor: '#F0FFFA',
      borderColor: '#1A9E75',
      borderRadius: 8,
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 50,
      padding: 10,
    },
    buttonText: {
      color: '#1A9E75',
      flex: 1,
      fontSize: 14,
      fontWeight: 500,
      marginHorizontal: 10,
    },
    doneButton: {
      alignItems: 'center',
      backgroundColor: '#1A9E75',
      borderRadius: 14,
      bottom: 0,
      color: '#fff',
      left: '2%',
      padding: 10,
       right: '2%',
      width: '96%',
      marginTop: 175,
    },
    buttonDoneText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 600,
    }
  })