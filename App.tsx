import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginComp from './comp/LoginComp';
import HomeComp from './comp/HomComp';
import ListProduct from './comp/ListProduct';
import AddProduct from './comp/AddProduct';
import UpdateProduct from './comp/UpdateProduct';
const StackDemo = createNativeStackNavigator();

const App = () =>{
 return (
  <NavigationContainer>
     <StackDemo.Navigator initialRouteName='LoginComp'>
       <StackDemo.Screen name='HomeComp' component={HomeComp} options={ {title:"Trang chủ"} } />
       <StackDemo.Screen name='ListProduct' component={ListProduct} options={ {title:"lít ds"} } />
       <StackDemo.Screen name='AddProduct' component={AddProduct} options={ {title:"Them"} } />
       <StackDemo.Screen name='UpdateProduct' component={UpdateProduct} options={ {title:"sua"} } />
       <StackDemo.Screen name='LoginComp' component={LoginComp} options={ {headerShown: false} } />
     </StackDemo.Navigator>
   </NavigationContainer>
 )
}
export default App;