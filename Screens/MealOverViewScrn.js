import { View, Text, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { CATEGORIES, MEALS } from '../data/dummyData'
import MealCard from '../Components/MealCard'

export default function MealOverViewScrn({navigation}) {

    const route=useRoute()
    const CategoryId=route.params.categoryId

    const displayMeals= MEALS.filter((mealCat)=>                         //function to search for meals
    (mealCat.categoryIds.indexOf(CategoryId)>=0))

  useLayoutEffect(() => {
    const Title= CATEGORIES.find((category)=>category.id===CategoryId).title

    navigation.setOptions({
        title:Title
    })
  }, [CategoryId])




function handlePress(id){
    navigation.navigate("MealDetail",{
        mealId:id    
    })
}


function handleRenderItem(itemData){

    return <MealCard data={itemData.item}  onPress={handlePress.bind(this,itemData.item.id)} /> 
}



  return (
    <View>
      <FlatList data={displayMeals}  keyExtractor={item=>item.id} 
      renderItem={handleRenderItem} />
    </View>
  )
}