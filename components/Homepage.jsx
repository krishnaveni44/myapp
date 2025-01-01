import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, Button,Alert,Image, View, Linking } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faBell, faShare } from '@fortawesome/free-solid-svg-icons';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { faCarOn } from '@fortawesome/free-solid-svg-icons';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { faCarBurst } from '@fortawesome/free-solid-svg-icons';
import { faTruckRampBox } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faSquareParking } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingDollar, faGift, faSignHanging, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faMountainCity, faBuilding, faHandcuffs, faReceipt, faSatelliteDish,faGlobe, faLock } from '@fortawesome/free-solid-svg-icons';
import { faLandmark, faTrash, faTrafficLight, faCreditCard, faMobileButton, faPlugCircleBolt, faHandHoldingDroplet } from '@fortawesome/free-solid-svg-icons';
import { WebView } from 'react-native-webview';
import { ScrollView } from 'react-native';
import { ImageBackground } from 'react-native';


export default function Homepage() {

  const [inputValue, setInputValue] = useState('');
  const handleSubmit = () => {
    Alert.alert("Recharge Submitted!");
  };

  const handlePress = () => {
    // Replace with your desired URL
    const url = 'https://example.com/recharge';
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return(
    <ScrollView>
      <View>
        
      <View style={styles.header}>
      {/* <!--Header Part --> */}
          <Text style={styles.per30Left}>
            <Icon name="user" style={styles.userImg} />
          </Text>
         
          <Text style={styles.per40}>
          <Text style={[styles.addVeh, {alignSelf: 'center'}]}>
             <Icon name="plus-circle" style={styles.plusImg} />
            Add Vehicle
          </Text>
          </Text>
    {/* <View>Hello</View> */}
          <Text style={styles.per30Right}>
            <FontAwesomeIcon icon={faWallet} style={styles.iconDesign} />
            <FontAwesomeIcon icon={faBell} style={styles.iconDesign}  />
            <FontAwesomeIcon icon={faShare} style={styles.iconDesign} />
           </Text> 
     </View>
{/* <!--End--> */}

{/* <!-- Services Part --> */}
<View style={styles.outerContainer}>
  {/* Services Heading */}
  <Text style={styles.headLevel2}>Services</Text>

  {/* Grid for Icons and Text */}
  <View style={styles.gridContainer}>
    <View style={styles.iconArrange}>
      <FontAwesomeIcon icon={faMapLocation} size={24} />
      <Text>Nearby</Text>
      <Text>Parking</Text>
    </View>

    <View style={styles.iconArrange}>
      <Icon name="charging-station" size={24} />
      <Text>EV</Text>
      <Text>Parking</Text>
    </View>

    <View style={styles.iconArrange}>
      <FontAwesomeIcon icon={faCarOn} size={24} />
      <Text>Car</Text>
      <Text>Wash</Text>
    </View>

    <View style={styles.iconArrange}>
      <FontAwesomeIcon icon={faCarBurst} size={24} />
      <Text>Vehicle</Text>
      <Text>Insurance</Text>
    </View>

    <View style={styles.iconArrange}>
      <FontAwesomeIcon icon={faTruckRampBox} size={24} />
      <Text>Road</Text>
      <Text>Assistance</Text>
    </View>

    <View style={styles.iconArrange}>
      <FontAwesomeIcon icon={faMoneyBill} size={24} />
      <Text>Pay</Text>
      <Text>Chellan</Text>
    </View>

    <View style={styles.iconArrange}>
      <FontAwesomeIcon icon={faCalculator} size={24} />
      <Text>Toll</Text>
      <Text>Estimator</Text>
    </View>

    <View style={styles.iconArrange}>
      <FontAwesomeIcon icon={faSquareParking} size={24} />
      <Text>Valet</Text>
      <Text>Parking</Text>
    </View>
  </View>
</View>
{/* <!-- End -->
<!-- FastTag Recharge --> */}
<View style={styles.outerContainer}>
  <View>
      <View> 
        <Text style={styles.headLevel2Mar}>FASTag Recharge</Text>
      </View>
      <View> 
        <Text style={styles.textMin}>Get upto 100% cashback on first 3 Fastag Recharge</Text>
      </View>
      <View style={styles.rechargeContainer}>
      <View style={styles.rechargeInner}>
         <TextInput     
         style={styles.txtBox}   
        placeholder="Add vehicle or chassis number"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        keyboardType="default" />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonInner}>
         <Button title="Recharge" onPress={handleSubmit} color="#88C273" style={styles.butStyle} />
         </View>
         </View>
      </View>
      </View>
      <View style={styles.powContainer}> 
        <Text>Powered by</Text>
         <Image 
        source={require('../../assets/images/netc-img.png')} 
        style={styles.powImage}
        resizeMode="contain" 
      /> 
       <Image 
        source={require('../../assets/images/bharat-img.png')} 
        style={styles.powImage}
        resizeMode="contain" 
      /> 
      </View>
      <View>
        <Text style={styles.headLevel2}>My FASTags</Text></View>
      <View style={styles.fasttagList}>
      <View style={styles.fasttagItem}>
      <Image 
        source={require('../../assets/images/hdfc-logo.png')} 
        style={styles.powImage}
        resizeMode="contain" 
      /> 
        <Text>TN02AY9043</Text>
        </View>
        <View style={styles.fasttagItem}>
      <Image 
        source={require('../../assets/images/hdfc-logo.png')} 
        style={styles.powImage}
        resizeMode="contain" 
      /> 
        <Text>TN02AY9043</Text>
        </View>
        <View style={styles.fasttagItem}>
      <Image 
        source={require('../../assets/images/hdfc-logo.png')} 
        style={styles.powImage}
        resizeMode="contain" 
      /> 
        <Text>TN02AY9043</Text>
        </View>
      </View>
  </View>

  <View>
        <View>
          <Text style={styles.headLevel2}>Discover</Text></View>
          <View style={styles.discoverContainer}>
        <View style={styles.discoverItem}>
        <FontAwesomeIcon icon={faBagShopping} size={36} style={styles.bgColor} />
        <Text>Buy</Text>
        <Text>FASTag</Text>
        </View>
        <View style={styles.discoverItem}>
        <FontAwesomeIcon icon={faRotateRight} size={36} style={styles.bgColor} />
        <Text>Replace</Text>
        <Text>FASTag</Text>
        </View>
        <View style={styles.discoverItem}>
        <FontAwesomeIcon icon={faCheck} size={36} style={styles.bgColor} />
        <Text>Active</Text>
        <Text>FASTag</Text>
        </View>
        <View style={styles.discoverItem}>
        <FontAwesomeIcon icon={faXmark} size={36} style={styles.bgColor} />
        <Text>Close</Text>
        <Text>FASTag</Text>
        </View>
        </View>
  </View>
 </View>
{/* <!--End--> */}
{/* <!-- Recharge Fastag --> */}
    <View style={styles.rechargeFasttag}>
      <View style={styles.rechargeFasttagLft}>
        <View style={styles.rechargeTxt1}>Recharge Fastag<Text style={styles.rechargeTxt2}>Get exciting prizes</Text></View>
        <View 
        >
        <Text style={styles.link} onPress={handlePress}>
        Recharge Now
        </Text>
        </View>
        </View>
        <View style={styles.rechargeFasttagRgt}>
        <Image 
        source={require('../../assets/images/recharge.png')} 
        style={styles.rechargeImage}
        resizeMode="contain" 
      /> 
        </View>
    </View>
{/* <!--End--> */}
{/*<!-- Others --> */}
<View style={styles.outerContainer}>
      <Text style={styles.headLevel2}>Others</Text>
      <View style={styles.gridContainer}>
          <View style={styles.iconArrange}>
          <FontAwesomeIcon icon={faCarOn} size={24} />
          <Text>Car Wash</Text>
          </View>
          <View style={styles.iconArrange}>
          <FontAwesomeIcon icon={faSignHanging} size={24} />
          <Text>Estimate Toll</Text>
          </View>
          <View style={styles.iconArrange}>
          <FontAwesomeIcon icon={faLock} size={24} />
          <Text>Shop</Text>
          </View>
          <View style={styles.iconArrange}>
          <FontAwesomeIcon icon={faTrafficLight} size={24} />
          <Text>Protocols</Text>
          </View>
      </View>  
</View>
{/* <!--End-->  */}
{/* <!-- Deals for you --> */}
<View style={styles.emptyContainer}>
          <Text style={styles.headLevel2}>Deals For You</Text>
        <View style={styles.dealsContainer}>
            <View style={styles.dealOption}>
              <Text style={styles.dealTxt1}>Recharge FasTag</Text>
              <Text style={styles.dealTxt2}>& Get petrol worth &#8377;30</Text>
              <Text style={styles.linkDeal} onPress={handlePress}> Recharge Now &rarr; </Text>
            </View>
            <View style={styles.dealOption}>
              <Text style={styles.dealTxt1}>Get 25% off On</Text>
              <Text style={styles.dealTxt2}>on your first car wash</Text>
            <Text style={styles.linkDeal} onPress={handlePress}> Book Now &rarr; </Text>
            </View>
          </View>
    </View>
    {/* <!--End--> */}
{/*<!-- Gonna Travel --> */}
<View style={styles.outerContainer}>
      <Text style={styles.headLevel2}>Gonna Travel?</Text>
      <View style={styles.gridContainer}>
          <View style={styles.iconArrange}>
          <FontAwesomeIcon icon={faCarOn} size={24} />
          <Text>Car Wash</Text>
          </View>
          <View style={styles.iconArrange}>
          <FontAwesomeIcon icon={faSignHanging} size={24} />
          <Text>Estimate Toll</Text>
          </View>
          <View style={styles.iconArrange}>
          <FontAwesomeIcon icon={faLock} size={24} />
          <Text>Shop</Text>
          </View>
          <View style={styles.iconArrange}>
          <FontAwesomeIcon icon={faTrafficLight} size={24} />
          <Text>Protocols</Text>
          </View>
      </View>  
</View>
{/* <!--End-->  */}

{/* <!--Premium Plans--> */}
    <View style={styles.emptyContainer}>
          <Text style={styles.headLevel2}>Deals For You</Text>
        <View style={styles.dealsContainer}>
            <View style={styles.dealOption}>
              <Text style={styles.dealTxt1}>Monthly Parking</Text>
              <Text style={styles.dealTxt2}>Dedicated parking available near you</Text>
              <Text style={styles.linkDeal} onPress={handlePress}> Explore Now &rarr; </Text>
            </View>
            <View style={styles.dealOption}>
              <Text style={styles.dealTxt1}>Elite Car Wash</Text>
              <Text style={styles.dealTxt2}>Elite car grooming at your doorstep</Text>
            <Text style={styles.linkDeal} onPress={handlePress}> Explore Now &rarr; </Text>
            </View>
          </View>
    </View>
    {/* <!--End-->
    <!--Sevices Part --> */}
          <View style={styles.outerContainer}>
            <Text style={styles.headLevel2}>Recharge & Bill Payments</Text>
            <View style={styles.gridContainer}>
                <View style={styles.iconArrange}>
                <FontAwesomeIcon icon={faCreditCard} size={24} />
                  <Text>Fastag</Text><Text>Recharge</Text>
                </View>
                <View style={styles.iconArrange}>
                <FontAwesomeIcon icon={faMobileButton} size={24} />
                  <Text>Mobile</Text><Text>Recharge</Text>
                </View>
                <View style={styles.iconArrange}>
                <FontAwesomeIcon icon={faPlugCircleBolt} size={24} />
                  <Text>Electricity</Text>
                </View>
                <View style={styles.iconArrange}>
                <FontAwesomeIcon icon={faHandHoldingDroplet} size={24} />
                  <Text>Water</Text>
                </View>
                <View style={styles.iconArrange}>
                <FontAwesomeIcon icon={faTrash} size={24} />
                  <Text>Gas</Text><Text>Cylinder</Text>
                </View>
                <View style={styles.iconArrange}>
                <FontAwesomeIcon icon={faLandmark} size={24} />
                  <Text>Loan</Text><Text>{"\n"}payment</Text>
                </View>
                <View style={styles.iconArrange}>
                <FontAwesomeIcon icon={faGlobe} size={24} />
                  <Text>DTH</Text>
                </View>
                <View style={styles.iconArrange}>
                <FontAwesomeIcon icon={faSatelliteDish} size={24} />
                  <Text>House</Text><Text>Rent</Text>
                </View>
            </View>
          </View>
{/* <!--End-->
<!--Premium Plans--> */}
      <View style={styles.emptyContainer}>
        <View style={styles.dealsContainer}>
          <View style={styles.greenBg}>
            <Text style={styles.preGreenTxt1}>Get 15% Off On</Text>
            <Text style={styles.preGreenTxt2}>FASTag recharge</Text>
            <Text style={styles.preGreenTxt3}>Pay using Axis Bank Credit & Debit Cards</Text>
          <Text style={styles.preLink} onPress={handlePress}> Recharge Now </Text>
          </View>
          <View style={styles.blueBg}>
            <Text style={styles.preBlueTxt1}>Reserve Parking</Text>
            <Text style={styles.preBlueTxt2}>Win 300ml petrol while reserve parking area</Text>
            <Text style={styles.preLink} onPress={handlePress}> Explore Now </Text>
          </View>
        </View>
      </View>
{/* <!--End-->
<!-- Your Car's Center --> */}
    <View style={styles.outerContainer}>
    <View style={styles.headLevel2}>Gonna Travel?</View>
    <View style={styles.gridContainer}>
        <View style={styles.iconArrangeBg}>
          <FontAwesomeIcon icon={faReceipt} size={48} color="green" />
          <Text>Pay</Text><Text>Challans</Text>
        </View>
        <View style={styles.iconArrangeBg}>
          <FontAwesomeIcon icon={faHandcuffs} size={48} color="green" />
          <Text>Crime</Text><Text>Reporter</Text>
        </View>
        <View style={styles.iconArrangeBg}>
          <FontAwesomeIcon icon={faBuilding} size={48} color="green" />
          <Text>RTO</Text><Text>Center</Text>
        </View>
        <View style={styles.iconArrangeBg}>
          <FontAwesomeIcon icon={faMountainCity} size={48} color="green" />
          <Text>PUCC</Text><Text>Center</Text>
        </View>
    </View>
    </View>
 {/* <!--End-->
<!--Premium Plans--> */}
          <View style={styles.emptyContainer}>
            <Text style={styles.headLevel2}>Trending</Text>
            <View>
            <ImageBackground
        source={require('../../assets/images/ev-charge-bg.png')}
        style={styles.backgroundImage}
        resizeMode="cover" // or "contain" based on your requirement
      >
        <ScrollView>
              <Text style={styles.bgImgTxt1}>Save &#8377; 500</Text>
              <Text style={styles.bgImgTxt2}>On Your First EV Parking</Text>
              <Text style={styles.bgImgTxt3}>We provide dedicated monthl</Text>
              <Text style={styles.bgImgTxt4}>parking with surveillance</Text>
              <Text style={styles.bgImgTxt5}>100+</Text>
              <Text style={styles.bgImgTxt6}>Happy Customers</Text>
              </ScrollView>
              </ImageBackground>
            </View>
          </View>
  {/* <!--End-->
  <!--Exclusive Offers--> */}
       <View style={styles.outerContainer}>
          <Text style={styles.headLevel2}>Exclusive Offers</Text>
          <View style={styles.gridContainer}>
              <View style={styles.iconArrangeBg}>
                <FontAwesomeIcon icon={faGift} size={48} color="green" />
                <Text>Rewards</Text>
              </View>
              <View style={styles.iconArrangeBg}>
                <FontAwesomeIcon icon={faHandHoldingDollar} size={48} color="green" />
                <Text>Discounts</Text>
              </View>
              <View style={styles.iconArrangeBg}>
                <FontAwesomeIcon icon={faBullhorn} size={48} color="green" />
                <Text>Refer & Win</Text>
              </View>
          </View>
       </View>
       {/* <!-- End -->
       <!-- How Parkqwik works? --> */}
      <View style={styles.emptyContainer}>
        <Text style={styles.headLevel2}>How Parkqwik works?</Text>
        <View>
        <Image 
        source={require('../../assets/images/parkqwik-video-img.png')} 
        style={styles.howtoImage}
        resizeMode="contain" 
      /> 
        </View>
      </View>
      {/* <   1!-- End --> */}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  /*Header */
  header: {
    backgroundColor:'#88C273', 
    paddingTop:10, 
    paddingBottom:10, 
    paddingLeft:'5%', 
    paddingRight:'5%', 
    left:'0',
    top:'0', 
    width:'100%', 
    flexDirection: 'row', 
    flexWrap: 'wrap',
  },
  per30Left: {
    color:'#5410d3e', 
    display:'inline-block', 
    width:'29.5%', 
    marginTop: 8
  }, 
  per30Right: {
    color:'#548d3e', 
    display:'inline-block', 
    width:'29.5%', 
    textAlign: 'right'
  },
   per40: {
    display:'inline-block', 
    width:'39%', 
    textAlign: 'center',
    flex: 1,
    flexDirection: 'column', // Arrange items in a column
    justifyContent: 'space-between', // Align items in the container along the main axis
    alignItems: 'flex-start', marginTop: 10},
   userImg: {
    backgroundColor:'#fff', 
    color: '#548d3e', 
    padding: 10, 
    borderRadius: 40,
  },
   addVeh: {
    backgroundColor:'#fff', 
    color: '#548d3e', 
    paddingLeft: 20, 
    paddingRight: 20, 
    paddingTop: 5, 
    paddingBottom: 5,
     borderRadius: 20, 
     marginTop: 10
    },
   plusImg: {
    color: '#548d3e', 
    paddingRight: 5, 
    fontSize: 14
  },
   iconDesign: {
    backgroundColor:'#c9eebb', 
    color: '#548d3e', 
    padding: 10, 
    borderRadius: 40, 
    marginLeft: 5
  },
   /*Service Part */
   outerContainer: {
    width: '90%', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    marginTop: 30, 
    backgroundColor: '#fff', 
    padding: 20,
    borderRadius: 10, // Optional: Add rounded corners
    // iOS shadow
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84, // Shadow blur radius
    // Android shadow
    elevation: 5, // Controls shadow for Android},
   
   },
   headLevel2: {
    fontSize: '1.3em', 
    fontWeight: '500', 
    marginBottom: 20,
    },
   gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Wrap items to create multiple rows
    justifyContent: 'space-between', // Space evenly across the row
  },
  iconArrange: {
    width: '23%', // Ensure 4 items fit in a row
    alignItems: 'center', // Center content within each grid item
    marginBottom: 20, // Space between rows
    borderRadius: 10, // Optional: Add rounded corners
    // iOS shadow
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25, // Shadow transparency
    shadowRadius: 3.84, // Shadow blur radius
    // Android shadow
    elevation: 5, // Controls shadow for Android},
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },

  // FastTag Recharge
  headLevel2Mar: {
    fontSize: '1.3em', 
    fontWeight: '500', 
    marginBottom: 5,
  },
  textMin: {
    fontSize: 13,
    color: 'rgba(164, 158, 158, 1)'
  },
  rechargeContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  rechargeInner: {
    flexDirection: 'row', // Align children horizontally
  },
  txtBox: {
    borderColor: '#9f9b9b',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    width: 210,
    marginRight: 20,
  },
  buttonContainer: {
    width: 150,
  },
  buttonInner: {
    borderRadius: 5,
    overflow: 'hidden'
  },

  powContainer: {
    flexDirection: 'row',   // Arrange children in a row (horizontally)
    alignItems: 'center',   // Vertically center the items
    justifyContent: 'flex-start',  // Align to the left (or change to 'center' for centered items)
    marginTop: 10,          // Optional: Adjust top margin if needed
  },
  powImage: {
    width: 60,  // Adjust the width of the images as needed
    marginLeft: 10,  // Space between the text and the images
  },
  fasttagList:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap', 
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderBottomStyle: 'solid',
    paddingBottom: 15,
  },
  fasttagItem: {
    alignItems: 'center', 
    marginRight: 15,
  },

  // Discover
  discoverContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',          
    flexWrap: 'wrap', 
    marginTop: 10,
  },
  discoverItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,           
    marginHorizontal: 10,  
    width: '23%',
    alignItems: 'center',
    marginBottom: 20,
   
  },
  bgColor: {
    color: '#88C273',
    marginBottom: 10,
    borderRadius: 5,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android shadow
    elevation: 5,
    paddingTop: 40,
    paddingBottom: 40,
    width: '100%',
    backgroundColor: '#f3fbf0',
  },
