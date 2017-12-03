import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import styles from './styles';

let image = require('./images/background.png');

const Logo = () => (
  <View style={styles.container}>
    <View>
    <ImageBackground
      resizeMode="contain"
      style={styles.containerImage}
      source={image}
    >
      <Image resizeMode="contain" style={styles.logo} source={require('./images/logo.png')} />
    </ImageBackground>
    </View>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;