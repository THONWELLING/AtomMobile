import React from 'react'
import { View, SafeAreaView, ImageBackground, Keyboard, TouchableWithoutFeedback, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { styles } from "./styles"
import Card from "../../components/Card"
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Vendas = () => {
  return (
    <>
      <SafeAreaView style={styles.scrowView}>
        <ImageBackground source={require('../../assets/Ambar-X.png')} style={styles.image}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Animatable.View delay={400} animation={'fadeInUp'}>
                <Card style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  <Card style={{ width: '48%', height: '38%', backgroundColor: '#f99f30' }}>
                    <MaterialCommunityIcons name="file-search-outline" size={125}  color={'#fac686'} />
                    <Text>Consultar Contas a Pagar </Text>
                  </Card>
                  <Card style={{ width: '48%', height: '38%', backgroundColor: '#f99f30' }}>
                    <MaterialCommunityIcons name="format-list-bulleted" size={125}  color={'#fac686'} />
                    <Text>consultarContasPagarBuscaComposta </Text>
                  </Card>
                  <Card style={{ width: '48%', height: '38%', backgroundColor: '#f99f30' }}>
                    <MaterialCommunityIcons name="chart-bar-stacked" size={125}  color={'#fac686'} />
                  </Card>
                  <Card style={{ width: '48%', height: '38%', backgroundColor: '#f99f30' }}>
                    <MaterialCommunityIcons name="chart-areaspline" size={125}  color={'#fac686'} />
                  </Card>
                </Card>
              </Animatable.View>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default Vendas;
