import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av'
import { useState } from 'react';
import Header from './src/components/Header';
import Timer from './src/components/Timer';

export const colors = ['#E96479', '#7DB9B6', '#F5E9CF','#4D455D' ]

export default function App() {
  const [isWorking, setIsWorking] = useState(false)
  const [time, setTime] = useState(25 * 60)
  const [currentTime, setCurrentTime] = useState('POMO' | 'SHORT' | 'BREAK')
  const [isActive, setIsActive] = useState(false)
  const handleWorking = () => {
    setIsWorking(!isWorking)
  }
  const handleStart = () => {
    playSound()
    setIsActive(!isActive)
  }
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/puch.wav')
    )
    await sound.playAsync()
  }
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <StatusBar style="light" />
      <View style={{paddingTop: Platform.OS === 'android' && 48, alignItems: 'center'}}>
        <Text style={styles.title}>POMODORO</Text>
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} />
        <Timer time={time}/>
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={{fontWeight: 'bold', fontSize: 32, color: '#4D455D'}}>{isActive ? 'STOP': 'START'}</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors[0],
  },
  title: {
    fontSize: 48,
    color: colors[3],
    fontWeight: "bold",
    lineHeight: 1
  },
  button: {
    width: 96,
    backgroundColor: '#F5E9CF',
    aspectRatio: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#4D455D'
    
  }
  
});
