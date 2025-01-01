

import { StyleSheet, Text,TextInput, Button,Alert,Image, View, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ScrollView } from 'react-native';
import React, { useState } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function FastagBank() {
    const [inputText, setInputText] = useState('');

    return(
    <ScrollView>
        <View style={styles.topHeader}> 
        <FontAwesomeIcon icon={faArrowLeft} style={styles.arrowIcon} />
        <Text style={styles.headerText}>Select Your FASTag Bank</Text>
        </View>
        <View style={styles.mainContainer}>
        <TextInput
        style={styles.textBox}
        placeholder="Search your bank"
        value={inputText}
        onChangeText={(text) => setInputText(text)}  />
          
        <View style={styles.bankList}> 
        <Image 
        source={require('../assets/images/hdfc-logo.png')} 
        style={styles.bankLogo}
        resizeMode="contain" 
      /> 
        <Text style={styles.bankName}>HDFC Bank</Text>
        </View>
        <View style={styles.bankList}> 
        <Image 
        source={require('../assets/images/idfc-bank-logo-04.png')} 
        style={styles.bankLogo}
        resizeMode="contain" 
      /> 
        <Text style={styles.bankName}>IDFC Bank</Text>
        </View>
        <View style={styles.bankList}> 
        <Image 
        source={require('../assets/images/kodak-mahindra-bank.png')} 
        style={styles.bankLogo}
        resizeMode="contain" 
      /> 
        <Text style={styles.bankName}>Kotak Mahindra Bank</Text>
        </View>
        <View style={styles.bankList}> 
        <Image 
        source={require('../assets/images/karur-vysya-bank.png')} 
        style={styles.bankLogo}
        resizeMode="contain" 
      /> 
        <Text style={styles.bankName}>Karur Vysya Bank</Text>
        </View>
        <View style={styles.bankList}> 
        <Image 
        source={require('../assets/images/south-indian-bank.png')} 
        style={styles.bankLogo}
        resizeMode="contain" 
      /> 
        <Text style={styles.bankName}>South Indian Bank</Text>
        </View>
        <View style={styles.bankList}> 
        <Image 
        source={require('../assets/images/union-bank-of-india.png')} 
        style={styles.bankLogo}
        resizeMode="contain" 
      /> 
        <Text style={styles.bankName}>Union Bank of India</Text>
        </View>
        <View style={styles.bankList}> 
        <Image 
        source={require('../assets/images/icici.png')} 
        style={styles.bankLogo}
        resizeMode="contain" 
      /> 
        <Text style={styles.bankName}>ICICI Bank</Text>
        </View>
        <View style={styles.bankList}> 
        <Image 
        source={require('../assets/images/paytm-payment-bank.png')} 
        style={styles.bankLogo}
        resizeMode="contain" 
      /> 
        <Text style={styles.bankName}>Paytm Payments Bank</Text>
        </View>
        <View style={styles.bankList}> 
        <Image 
        source={require('../assets/images/indian-overseas-bank.png')} 
        style={styles.bankLogo}
        resizeMode="contain" 
      /> 
        <Text style={styles.bankName}>Indian Overseas Bank</Text>
        </View>
        <View style={styles.bankList}> 
        <Image 
        source={require('../assets/images/Yes-Bank.png')} 
        style={styles.bankLogo}
        resizeMode="contain" 
      /> 
        <Text style={styles.bankName}>Yes Bank</Text>
        </View>
        <View style={styles.bankList}> 
        <Image 
        source={require('../assets/images/indian-bank.png')} 
        style={styles.bankLogo}
        resizeMode="contain" 
      /> 
        <Text style={styles.bankName}>Indian Bank</Text>
        </View>
        </View>
        <View style={styles.bankfooter}> 
        <Text style={styles.footerText}>Secured by Bharat BillPay </Text>
        <Image 
        source={require('../assets/images/bharat-bill-pay.webp')} 
        style={styles.bankLogo}
        resizeMode="contain" /> 
        </View>
    </ScrollView>
    )}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 16,
        },
        label: {
          fontSize: 18,
          marginBottom: 8,
        },
        displayText: {
          fontSize: 16,
          color: '#333',
        },
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
        textBox: {
          border: 'solid 1px #ccc',
          borderRadius: 8,
          padding: 10,
          width: '100%',
          marginBottom: 20,
        },
        bankList: {
          borderBottomWidth: 1,
          borderBottomColor: '#ddd',
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 12,
          paddingBottom: 12,
        },
        bankLogo: {
          height: 25,
          marginRight: 15,
          width: 25,
        },
        bankName: {
          color: '#393939',
          fontSize: 14,
        },
        bankfooter: {
          backgroundColor: 'rgb(242 242 242)',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'sticky',
          justifyContent: 'center',
          bottom: 0,
          width: '100%',
          left: 0,
        },
        footerText: {
          fontSize: 12,
          color: '#393939',
          paddingTop: 10,
          paddingBottom: 10,
        }
      });
 // Fastag bank ends


