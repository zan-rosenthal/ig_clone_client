import React from 'react'
import { View, StyleSheet, TouchableOpacity, } from 'react-native'
import { Thumbnail } from 'native-base'

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: 50,
    paddingBottom: 10,
  },
})


export default function ImageGallery({ posts, handleNavigateToImageDetail }) {
  return (
    <View style={styles.container}>
      {
       posts.map(
         (post, idx) => 
           <TouchableOpacity
             key={idx}
             onPress={() =>  handleNavigateToImageDetail(post)}>
             <Thumbnail 
               large
               square 
               style={styles.post}
               source={{ uri: post.imageUrl}}/>
           </TouchableOpacity>
       ) 
      }
    </View>
  )
}