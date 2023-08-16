import { CheckBox } from "react-native-elements";
import { Slider } from "react-native-elements";
import { RadioGroup } from "react-native-radio-buttons-group";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>     
          <View style={styles.row1}><Slider style={styles.dwepqKoz} thumbStyle={{
          height: 20,
          width: 20
        }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider></View>
          <View style={styles.row2}><RadioGroup style={styles.FDcRtDth} radioButtons={[{
          id: "1",
          label: "Option 1",
          value: "option1"
        }, {
          id: "2",
          label: "Option 2",
          value: "option2"
        }]} layout="column"></RadioGroup><CheckBox style={styles.KCCLLCZV} title="Checkbox Title"></CheckBox></View>
          <View style={styles.row3}><Slider style={styles.adXJvvjL} thumbStyle={{
          height: 20,
          width: 20
        }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider></View>  
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  row1: {
    flex: 1
  },
  row2: {
    flex: 1
  },
  row3: {
    flex: 1
  },
  FDcRtDth: {
    width: 120,
    height: 70
  },
  dwepqKoz: {
    width: 150,
    height: 40
  },
  adXJvvjL: {
    width: 150,
    height: 40
  },
  KCCLLCZV: {
    width: 183,
    height: 69
  }
});
export default Untitled4;