// Recharge Fasttag
rechargeFasttag: {
  backgroundColor: '#88C273',
  borderRadius: 10,
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 30,
  padding: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 170,
},
rechargeFasttagLft: {
  flex: 1,
  justifyContent: 'center',
},
rechargeFasttagRgt: {
  marginLeft: 10, 
},
rechargeTxt1: {
  fontSize: 18,
  color: '#fff',
},
rechargeTxt2: {
  fontSize: 12,
  color: '#fff',
},
rechargeImage: {
  width: 140,
},

link: {
  color: '#88C273',
  textDecorationLine: 'none',
  fontSize: 12,
  backgroundColor: '#fff',
  width: 100,
  paddingLeft: 10,
  paddingTop: 8,
  paddingBottom: 8,
  borderRadius: 30,
  marginTop: 15,
},

// Deals for you
emptyContainer: {
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 30,
},

dealsContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
dealTxt1: {
  fontSize: 18,
  color: '#fee72d',
},
dealTxt2: {
  fontSize: 12,
  color: '#fff',
},

linkDeal: {
  color: '#000', // Link color
  textDecorationLine: 'none', // Underline the text
  fontSize: 12,
  backgroundColor: '#fff',
  width: 110,
  paddingLeft: 10,
  paddingTop: 8,
  paddingBottom: 8,
  borderRadius: 30,
  marginTop: 15,
},

