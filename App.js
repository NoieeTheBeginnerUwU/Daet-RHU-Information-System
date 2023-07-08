import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, ActivityIndicator,Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {

  return (
    <View style={style.main}>
      <ImageBackground height="1000">
        <View  style={style.holder}>
          <View style={style.buttonHolder}>
            <TouchableOpacity style={style.buttonHolder}>
              <View style={style.button}>

              </View>
              <View style={style.button}>

              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  inputs: {
    width: "100%",
    height: 30,
    backgroundColor: 'white',
    borderColor: 'green',
    fontSize: 15,
  },
  holder: {
    width: '100%',
    height: 700,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 12,
    margin: '5%'
  },
  main: {
    height: 1000,
    width: '100%',
    marginTop: '6%',
    backgroundColor: 'rgb(255, 240, 245)'
  },
  buttonHolder: {
    width: '100%',
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
