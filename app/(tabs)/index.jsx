import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import Pending from '../../components/Pending'; 
import Failed from '../../components/Failed'; // Import the Recharge component
import FastagBank from '../../components/FastagBank';
import FastagRecharge from '../../components/FastagRecharge';
import FastagPayment from '../../components/FastagPayment';
import Processing from '../../components/Processing';
import Successful from '../../components/Successful';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
    <View style={styles.componentWrapper}>
     <FastagBank />
     </View>
     <View style={styles.componentWrapper}>
     <FastagRecharge />
     </View>
     <View style={styles.componentWrapper}>
     <FastagPayment />
     </View>
     <View style={styles.componentWrapper}>
     <Processing />
     </View>
     <View style={styles.componentWrapper}>
     <Successful  />
     </View>
     <View style={styles.componentWrapper}>
      <Pending />
      </View>
      <View style={styles.componentWrapper}>
      <Failed />  
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  componentWrapper: {
    width: '90%', 
    marginVertical: 10,
  },
});

export default App;
