import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ListItem({children}) {
  return (
    <View  style={styles.TextContainer} >
      <Text style={styles.Text} >{children}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    TextContainer:{
        alignItems:'center',
      },
      Text:{
        backgroundColor:'#1F618D',
        alignItems:"center",
        textAlign:'center',
        paddingVertical:2,
        marginVertical:6,
        borderRadius:8,
        color:'#BB8FCE',
        width:"100%",
        fontSize:20
      }

})