dealOption: {
  backgroundColor: '#88c273',
  padding: 20,
  borderRadius: 10,
  flex: 1,
  marginLeft: 5,
  marginRight: 5,
},
// Premium plan
greenBg: {
  backgroundColor: '#88c273',
  padding: 20,
  borderRadius: 10,
  flex: 1,
  marginLeft: 5,
  marginRight: 5,
},
blueBg: {
  backgroundColor: '#494BE0',
  padding: 20,
  borderRadius: 10,
  flex: 1,
  marginLeft: 5,
  marginRight: 5,
},
preGreenTxt1: {
  fontSize: 18,
  color: '#FEE72D',
  fontWeight: 'bold'
},
preGreenTxt2: {
  fontSize: 18,
  color: '#Fff',
},
preGreenTxt3: {
  fontSize: 12,
  color: '#Fff',
},
preBlueTxt1: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#fff'
},
preBlueTxt2: {
  fontSize: 12,
  color: '#fff'
},

preLink: {
  color: '#000',
  textDecorationLine: 'none',
  fontSize: 12,
  backgroundColor: '#fff',
  width: 100,
  paddingLeft: 10,
  paddingTop: 8,
  paddingBottom: 8,
  borderRadius: 30,
  marginTop: 15,
},
iconArrangeBg: {
  width: '23%',
  alignItems: 'center',
  marginBottom: 20,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  paddingTop: 20,
  paddingBottom: 20,
  marginLeft: 10,
  marginRight: 10,
  backgroundColor: '#F3FFEA',
  fontSize: 12,
},
backgroundImage: {
  flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    width: '100%',
    padding: 30,
    height: 220,
},
bgImgTxt1: {
  fontSize: 22,
  color: '#F3FF2E'
},
bgImgTxt2: {
  fontSize: 22,
  color: '#fff',
  marginTop: 5,
},
bgImgTxt3: {
  fontSize: 14,
  color: '#fff'
},
bgImgTxt4: {
  fontSize: 14,
  color: '#fff'
},
bgImgTxt5: {
  fontSize: 30,
  color: '#fff',
  textAlign: 'right',
},
bgImgTxt6: {
  fontSize: 14,
  color: '#fff',
  textAlign: 'right',
},
howtoImage: {
  width: '100%'
}
});