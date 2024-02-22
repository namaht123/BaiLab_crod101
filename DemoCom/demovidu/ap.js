import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
var link_app = 'https://65bb0ab4b4d53c066553e349.mockapi.io/Baiviet'

const App = () => {
  const [dsBaiviet, setBaiviet] = useState([])
  
  const lay_ds_baiviet = async () =>{
    try {
      let res = await fetch(link_app);
      let arr = await res.json();
      console.log(arr);//ghi log ket qua
      setBaiviet (arr);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect (() =>{
    lay_ds_baiviet ();

  }, [])
  const ItemFlaslist = ({item}) =>{
    return(
      <View style={{margin: 10, borderColor: 'blue', borderWidth: 1, borderRadius: 10}}>
        <Text>ID = {item.id}</Text>
        <Text>Title = {item.title}</Text>
        <Text>Content = {item.content}</Text>
        <Image source={{uri: item.image}} style={{height:100, width:100}}/>
      </View>
    )
  }
  return (
    <View>
      <Text>Dang sanh bai viet</Text>
      <FlatList
      data={dsBaiviet}
      renderItem={ ( {item} )=> <ItemFlaslist item={item} />  }
      keyExtractor={ (item)=>item.id } />

      
    </View>
  )
}

export default App

const styles = StyleSheet.create({})




// import { View, Text } from 'react-native'
// import * as React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// //b2:tao stack
// const StackDemo = createNativeStackNavigator();
// //b4:Ding nghia compodent
// const TrangChu = ({navigation, route}) =>{

//   return (
//     <View style = {{backgroundColor:'cyan'}}>
//       <Text style={{fontSize: 30}}>
//         Day la trang chu
//       </Text>
//       <Text style={{fontSize: 30}}>
//         Wellcom: {route.params.hoTen}{"\n"}
//         tuoi: {route.params.tuoi}
//       </Text>

//       <Text onPress={() => navigation.navigate("Setting", {hoten: "Nguyen Van A", tuoi:30})}>Cai dat</Text>

//     </View>
//   )
// }
// const Caidat = ( {navigation, route} )=> {
//   return (
//     <View style={{backgroundColor:'yellow'}}>
//       <Text style={{fontSize: 30}}>
//         Day la trang cai dat
//       </Text>
//       <Text style={{fontSize: 30}}>
//         Ho ten: {route.params?.hoten}, Tuoi: {route.params?.tuoi}
//       </Text>
//       <Text onPress={() => navigation.navigate("Home")}>Ve trang chu</Text>
//     </View>
//   )
// }
// const App = () => {
// //b3:Dinh nghia cac man hinh quan ly bang stack

//   return (
//     <NavigationContainer>
//       <StackDemo.Navigator initialRouteName='Setting'>
//         <StackDemo.Screen name='Home' component={TrangChu} options={{title:"Man hinh trang chu"}} initialParams={{ hoTen: "Tran van b", tuoi: 20}}/>
//         <StackDemo.Screen name='Setting' component={Caidat} options={{title:"Man hinh cai "}} />
       

//       </StackDemo.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App



// import {
//   Alert,
//   Image,
//   Modal,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// import jestConfig from './jest.config';

// const App = () => {
//   const [isModalVisible, setisModalVisible] = useState(false);
//   const [isModalVisible2, setisModalVisible2] = useState(false);
//   const [soA, setSoA] = useState(Number);
//   const [soB, setSoB] = useState(Number);
//   const [kq, setKetQua] = useState(Number);
//   const [kqChia, setKetQuaChia] = useState(Number);
//   const tinhTong = () => setKetQua(soA + soB);
//   const tinhTru = () => console.log(soA - soB);
//   const tinhNhan = () => Alert.alert(soA * soB + '');
//   const tinhChia = () => {
//     setKetQuaChia(soA / soB);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.containerMain}>
//         <View style={styles.ctTitle}>
//           <Text style={styles.ctTextTitle}>Máy tính điện tử</Text>
//         </View>
//         <View style={styles.containerContent}>
//           <View style={styles.ctContainerKetQua}>
//             <Text style={styles.ctText1Kq}>
//               Kết quả : <Text style={styles.ctText2Kq}>{kq}</Text>
//             </Text>
//           </View>
//           <View style={styles.customContentInput}>
            
//             <TextInput
//               style={styles.customInput1}
//               placeholder="Nhập số thứ nhất"
//               placeholderTextColor={'black'}
//               onChangeText={soA => setSoA(parseInt(soA))}
//             />

//             <TextInput
//               style={styles.customInput2}
//               placeholder="Nhập số thứ hai"
//               placeholderTextColor={'black'}
//               onChangeText={soB => setSoB(parseInt(soB))}
//             />
//           </View>
//           <View style={styles.customContainerButtom}>
//             <TouchableOpacity
//               style={styles.customBtn}
//               onPress={() => tinhTong()}>
//               <Text style={styles.customTextBtn}>+</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.customBtn}
//               onPress={() => {
//                 tinhTru();
//               }}>
//               <Text style={styles.customTextBtn}>-</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.customBtn}
//               onPress={() => tinhNhan()}>
//               <Text style={styles.customTextBtn}>*</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.customBtn}
//               onPress={() => {
//                 tinhChia();
//                 setisModalVisible(true);
//               }}>
//               <Text style={styles.customTextBtn}>/</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <TouchableOpacity
//           onPress={() => setisModalVisible2(true)}
//           style={styles.customBtnInFormation}>
//           <Text style={styles.customTextBtnInFomation}>Show Infomation</Text></TouchableOpacity>
//         {/* Modal */}
//         <Modal transparent={true} animationType="fade" visible={isModalVisible}>
//           <View style={styles.containerMainModal}>
//             <View style={styles.containerModal}>
//               <Text style={styles.customText}>{kqChia}</Text>
//               <View style={styles.conatinerBgBtn}>
//                 <TouchableOpacity onPress={() => setisModalVisible(false)}>
//                   <Text style={styles.customTextBtnClose}>Close</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </Modal>

        
//         <Modal
//           transparent={true}
//           animationType="fade"
//           visible={isModalVisible2}>
//           <View style={styles.containerMainModal}>
//             <View style={styles.containerModal}>
//               <Image
//                 style={styles.customImg}
//                 source={{
                  
//                 }}
//               />
//               <Text>Dang quoc nam</Text>
//               <Text>PH35172</Text>
//               <Text>Hà Nội</Text>
//               <TouchableOpacity
//                 onPress={() => setisModalVisible2(false)}
//                 style={styles.conatinerBgBtn}>
//                 <Text style={styles.customTextBtnClose}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   containerMain: {
//     width: 350,
//     height: 630,
//     backgroundColor: 'white',
//     borderRadius: 10,
//   },
//   container: {
//     alignItems: 'center',
//     alignSelf: 'center',
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'black',
//     width: '100%',
//   },
//   ctTitle: {
//     backgroundColor: '#00d999',
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     height: 100,
//     alignContent: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   ctTextTitle: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: '500',
//   },
//   ctContainerKetQua: {
//     fontSize: 17,
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   ctText1Kq: {
//     fontSize: 40,
//     fontWeight: '500',
//     color: 'red',
//   },
//   ctText2Kq: {
//     color: 'red',
//     fontSize: 40,
//   },
//   containerContent: {
//     padding: 10,
//   },
//   customContentInput: {
//     marginTop: 150,
//   },
//   customInput1: {
//     borderWidth: 1,
//     borderColor: '#00bcd2',
//     borderRadius: 8,
//     paddingStart: 10,
//   },
//   customInput2: {
//     borderWidth: 1,
//     borderColor: '#00bcd2',
//     borderRadius: 8,
//     paddingStart: 10,
//     marginTop: 10,
//   },
//   customContainerButtom: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginEnd: 10,
//     marginStart: 10,
//     marginTop: 20,
//   },
//   customBtn: {
//     backgroundColor: '#000',width: '24%',
//     height: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 8,
//     borderWidth: 2,
//     borderColor: '#00bcd2',
//   },
//   customTextBtn: {
//     color: 'white',
//     fontSize: 20,
//   },
//   containerMainModal: {
//     flex: 1,
//     justifyContent: 'center',
//     alignContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//   },
//   containerModal: {
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 250,
//     height: 'auto',
//     borderRadius: 10,
//     padding: 10,
//   },
//   conatinerBgBtn: {},
//   customText: {},
//   customTextBtnClose: {
//     color: 'blue',
//     fontWeight: '500',
//   },
//   customTextBtnInFomation: {},
//   customBtnInFormation: {
//     alignContent: 'center',
//     alignItems: 'center',
//   },
//   customImg: {
//     width: 10,
//     height: 10,
//   },
//   customImgicon: {
//     width: 25,
//     height: 25,
//   },
// });









// import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
// import React, { useCallback, useState } from 'react'

// const App = () => {
//   const [reloading, setReloading] = useState(false)
//   const onReload = useCallback(()=>{
//     console.log("Bat dau reload");
//     setTimeout(() => {
//       setReloading(false)
//       console.log("Ket thuc reload");
      
//     }, 3000);
    
//   },[])


//   return (
//     <View style= {{ backgroundColor:'#fdcdc2'}}>
//       <Text>App</Text>
//       <SafeAreaView>
//         <ScrollView
//         horizontal= {false}
//         refreshControl={
//           <RefreshControl refreshing = {reloading}
//           onRefresh={onReload}/>
//         } 
//         >
//           <Text style = {{fontSize:50}}>
//             Noi dung view kkkkk....
//             Noi dung view kkkkk....
//             Noi dung view kkkkk....
//             Noi dung view kkkkk....
//             Noi dung view kkkkk....
//             Noi dung view kkkkk....
//             Noi dung view kkkkk....
//             Noi dung view kkkkk....
//             Noi dung view kkkkk....
//             Noi dung view ....
//             Noi dung view ....
//             Noi dung view ....
//             Noi dung view ....
//             Noi dung view ....
//           </Text>
//         </ScrollView>
//       </SafeAreaView>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})



// import { Button, Modal, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'

// const App = () => {
// const [showDialog, setShowDialog] = useState(false)
// const tatDialog = () =>{
//   setShowDialog(false)
//   console.log("Da tat dialog");
  

// }
//   return (
//     <View>
//       <Text>App</Text>
//       <View><Button title='Mo Dialog' onPress={() => setShowDialog(true)} /></View>

//       <Modal
//         visible={showDialog}
//         transparent = {true}
//         onRequestClose={tatDialog}
//       >
//         <View style = {st.KhungDialog}>
//           <View style = {st.Dialog}>
//             {/* Viet noi dung */}
//             <Text>Day la dialog mo dau</Text>
//             <Button title='Dong Dialog' onPress={() => setShowDialog(false)} />
//           </View>
//         </View>

//       </Modal>
      
//     </View>
//   )
// }

// export default App

// const st = StyleSheet.create({
//   KhungApp: {
//     flex: 1,
//     opacity: 0.1
    
//   },
//   KhungDialog: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#eee9',
//     opacity: 1
//   },
//   Dialog: {
//     width: 300,
//     height: 200,
//     backgroundColor: '#999cdd',
//     padding: 10,
//     borderRadius: 10,
    
//   }
// })







// import { View, Text } from 'react-native'
// import React from 'react'
// import DemoInput from './DemoCom/DemoInput'
// const App = () => {
//   return (
//     <View>
//       <DemoInput/>
//     </View>
//   )
// }

// export default App






// import { View, Text, StyleSheet } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (

//     <View style ={ st.khungbao }>
      
//       <Text style={ st.txt1 }>Xin chao</Text>
//       <Text style={ st.txt2 }>Dong so 1</Text>
//       <Text style={ st.txt2 }>Dong so 2</Text>
//       <Text style={ st.txt2 }>Dong so 3</Text>

//     </View>
//   )
// }
// const st = StyleSheet.create({
//   khungbao: {backgroundColor: '#2dd',
//   margin:20, 
//   padding:20, borderRadius:20
// },
//   txt1:{color: 'yellow', fontSize:30, fontWeight:'bold',
//         textDecorationLine:'underline',
//         textShadowColor: 'red',
//         textShadowOffset:{width:10,height:20}},
//   txt2:{color: 'red', fontSize:20, fontStyle:'italic'}

// });

// export default App