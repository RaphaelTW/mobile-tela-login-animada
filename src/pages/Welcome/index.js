import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Welcome() {
 return (
   <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Image
            source={require('../../assets/logo.png')}
            style={{ width: '100%' }}
            resizeMode="contain"
            />
        </View>

        <View style={styles.containerForm}>
            <Text style={styles.title}>Monitore, organize sus gastos de qualquer lugar!</Text>
            <Text style={styles.text}>Faça o login para começar</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#A3369A'
  },
  containerLogo:{
    flex: 2,
    backgroundColor: '#A3369A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm:{
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text:{
    color: '#A1A1A1',
  },
  button:{
    position: 'absolute',
    backgroundColor: '#A3369A',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  }
})