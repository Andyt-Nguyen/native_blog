import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Foundation } from '@expo/vector-icons';

const styles = StyleSheet.create({});

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
        <Foundation size={30} name="pencil" />
      </TouchableOpacity>
    )
  }
}

export default ShowScreen;