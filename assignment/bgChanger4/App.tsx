/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [randomColors, setRandomColors] = useState({
    randomBackground: '#ffffff',
    randomBoxColor1: '#EF5354',
    randomBoxColor2: '#50DBB4',
  });

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    let randomBoxColor1 = '#';

    for (let i = 0; i < 6; i++) {
      randomBoxColor1 += hexRange[Math.floor(Math.random() * 16)];
    }

    // const randomBoxColor1 =
    //   '#' +
    //   hexRange[Math.floor(Math.random() * 16)] +
    //   hexRange[Math.floor(Math.random() * 16)] +
    //   hexRange[Math.floor(Math.random() * 16)];//this code only  but only uses 3 characters (representing RGB values) to
    //create a 3-digit hexadecimal color code

    let randomBoxColor2 = '#';

    for (let i = 0; i < 6; i++) {
      randomBoxColor2 += hexRange[Math.floor(Math.random() * 16)];
    }

    // const randomBoxColor2 =
    //   '#' +
    //   hexRange[Math.floor(Math.random() * 16)] +
    //   hexRange[Math.floor(Math.random() * 16)] +
    //   hexRange[Math.floor(Math.random() * 16)];

    setRandomColors({
      randomBackground: color,
      randomBoxColor1,
      randomBoxColor2,
    });
  };

  return (
    <>
      <StatusBar backgroundColor={randomColors.randomBackground} />
      <View
        style={[
          styles.container,
          {backgroundColor: randomColors.randomBackground},
        ]}>
        <View style={[styles.box]}>
          <View
            style={[
              styles.card,
              styles.cardOne,
              {backgroundColor: randomColors.randomBoxColor1},
            ]}>
            <Text />
          </View>
          <View
            style={[
              styles.card,
              styles.cardTwo,
              {backgroundColor: randomColors.randomBoxColor2},
            ]}>
            <Text />
          </View>
        </View>

        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },

  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    marginVertical: 20,
    padding: 20,
  },
});

export default App;
