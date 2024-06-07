import React from 'react';
import { AppRegistry, NativeModules, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
const {TestConnectNative} = NativeModules

const RNHighScores = ({ scores,rootTag }) => {
  const contents = scores.map(score => (
    <Text key={score.name}>
      {score.name}:{score.value}
      {'\n'}
    </Text>
  ));
  console.log(TestConnectNative)
  return (
    <SafeAreaView style={[styles.container, { }]}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20}}>
      <TouchableOpacity style={{marginTop:30}} onPress={()=>{
        TestConnectNative?.dismissViewController?.(rootTag)
      }    }>
        <Text>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:30}}
      onPress={()=>{
        TestConnectNative?.goToSecondViewController?.(rootTag,"Heloooo")
      }}
      >
        <Text>Next</Text>
      </TouchableOpacity>
      </View>
      <View style={{flex:1, justifyContent:'center'}}> 
      <Text style={styles.highScoresTitle}>
        2048 High Scores!
      </Text>
      <Text style={styles.scores}>{contents}</Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// Module name
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);