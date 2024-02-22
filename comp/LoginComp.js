import { useState } from "react";
import { View, Text, Button, Alert, TextInput } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";


const LoginComp =( props ) =>{
    const [username, setusername] = useState('');
    const [passwd, setpasswd] = useState('');
    const doLogin = ()=>{
        if(username.length ==0){
            alert("Chua nhap Username"); return;
        }
        if(passwd.length ==0){
            alert("Chua nhap password"); return;
        }
        let url_check_login = "http://192.168.153.194:3000/tb_user?username="+username;
        fetch (url_check_login)
        .then ((res)=>{return res.json();})
        .then ( async (res_login)=>{
            if(res_login.length != 1){
                alert("Sai username hoac loi trung lap du lieu");
                return;
            }else{
                let objU = res_login[0];
                if(objU.passwd != passwd){
                    alert("Sai password"); return;
                }else{
                    try {
                        await AsyncStorage.setItem('loginfor', JSON.stringify(objU));
                        props.navigation.navigate('ListProduct')
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        })
    }
    
    return (
        <View style={{margin:10, padding:10, }}>
            <Text style={{
                fontSize:20,
                fontWeight:'bold',
                color:'#000'
            }}>Man hinh Login</Text>
            <TextInput style={{
                backgroundColor:'#ddd',margin:10
            }} placeholder="Username" onChangeText={(txt)=>{ setusername(txt)}}/>
            <TextInput style={{
                backgroundColor:'#ddd',margin:10
            }} placeholder="Passwd" onChangeText={(txt)=>{setpasswd(txt)}} textContentType="password" secureTextEntry={true}/>
            <Button style={{}} title="Login" onPress={doLogin}/>
        </View>
    )
}
export default LoginComp;