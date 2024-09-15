import React from 'react';
import { Text, SafeAreaView, StyleSheet, View , Image } from 'react-native';

const YourApp=()=>{
  return(
    <View style = {{
      flex:1,
      justifyContent: 'center',
      alignItems:'center'
      
    }}
    >
    <Image source={{uri :'https://avatars.githubusercontent.com/u/46671439?v=4'}} style ={{height:100 , width:100}}/>
    </View>

  );
  

};

export default YourApp