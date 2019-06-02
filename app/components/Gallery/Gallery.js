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


export default function ImageGallery({ images, handleNavigateToImageDetail }) {
  return (
    <View style={styles.container}>
      {
       images.map(
         (image, idx) => 
           <TouchableOpacity
             key={idx}
             onPress={() =>  handleNavigateToImageDetail(image)}>
             <Thumbnail 
               large
               square 
               style={styles.image}
               source={{ uri: image.download_url}}/>
           </TouchableOpacity>
       ) 
      }
    </View>
  )
}