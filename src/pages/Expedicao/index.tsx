import React from 'react'
import { View, SafeAreaView, ImageBackground, Keyboard, TouchableWithoutFeedback, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { styles } from "./styles"


const Expedicao = () => {
  return (
    <>
      <SafeAreaView style={styles.scrowView}>
        <ImageBackground source={require('../../assets/Ambar-X.png')} style={styles.image}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Animatable.View delay={400} animation={'fadeInUp'}>
                <Text>Tela de Expedição </Text>
              </Animatable.View>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </SafeAreaView>
    </>
  )
}
export default Expedicao
