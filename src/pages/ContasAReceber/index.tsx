import React from 'react'
import { View, SafeAreaView, ImageBackground, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { styles } from "./styles"

import Button from '../../components/Button'





const ContasAReceber = () => {
  
  return (
    <>
      <SafeAreaView style={styles.scrowView}>
        <ImageBackground source={require('../../assets/Ambar-X.png')} style={styles.image}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? 'padding' : "height"}>
                <View style={styles.container}>
                  <Animatable.View delay={400} animation={'fadeInUp'}>
                    <Button title='Contas A Receber' />
                 </Animatable.View>
                </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </SafeAreaView>
    </>
  )
}
export default ContasAReceber


/**
 * 
 */