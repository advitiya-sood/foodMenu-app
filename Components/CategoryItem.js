import { View, Text, Pressable, StyleSheet, Platform } from 'react-native'
import React from 'react'

export default function CategoryItem(props) {

  return (
    <View  style={[styles.ItemBox,{backgroundColor:props.color}]}>
      <Pressable   style={({pressed})=>[styles.button,pressed? styles.rippleEffect : null ]} onPress={props.onPress} >
        <View style={styles.Item} >
          <Text style={styles.Text} >{props.title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
  ItemBox:{
    shadowColor:"black",
    shadowOffset:{width:1, heigh:1},
    shadowRadius:4,
    shadowOpacity:0.5,
    margin:16,
    height:150,
    width:165,
    borderRadius:8,
    elevation:4,
    overflow: Platform.OS==="android" ?"hidden" :"visible"
  },
  button:{
      flex:1
  },
  rippleEffect:{
    backgroundColor:"#BFC9CA"
  },
  Item:{
    flex:1,
    padding:16,
    alignItems:"center",
    justifyContent:"center"
  },
  Text:{
    fontSize:20,
    fontWeight:"bold"
  }

})