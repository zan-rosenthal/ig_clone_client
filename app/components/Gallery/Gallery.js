import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Thumbnail } from 'native-base'
import { Row, Grid } from "react-native-easy-grid";

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


export default function ImageGallery({ images }) {
  return (
    <View style={styles.container}>
      {
       images.map(
         (image, idx) => 
          <Thumbnail 
            large
            square 
            key={idx}
            style={styles.image}
            source={{ uri: image.download_url}}
            />
       ) 
      }
    </View>
  )
}