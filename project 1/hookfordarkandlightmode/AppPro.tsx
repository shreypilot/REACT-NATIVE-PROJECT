/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

const AppPro = () => {
  // Get the color scheme of the device
  const colorScheme = useColorScheme();//by default it assume to be light 
  //useColoeScheme is hook is used to determine the  coloscheme of device the app is running on(i.e. light mode or black mode)
  // Define styles based on the color scheme
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? 'white' : 'black',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {colorScheme} mode!</Text>
    </View>
  );
};

export default AppPro;

