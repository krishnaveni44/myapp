import { StyleSheet, Text,TextInput, Button,Alert,Image, View, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ScrollView } from 'react-native';
import React, { useState } from 'react';
import { faArrowLeft, faCar, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import RNPickerSelect from 'react-native-picker-select';

export default function FastagRecharge() {
  const [inputText, setInputText] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  const handlePress = () => {
    Alert.alert('Button Pressed!', 'You clicked the button.');
  };

  return(
  <ScrollView>
      <View style={styles.topHeader}> 
      <FontAwesomeIcon icon={faArrowLeft} style={styles.arrowIcon} />
      <Text style={styles.headerText}>FASTag Recharge</Text>
      </View>
      <View style={styles.mainContainer}>
      <View style={styles.carTypeContainer}>
      <FontAwesomeIcon icon={faCar} style={styles.iconCar} size={28} />
      <View style={styles.textContainer}>
      <Text style={styles.carNumberText}>TN 14 T 3605</Text>
      <Text style={styles.carNameText}>Hyundai Exter</Text>
      </View>
      </View>

      <View style={styles.bankListContainer}> 
        <Image 
        source={require('../assets/images/hdfc-logo.png')} 
        style={styles.bankLogo}
        resizeMode="contain" 
      /> 
        <Text style={styles.bankName}>HDFC Bank</Text>
        <FontAwesomeIcon icon={faChevronDown} size={24} color="#000" />
        </View>

      <View style={styles.rechargeContainer}>
      <Text style={styles.mainHeadText}>Enter Recharge Amount</Text>
      <TextInput
      style={styles.paymentInput}
      placeholder="Eg. 500"
      value={inputText}
      onChangeText={(text) => setInputText(text)}  />
      <View style={styles.paymentText}>
          <Text style={styles.fixAmount}>₹200</Text>
          <Text style={styles.fixAmount}>₹500</Text>
          <Text style={styles.fixAmount}>₹700</Text>
          <Text style={styles.fixAmount}>₹900</Text>
      </View>
      <View style={styles.promoContainer}>
      <Text style={styles.promoButton} onPress={handlePress}>🌟 Apply Promo Code          &gt; </Text>
      </View>
      <View style={styles.poweredContainer}>
        <Text>Powered by</Text>
        <Image 
        source={require('../assets/images/NETC.png')} 
        style={styles.poweredImage} /> 
        <Image 
        source={require('../assets/images/bharat-bill-pay.webp')} 
        style={styles.poweredImage} /> 
       </View>
      </View>

       <View style={styles.sumHeadContainer}>
        <Text style={styles.mainHeadText}>Payment Summary</Text>
       </View>

       <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
            <Text style={styles.summaryRowLeft}>Recharge Amount</Text>           
            <Text style={styles.summaryRowRight}>₹500</Text>
        </View>
        <View style={styles.summaryRow}>
            <Text style={[styles.summaryRowLeft, {color: '#1A9E75'}]} >Promo Code</Text>
            <Text style={[styles.summaryRowRight, {color: '#1A9E75'}]}>-₹50</Text>
        </View>
        <View style={[styles.summaryRow, {borderTopWidth: 1, borderTopColor: '#1A9E753B'}]}>
            <Text style={styles.summaryRowLeft}>Total Amount</Text>
            <Text style={styles.summaryRowRight}>₹450</Text>
        </View>
        </View>
       </View>
       <View style={styles.footerAmount}>
        <Text style={styles.totalAmount}>₹ 450 </Text>
        <Text style={styles.proceedButton} onPress={handlePress}>Proceed To Pay</Text>
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
    headerText: {
      color: '#fff',
      fontSize: 16,
      paddingLeft: 10,
    },
    mainContainer:{
      backgroundColor: "#fff",
      paddingTop: 20,
      paddingLeft:20,
      paddingRight: 20,
    },
    carTypeContainer: {
      backgroundColor: '#F0FFFA',
      borderWidth: 1,
      borderColor: '#1A9E75',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft:15,
      paddingRight: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
      marginBottom: 20,
    },
    iconCar: {
      color: '#1A9E75',
      marginRight: 15,
    },
    textContainer: {
      flex: 1,
    },
    carNumberText: {
      color: '#1A9E75',
      fontSize: 14,
      fontWeight: '600',
    },
    carNameText: {
      color: '#393939',
      fontSize: 10,
    },
    bankListContainer: {
      boxShadow: '0 0 8px rgba(219, 219, 219, 0.64)',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 12,
      borderRadius: 10,
      marginBottom: 20,
    },
    bankLogo: {
      height: 25,
      marginRight: 15,
      width: 25,
    },
    bankName: {
      fontSize: 14,
      color: '#393939',
      marginRight: 15,
      textAlign: 'left',
      flex: 1,
    },
    rechargeContainer: {
      boxShadow: '0 0 8px rgba(219, 219, 219, 0.64)',
      padding: 12,
      borderRadius: 8,
    },
    mainHeadText: {
      color: '#393939',
      fontSize: 16,
      fontWeight: 500,
      marginBottom: 15,
    },
    paymentText: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#F5F5F5',
      marginBottom: 20,
    },
    paymentInput: {
      borderWidth: 1,
      borderColor: '#E5E5E5',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
    },
    fixAmount: {
      backgroundColor: '#1A9E75',
      borderRadius: 8,
      fontSize: 14,
      fontWeight: 500,
      color: '#fff',
      paddingBottom: 8,
      paddingTop: 8,
      paddingLeft: 20,
      paddingRight: 20,
      marginRight: 10,
    },
    promoButton: {
      backgroundColor: '#F0FFFA',
      borderWidth: 1,
      borderColor: '#1A9E75',
      borderRadius: 8,
      fontSize: 14,
      fontWeight: 500,
      color: '#1A9E75',
      padding: 10,
      textAlign: 'center',
      marginBottom: 20,
    },
    poweredContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    poweredImage: {
      width: 53,
      height:'auto',
      marginLeft: 10,
      opacity: 1,
    },
    sumHeadContainer: {
      marginBottom: 15,
      marginTop: 20,
    },
    summaryContainer: {
      backgroundColor: '#F0FFFA',
      borderRadius: 10,
      padding: 20,
    },
    summaryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    summaryRowLeft: {
      color: '#393939',
    },
    summaryRowRight: {
      color: '#393939',
    },
    footerAmount: {
      position: 'sticky',
      left: 0,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      bottom: 0,
      padding: 20,
      backgroundColor: '#fff',
      boxShadow: '0 0 8px rgba(219, 219, 219, 0.64)',
    },
    totalAmount: {
      fontSize: 14,
      color: '#393939',
      fontWeight: 500,
    },
    proceedButton: {
      backgroundColor: '#1A9E75',
      borderRadius: 14,
      color: '#fff',
      fontSize: 16,
      fontWeight: 600,
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 27,
      paddingRight: 27,
    }
  });
// FastagRecharge bank ends


