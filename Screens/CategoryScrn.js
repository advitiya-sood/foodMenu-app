import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummyData'
import CategoryItem from '../Components/CategoryItem'

export default function CategoryScrn({navigation}) {

function handleOnPress(itemData){
  navigation.navigate("Meal OverView",{
    categoryId:itemData.item.id,
    categoryTitle:itemData.item.title,
     
  })
}


  return (
    <View>
      <FlatList  data={CATEGORIES}  
      renderItem={itemData=><CategoryItem 
         onPress={handleOnPress.bind(this,itemData)} title={itemData.item.title}  color={itemData.item.color} />}
      numColumns={2}
       />
      
    </View>
  )
}