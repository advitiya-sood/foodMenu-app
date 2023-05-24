import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { MEALS } from '../data/dummyData'
import ListItem from '../Components/ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite} from '../Store/Redux/favoriteSlice'
import IconButton from '../Components/IconButton'
export default function MealDetail({navigation}) {

    

    const favoriteMealIds=useSelector((state)=>state.favoriteMeals.ids);
    const dispatch=useDispatch();

    const route=useRoute()
    const MealId=route.params.mealId;
    console.log("mealis", MealId)
    console.log("favmealids", favoriteMealIds)

    const selectedMeal=MEALS.find((meal)=>meal.id===MealId)



    const mealIsFavorite=favoriteMealIds.includes(MealId)


    function changeFavoriteStatusHandeler(){
        if(mealIsFavorite){
            dispatch(removeFavorite({id:MealId}));
        }else{
            dispatch(addFavorite({id:MealId }));
        }
    }


    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => {
            return (
              <IconButton
                icon={mealIsFavorite ? 'star' : 'star-outline'}
                color="white"
                onPress={changeFavoriteStatusHandeler}
              />
            );
          },
        });
      }, [navigation, changeFavoriteStatusHandeler]);



  return (
    <ScrollView>
        <View>
            <Image   style={styles.Image}  source={{uri:selectedMeal.imageUrl}} />
            <Text  style={styles.Title} >{selectedMeal.title}</Text>
        </View>
        <View style={styles.Detail}>
            <Text style={styles.T} >{selectedMeal.duration}m</Text>
            <Text style={styles.T}  >{selectedMeal.complexity.toUpperCase()}</Text>
            <Text style={styles.T}  >{selectedMeal.affordability.toUpperCase()}</Text>
        </View>

        <View style={styles.ListBox} >
        <View style={styles.List} >
            <Text  style={styles.SubTitle}  >Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient)=>(
                <ListItem>{ingredient}</ListItem>
                ))}
            <Text  style={styles.SubTitle}  >Steps</Text>
            {selectedMeal.steps.map((step,index)=>(  
                <ListItem>{step}</ListItem>  
                ))}
        </View>
        </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
    Image:{
        width:"100%",
        height:300
    },
    Title:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:28,
        padding:8,
        color:"white"
    }, 
    SubTitle:{
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
        fontSize:18,
        padding:8,
        borderBottomColor:"white",
        borderBottomWidth:1,
    },
    ListBox:{
        justifyContent:"center",
        alignItems:'center',
        marginVertical:12
    },
    List:{
        width:"85%"
    },
    Detail:{
        padding:8,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginVertical:8,
    },
    T:{
        color:'#BB8FCE',
        fontWeight:"bold",
        fontSize:16

    }

})