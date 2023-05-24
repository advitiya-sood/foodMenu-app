


import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import MealCard from '../Components/MealCard'


import {MEALS } from '../data/dummyData'

function Fav({navigation}) {
  
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  console.log("data from redux",favoriteMealIds)

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  function handlePress(id){
    navigation.navigate("MealDetail",{
        mealId:id    
    })
    }

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return (<View>
            <FlatList data={favoriteMeals}  keyExtractor={item=>item.id} 
                    renderItem={(itemData)=><MealCard data={itemData.item}  onPress={handlePress.bind(this,itemData.item.id)} />} />
            </View>
        )
}

export default Fav;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});