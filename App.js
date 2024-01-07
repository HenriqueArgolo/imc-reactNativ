
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title';
import Main from './src/components/Main';
import ResultImc from './src/components/Form/ResultIMC';
export default function App() {
  return (
    <View style={styles.main}>
      <Title/>
      <Main/>
      <ResultImc/>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    backgroundColor:'#74819d'

  },
});

