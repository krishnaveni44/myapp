import { StyleSheet, TouchableOpacity, Text,TextInput, Button,Alert,Image, View, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ScrollView } from 'react-native';
import React, { useState } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faExclamation,faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';



export default function Failed() {
  const handleButtonPress = () => {
    Alert.alert("Button Pressed!", "You clicked the button.");
  };
  const handlePress = () => {
    const url = 'https://www.example.com'; // URL to open
    Linking.openURL(url)
      .catch(err => console.error("Failed to open URL:", err)); // Error handling
  };
  return(
  <ScrollView>
      <View style={styles.warnIconContainer}> 
      <Image 
        source={require('../assets/images/error-icon.png')} 
        style={styles.warningIcon}
        resizeMode="contain" 
      /> 
      </View>
      
      <View style={styles.resultTxtContainer}>  
        <Text style={styles.resultTextError}>Transaction Failed</Text>

      <Text style={styles.resultText2}>Looks like something went wrong</Text>
      <Text style={styles.resultText2}>while processing your request</Text>
      </View>
      <View style={styles.tryAgainButtonContainer}>
      <View style={styles.tryAgainButton}>
        <Text style={styles.tryAgainButtonText}>Try Again </Text>
        <FontAwesomeIcon icon={faArrowRotateRight} size={16} style={styles.rotateIcon} />
      </View>
      <Text style={styles.resultLinkText}>Need Help?</Text>
      </View>
      <View>
      <TouchableOpacity onPress={handlePress}>
        
      </TouchableOpacity>
      </View>
      <View style={styles.doneButton}>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonDoneText}>Done</Text>
      </TouchableOpacity>
      </View>
</ScrollView>
  )}

  const styles = StyleSheet.create({
    warnIconContainer: {
      alignItems: 'center',
      marginTop: 45,
    },
    warningIcon: {
      height: 100,
      width: 150,
    },
    resultTxtContainer: {
      alignItems: 'center',
    },
    resultTextError: {
      color: '#FC6969',
      fontSize: 20,
      fontWeight: 600,
      marginBottom: 10,
      marginTop: 30,
    },
    resultText2: {
      color: '#393939',
      fontSize: 14,
      marginBottom: 5
    },
    tryAgainButtonContainer: {
      alignItems: 'center',
      marginTop: 80,
    },
    tryAgainButton: {
      backgroundColor: '#fff',
      borderColor: '#1A9E75',
      borderRadius: 12,
      borderWidth: 1,
      flex: 1,
      flexDirection: 'row',
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 10,
      verticalAlign: 'middle',
      width: 120,
    },
    rotateIcon: {
      color: '#1A9E75',
      width: 16,
    },
    tryAgainButtonText: {
      color: '#1A9E75',
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 12,
    },
    resultLinkText: {
      marginTop: 15,
      textDecorationStyle: 'solid',
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
  