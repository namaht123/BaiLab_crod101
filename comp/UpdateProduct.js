import {
    Alert,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  
  const UpdateProduct = props => {
    const [name, setName] = useState(props.route.params.item.name);
    const [image, setImage] = useState(props.route.params.item.url);
    const [price, setPrice] = useState(props.route.params.item.price);
    const [discription, setDiscription] = useState(
      props.route.params.item.discription,
    );
  
    const UpdateProduct = () => {
      if (image.length == 0) {
        Alert.alert('Mời nhập link ảnh');
        return;
      }
      if (name.length == 0) {
        Alert.alert('Mời nhập tên sản phẩm');
        return;
      }
      if (price.toString.length != 0) {
        Alert.alert('Mời nhập giá sản phẩm');
        return;
      }
      if (isNaN(price) != 0) {
        Alert.alert('Giá sản phẩm phải là số');
        return;
      }
      if (discription.length == 0) {
        Alert.alert('Mời nhập mời nhập mô tả sản phẩm');
        return;
      }
  
      let urlApiUpdate =
        'https://65d60bf0f6967ba8e3bd5da3.mockapi.io/tb_product/' +
        props.route.params.item.id;
  
      fetch(urlApiUpdate, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          url: image,
          price: price,
          discription: discription,
        }),
      })
        .then(res => {
          if (res.status == 200) {
            Alert.alert('Cập nhật thành công');
          }
        })
        .catch(err => console.log(err));
    };
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.customContainer}>
          <View>
            <Text
              style={{fontFamily: 'regular2', marginBottom: 5, marginTop: 10}}>
              Link ảnh sản phẩm
            </Text>
            <TextInput
              style={styles.customTextInput}
              placeholder="Nhập link ảnh sản phẩm"
              multiline={true}
              value={image}
              onChangeText={textUrl => setImage(textUrl)}
            />
          </View>
          <View style={styles.customNamePriceProduct}>
            <View style={[styles.containerInput, {flex: 1, marginEnd: 10}]}>
              <Text style={{fontFamily: 'regular2', marginBottom: 5}}>
                Tên sản phẩm
              </Text>
              <TextInput
                style={[styles.customTextInput, {width: '100%'}]}
                placeholder="Nhập tên sản phẩm"
                value={name}
                onChangeText={textname => setName(textname)}
              />
            </View>
            <View style={[styles.containerInput, {flex: 1}]}>
              <Text style={{fontFamily: 'regular2', marginBottom: 5}}>
                Giá sản phẩm
              </Text>
              <TextInput
                style={[styles.customTextInput, {width: '100%'}]}
                placeholder="Nhập giá sản phẩm"
                value={price}
                onChangeText={textPrice => setPrice(textPrice)}
              />
            </View>
          </View>
  
          <View style={styles.containerInput}>
            <Text style={{fontFamily: 'regular2', marginBottom: 5}}>
              Mô tả sản phẩm
            </Text>
  
            <TextInput
              style={[
                styles.customTextInput,
                {height: 150, textAlignVertical: 'top'},
              ]}
              placeholder="Nhập mô tả sản phẩm..........."
              value={discription}
              multiline={true}
              onChangeText={textDiscription => setDiscription(textDiscription)}
            />
          </View>
  
          <TouchableOpacity
            onPress={UpdateProduct}
            style={styles.customContainerButtom}>
            <Text style={styles.customTextButtom}>
              Cập nhật thông tin sản phẩm
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default UpdateProduct;
  
  const styles = StyleSheet.create({
    customTextInput: {
      borderWidth: 0.8,
      borderColor: 'gray',
      borderRadius: 8,
      paddingHorizontal: 15,
      fontFamily: 'regular2',
    },
    containerInput: {
      marginTop: 10,
    },
    customContainer: {
      margin: 10,
    },
    customNamePriceProduct: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    customContainerButtom: {
      marginTop: 20,
      backgroundColor: '#d17842',
      height: 50,
      borderRadius: 8,
      justifyContent: 'center',
    },
    customTextButtom: {
      textAlign: 'center',
      fontFamily: 'regular2',
      color: 'white',
    },
  });
  