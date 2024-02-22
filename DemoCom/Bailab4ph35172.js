import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Contact = ({ name, phone, email, address }) => {
  return (
    <View style={styles.contact}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.address}>{address}</Text>
    </View>
  );
};

const ContactsList = () => {
  const [contacts, setContacts] = useState([
    {
      name: 'John Doe',
      phone: '0912345678',
      email: 'johndoe@example.com',
      address: '123 Main Street',
    },
    {
      name: 'Jane Doe',
      phone: '0922345678',
      email: 'janedoe@example.com',
      address: '456 Elm Street',
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => <Contact {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contact: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
  },
  email: {
    fontSize: 16,
  },
  address: {
    fontSize: 16,
  },
});

export default ContactsList;
