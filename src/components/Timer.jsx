import { StyleSheet, Text, View } from "react-native";

export default function Timer({time}) {
  const formateTime = `${Math.floor(time / 60).toString().padStart(2,'0')}:${Math.floor(time % 60).toString().padStart(2,'0')}`
  return (
    <View style={style.time}>
      <Text style={style.textTime}>{formateTime}</Text>
    </View>
  )
}
const style = StyleSheet.create({
  time: {
    margin: 32,
    padding:48,
    width:'88%',
    backgroundColor: "#f2f2f2",
    borderRadius: 6
  
  },
  textTime:{
    fontSize: 72,
    textAlign: 'center',
    color: '#4D455D',
    fontWeight: 'bold'
  }
})