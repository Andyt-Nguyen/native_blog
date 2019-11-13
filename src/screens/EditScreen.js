import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const styles = StyleSheet.create({});

export default ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');
  const blog = state.find(blogg => blogg.id === id);

  const submitBlog = (post) => {
    editBlogPost({id, ...post}, () => {
      navigation.navigate('Index');
    })
  }

  return (
    <BlogPostForm 
      initialValues={{ title: blog.title, content: blog.content }}
      onPress={submitBlog} 
    />
  )
}