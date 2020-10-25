import React from 'react';
import {StyleSheet, View, Linking, Image, ScrollView} from 'react-native';
import {Text, Button} from 'react-native-elements';

//import logo from './img/logo.png';
import logo from './img/log.jpg';

export default function App() {
  return (
    <ScrollView style={{backgroundColor: '#ddb150'}}>
      <View>
        <Image
          source={logo}
          style={{
            alignSelf: 'center',
            marginTop: 20,
            height: 500,
            width: 500,
          }}
        />

        <View style={{alignSelf: 'center', marginTop: 30}}>
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
            }}
            containerStyle={{backgroundColor: 'transparent'}}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 25,
    textAlign: 'center',
    margin: 35,

    textTransform: 'uppercase',
  },
  titulo: {
    textAlign: 'center',
    color: '#e64a19',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 20,
    textTransform: 'uppercase',
  },
});
