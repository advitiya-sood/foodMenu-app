import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

export default function MealCard(props) {
    
  return (
    <View style={styles.Card} >
        <Pressable  style={({pressed})=>[pressed? styles.rippleEffect : null ]} onPress={props.onPress}  >
            <View>
                <Image  source={{uri:props.data.imageUrl}}  style={styles.Image} ></Image>
                <Text  style={styles.Title} >{props.data.title}</Text>
            </View>
            <View style={styles.Detail}>
                <Text>{props.data.duration}m</Text>
                <Text>{props.data.complexity.toUpperCase()}</Text>
                <Text>{props.data.affordability.toUpperCase()}</Text>
            </View>
        </Pressable>
    </View>
  )
}


const styles=StyleSheet.create({
    Card:{
        margin:16,
        borderRadius:8,
        backgroundColor:"white",
        overflow:"hidden",
        elevation:4

    },
    rippleEffect:{
        backgroundColor:"#BFC9CA",
        opacity:0.7
      },
    Image:{
        width:"100%",
        height:200
    },
    Title:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:18,
        padding:8
    },
    Detail:{
        padding:8,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginVertical:8
    }
})