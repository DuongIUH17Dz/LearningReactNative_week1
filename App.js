import React from 'react';
import { SafeAreaView, StyleSheet, View,Text,TouchableOpacity } from 'react-native';

const YourApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.circle} />
      </View>
      <View style={styles.box2} >
        <Text style={styles.text}>GROW </Text>
        <Text  style={styles.text}>YOUR BUSINESS </Text>
        

      </View>
      <View style={styles.box3} ><Text style={styles.text1}> We will help to grow up your business using   </Text>
        <Text  style={styles.text1}>online server </Text>
        </View>
      
        
      <View style={styles.box4} >
      <TouchableOpacity style={styles.button} onPress={() => alert('Login pressed')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Sign Up pressed')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
  },
  box1: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  box2: {
    flex: 3,
  },
  box3: {
    
    flex: 3,
  },
  box4: {
    
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Sắp xếp các nút theo hàng
    justifyContent: 'space-around', // Căn đều các nút
  },
  circle: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    borderWidth: 10, 
    borderColor: 'black', 
  },
   text: {
    fontSize: 22,
    color: 'black', 
    textAlign: 'center', 
    textShadowOffset:{width:1,height:1}



  },
  text1: {
    fontSize: 14,
    justifyContent: 'top',
    color: 'black', 
    textAlign: 'center', 
    textShadowOffset:{width:1,height:1}



  },
  button: {
    backgroundColor: 'orange', // Màu nền của nút
    borderRadius: 5, // Đường cong viền của nút
    paddingVertical: 10, // Khoảng cách dọc bên trong nút
    paddingHorizontal: 20, // Khoảng cách ngang bên trong nút
    marginHorizontal: 10, // Khoảng cách giữa các nút
  },
  buttonText: {
    color: 'black', // Màu chữ của nút
    fontSize: 16, // Kích thước chữ
    textAlign: 'center', // Căn giữa chữ trong nút
  },

});

export default YourApp;
