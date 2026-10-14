import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Image, Text, TextInput, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function MainScreen() {
  const [petName, setPetName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.mogHubLogo}
          source={require('../_images/cat-logo.jpg')}
        />
        <Text style={styles.mainTxt}>Mog Hub</Text>
        <Text style={styles.slogan}>Purrfect Companions</Text>

        <View style={styles.inputFlex}>
          <Text style={styles.enterTxt}>Name Your Pet:</Text>
          <TextInput
            style={styles.userInputTxt}
            placeholder="Mog"
            value={petName}
            onChangeText={newText => setPetName(newText)}
          />
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  mogHubLogo: { width: 150, height: 150, alignSelf: 'center' },
  mainTxt: { fontSize: 32, fontWeight: 'bold', textAlign: 'center' },
  slogan: { fontSize: 16, textAlign: 'center', letterSpacing: 4 },
  inputFlex: { flexDirection: 'row', alignItems: 'center', margin: 16 },
  enterTxt: { fontSize: 16, marginRight: 8 },
  userInputTxt: { flex: 1, borderWidth: 1, borderColor: '#999', padding: 8, borderRadius: 6 },
});

export default MainScreen;