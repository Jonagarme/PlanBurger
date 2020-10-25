import React from 'react';
import {
  StyleSheet,
  View,
  Linking,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Button} from 'react-native-elements';

import logo2 from './img/logo.png';

const {width} = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={logo2} style={styles.image}>
        <Button
          title="Da Click!!!"
          onPress={() => Linking.openURL('https://www.planburger.com.co')}
          titleStyle={{color: '#000000'}}
          type="clear"
          buttonStyle={{
            borderColor: '#212121',
            borderRadius: 20,
            borderWidth: 1,
            width: 200,
            height: 40,
            alignSelf: 'center',
            marginTop: 220,
          }}
          containerStyle={{backgroundColor: 'transparent'}}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});
