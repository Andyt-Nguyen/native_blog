import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const styles = StyleSheet.create({

});

export default ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  const addPost = (post) => {
    addBlogPost(post, () => navigation.navigate('Index'))
  }
  return (
    <BlogPostForm 
      onPress={addPost}
    />
  )
}