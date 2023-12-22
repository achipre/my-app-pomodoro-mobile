import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const options = ['Pomodoro', 'ShortBreak', 'Long Break']

export default function Header({currentTime, setCurrentTime, setTime}) {
  const handleOption = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15
    setCurrentTime(index)
    setTime(newTime * 60)

  }
  return (
    <View style={style.header}>
      {options.map((opt, idx) => (
        <TouchableOpacity key={idx} onPress={() => handleOption(idx)} style={[style.boxStyle, currentTime !== idx && {backgroundColor: '#F5E9CF'}]}>
          <Text style={[style.title, currentTime !== idx && {color: '#4D455D'}]}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const style = StyleSheet.create({
  header:{
    flexDirection: 'row',
    gap: 8
  },
  boxStyle:{
    marginTop: 18,
    borderWidth: 2,
    borderColor: '#4D455D',
    backgroundColor: '#4D455D',
    borderRadius: 6

  },
  title: {
    fontSize: 18,
    color: '#F5E9CF',
    padding: 8,
    paddingLeft: 12,
    paddingRight: 12,
    fontWeight: 'bold'
  },
})