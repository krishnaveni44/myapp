import { StyleSheet, TouchableOpacity, Text,TextInput, Button,Alert,Image, View, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ScrollView } from 'react-native';
import React, { useState } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Processing() {

  
  return(
  <ScrollView>
      <View style={styles.topHeader}> 
      <FontAwesomeIcon icon={faArrowLeft} style={styles.arrowIcon} />
      </View>
      <View style={styles.mainContainer}> 
      <Icon name="spinner" size={40} color="#000" style={styles.spinnerIcon} />
      <Text style={styles.processText}>Processing Your Payment</Text>
      </View>
      <View style={styles.processRefresh}>
      <Text style={styles.processRefreshTxt}>Don't refresh or go back</Text>
      </View>
</ScrollView>
  )}

  const styles = StyleSheet.create({
    topHeader: {
      backgroundColor: '#1A9E75',
      color: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 40,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      position: 'sticky',
      left: 0,
      top: 0,
      zIndex: 9,
    },
    arrowIcon: {
      color: '#fff',
      size: 24,
    },
    mainContainer: {
      alignItems: 'center',
      borderRadius: 16,
      boxShadow: '0 0 8px rgba(219, 219, 219, 0.64)',
      color: '#1A9E75',
      flex: 1,
      justifyContent: 'center',
      marginTop: 100,
      marginLeft: 20,
      marginRight: 20,
      padding: 100,
    },
    spinnerIcon: {
      color: '#1A9E75',
    },
    processText: {
      color: '#393939',
      fontSize: 14,
      marginTop: 20,
    },
    processRefresh: {
      alignItems: 'center',
      marginTop: 50,
      marginBottom: 200,
    },
    processRefreshTxt: {
      color: '#1A9E75',
      fontSize: 14,
      fontWeight: 600,
    }
  })