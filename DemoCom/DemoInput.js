import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'

const DemoInput = () => {
  const [hoTen, sethoTen] = useState('')

  return (
    <View style = {st.khung}>
      <Text style = {st.tieude}>Vi du the input</Text>
      <TextInput style={st.input}
           onChangeText={ (txt)=> sethoTen(txt) }
     />
     <Text style = {st.tieude}>
      Ho va ten: {hoTen}
     </Text>

    </View>
  )
}

export default DemoInput

const st = StyleSheet.create({
  khung: {backgroundColor:'yellow', margin:20, borderWidth:2, borderColor:'red'},
  tieude: {fontSize:40, color: 'red'},
  input: {borderColor:'blue', borderWidth:1, padding:10, margin:10}
})
