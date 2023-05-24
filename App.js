import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScrn from './Screens/CategoryScrn';
import { SafeAreaView } from 'react-native-safe-area-context'
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealOverViewScrn from './Screens/MealOverViewScrn';
import MealDetail from './Screens/MealDetail';
import Fav from './Screens/Fav';
import { Provider } from 'react-redux';
import { store } from './Store/Redux/store';


const Stack = createNativeStackNavigator();
const Drawer= createDrawerNavigator();

export default function App() {


  const DrawerNavFunc=()=>{
      return(
        <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor:"#212F3D",
            width: 240,
          },
          drawerInactiveTintColor:"white"
          ,
          headerStyle:{
            backgroundColor:"#212F3D",
          },
          headerTintColor:"white",
          sceneContainerStyle:{
            backgroundColor:"#34495E"
          }
        }}
        >
          <Drawer.Screen name="Meal Category" component={CategoryScrn} options={{title:"All Categories"}} />
          <Drawer.Screen name="Favriotes" component={Fav} />
        </Drawer.Navigator>
      )
  }


function drawerScreen(){
  
}

  return (
    <View style={styles.container}>
      <StatusBar style="light"  />

      <Provider  store={store} >
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
              headerStyle:{
                backgroundColor:"#212F3D",
              },
              headerTintColor:"white",
              contentStyle:{
                backgroundColor:"#34495E"
              }
            }}
            >
              <Stack.Screen name="Meal" component={DrawerNavFunc} options={{
                headerShown: false
              }}  />
              <Stack.Screen name="Meal OverView" component={MealOverViewScrn}  />
              <Stack.Screen name= "MealDetail" component={MealDetail} options={{title:"Meal Detail"}} />
            </Stack.Navigator>
        </NavigationContainer> 
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
