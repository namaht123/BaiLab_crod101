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

const AddProduct = () => {
  const [urlImage, setLinkImage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [discription, setDiscription] = useState('');

  const SaveProduct = () => {

    if (urlImage.length == 0) {
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




    let objProduct = {
      url: urlImage,
      name: name,
      price: price,
      discription: discription,
    };
    let urlApi = 'https://65d60bf0f6967ba8e3bd5da3.mockapi.io/tb_product';

    fetch(urlApi, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objProduct),
    })
      .then(res => {
        if (res.status == 201) {
          Alert.alert('Thêm thành công');
        }
      })
      .catch(erro => {
        console.log(erro);
      });
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
            onChangeText={txtImage => setLinkImage(txtImage)}
            style={styles.customTextInput}
            placeholder="Nhập link ảnh sản phẩm"
            multiline={true}
          />
        </View>
        <View style={styles.customNamePriceProduct}>
          <View style={[styles.containerInput, {flex: 1, marginEnd: 10}]}>
            <Text style={{fontFamily: 'regular2', marginBottom: 5}}>
              Tên sản phẩm
            </Text>
            <TextInput
              onChangeText={txtName => setName(txtName)}
              style={[styles.customTextInput, {width: '100%'}]}
              placeholder="Nhập tên sản phẩm"
            />
          </View>
          <View style={[styles.containerInput, {flex: 1}]}>
            <Text style={{fontFamily: 'regular2', marginBottom: 5}}>
              Giá sản phẩm
            </Text>
            <TextInput
              onChangeText={txtPrice => setPrice(txtPrice)}
              style={[styles.customTextInput, {width: '100%'}]}
              placeholder="Nhập giá sản phẩm"
            />
          </View>
        </View>

        <View style={styles.containerInput}>
          <Text style={{fontFamily: 'regular2', marginBottom: 5}}>
            Mô tả sản phẩm
          </Text>

          <TextInput
            onChangeText={txtDiscription => setDiscription(txtDiscription)}
            style={[
              styles.customTextInput,
              {height: 150, textAlignVertical: 'top'},
            ]}
            multiline={true}
            placeholder="Nhập mô tả sản phẩm..........."
          />
        </View>

        <TouchableOpacity
          onPress={SaveProduct}
          style={styles.customContainerButtom}>
          <Text style={styles.customTextButtom}>Thêm sản phẩm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddProduct;

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
