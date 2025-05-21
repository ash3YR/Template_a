import React from 'react';
import { View, Text, StyleSheet ,ScrollView, FlatList,TouchableOpacity} from 'react-native';
import {items} from '../../data/flatlist_data'


export default function App() {

   const renderItem = ({ item }) => (
  <Text style={{ color: 'white', padding: 10 }}>{item.title}</Text>
);


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello, React Native!</Text>

      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.bio}>React Native Developer 🚀</Text>


      <TouchableOpacity style={styles.button} onPress={() => alert('Followed!')}>
        <Text style={styles.buttonText}>Follow</Text>
      </TouchableOpacity>
        

        <FlatList

        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}

        />

         

       


       



        

    </View>
  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: 20,
    
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    color: '#aaa',
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#00f',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    width:120,

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});