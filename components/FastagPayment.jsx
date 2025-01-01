import { StyleSheet, TouchableOpacity, Text,TextInput, Button,Alert,Image, View, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ScrollView } from 'react-native';
import React, { useState } from 'react';
import { faArrowLeft, faWallet, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faCircle } from '@fortawesome/free-regular-svg-icons';


export default function FastagPayment() {
  const [inputText, setInputText] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  const handlePress = () => {
    Alert.alert('Button Pressed!', 'You clicked the button.');
  };
  const items = ['UPI', 'Wallet / Postpaid', 'Credit / Debit / ATM Card', 'Net Banking'];

  return(
  <ScrollView>
      <View style={styles.topHeader}> 
      <FontAwesomeIcon icon={faArrowLeft} style={styles.arrowIcon} />
      <Text style={styles.headerText}>Payment</Text>
      </View>
      <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
      <View style={styles.walletRow}>
      <FontAwesomeIcon icon={faSquare} size={18} color="#1A9E75" style={styles.rightGab} />
      <Text>Pay Using Wallet</Text>
      </View>
      <View style={styles.walletRow}>
      <FontAwesomeIcon icon={faWallet} size={18} color="#1A9E75" style={styles.walletIcon} />
      <View style={styles.walletTextContainer}>
      <Text style={styles.walletText}>Parkqwik Wallet</Text>
      <Text style={styles.walletBalance}>Balance: ₹200</Text>
      </View>
      </View>
      </View>
            
      <View style={styles.subContainer}>
      <Text style={styles.mainHeadText}>Suggested For You</Text>
      <View style={styles.suggRow}>
      <FontAwesomeIcon icon={faCircleCheck} size={25} color="#1A9E75" style={styles.circleIcon} />
      <View style={styles.suggTextContainer}>
        <View>
        <Text style={styles.suggText1}>State Bank of India</Text>
        <Text style={styles.suggText2}>**** **** **** 1515</Text>
        </View>
        <View style={styles.suggInputRow}>
        <TextInput style={styles.suggTextInput} placeholder="C" value={inputText}
      onChangeText={(text) => setInputText(text)} numberOfLines={1} maxLength={1}  />
      <TextInput style={styles.suggTextInput} placeholder="V" value={inputText}
      onChangeText={(text) => setInputText(text)} numberOfLines={1} maxLength={1}  />
      <TextInput style={styles.suggTextInput} placeholder="V" value={inputText}
      onChangeText={(text) => setInputText(text)} numberOfLines={1} maxLength={1}  />
        </View>
        </View>
        <Image source={require('../assets/images/sbi-logo.png')} style={styles.bankSBI} resizeMode="contain" /> 
      
      </View>
      <View style={styles.suggRow}>
      <FontAwesomeIcon icon={faCircle} size={25} color="#1A9E75" style={styles.circleIcon} />
      <View style={styles.suggTextContainer}>
        <View>
        <Text style={styles.suggText1}>Google Pay UPI</Text>
        <Text style={styles.suggText2}>9494989700@oksbi</Text>
        </View>
        </View>
        <Image source={require('../assets/images/gpay-icon.webp')} style={styles.bankGpay} resizeMode="contain" /> 
      
      </View>
      </View>
      
      <View style={styles.subContainer}>
      <Text style={styles.mainHeadText}>Other Options</Text>
      <View style={styles.otherOptRow}>
      <FontAwesomeIcon icon={faCircle} size={25} color="#1A9E75" style={styles.circleIcon} />
      <Text style={styles.suggText1}>UPI</Text>
      </View>
      <View style={styles.otherOptRow}>
      <FontAwesomeIcon icon={faCircle} size={25} color="#1A9E75" style={styles.circleIcon} />
      <Text style={styles.suggText1}>Wallet/Postpaid</Text>
      </View>
      <View style={styles.otherOptRow}>
      <FontAwesomeIcon icon={faCircle} size={25} color="#1A9E75" style={styles.circleIcon} />
      <Text style={styles.suggText1}>Credit/Debit/ATM Card</Text>
      </View>
      <View style={styles.otherOptRow}>
      <FontAwesomeIcon icon={faCircle} size={25} color="#1A9E75" style={styles.circleIcon} />
      <Text style={styles.suggText1}>Net Banking</Text>
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
    subContainer: {
      boxShadow: '0 0 8px rgba(219, 219, 219, 0.64)',
      paddingBottom: 12,
      paddingTop: 12,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 10,
      marginBottom: 20,
    },
    walletRow: {
      flexDirection: 'row',
      alignItems: 'center',
      fontSize: 16,
      fontWeight: 500,
      marginBottom: 5,
      marginTop: 5,
    },
    rightGab: {
      marginRight: 10,
  },
  walletIcon: {
    marginRight: 10
  },
  walletTextContainer: {
    flexDirection: 'column',
  },
  walletText: {
    fontSize: 14,
    color: '#1A9E75',
    fontWeight: 400,
  },
  walletBalance: {
    fontSize: 10,
    color: '#393939',
    fontWeight: 400,
  },
  mainHeadText: {
    color: '#393939',
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 15,
  },
  suggRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  circleIcon: {
    marginRight: 15,
  },
  suggTextContainer: {
    flex: 1, 
    flexDirection: 'column',
  },
  suggInputRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  suggTextInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#1A9E75',
    borderRadius: 5,
    width: 40,
    textAlign: 'center',
    marginHorizontal: 5,
    paddingVertical: 5,
    lineHeight: 18,
  },
  bankSBI: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  bankGpay: {
    width: 60,
    height: 40,
    marginLeft: 10,
  },
  inputText: {
    borderBottomColor: '#1A9E75',
    borderBottomWidth: 1,
  },
  suggText1: {
    fontSize: 14,
    color: '#393939',
    marginBottom: 5,
  },
  suggText2: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  otherOptRow: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
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