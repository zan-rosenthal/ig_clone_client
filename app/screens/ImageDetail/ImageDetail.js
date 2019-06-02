import {
  Container,
  Footer,
  Text,
  Thumbnail
} from 'native-base';
import React from 'react'
import Header from 'components/Header'
import { Image, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  userBanner: {
    flex: 1,
    padding: 10,
    flexDirection: 'row'
  },
  image: {
    flex: 6
  },
  imageContainer: {
    flex: 1
  },
  comments: {
    flex: 4,
    padding: 10
  },
  footer: {
    backgroundColor: 'white',
    height: 20
  },
  profileImg: {
    marginRight: 10
  }
})

export default function ImageDetail({ image, user }) {
  return (
    <Container>
      <Header text="Photo" />
      <View style={styles.container}>
        <View style={styles.userBanner}>
          <Thumbnail style={styles.profileImg} small source={{ uri: "https://fillmurray.com/200/300" }} />
          <View>
            <Text>
              {user.userName}
            </Text>
            <Text>
              Chicago, IL
            </Text>
          </View>
        </View>
          <Image source={{ uri: image.download_url }} style={styles.image} />
        <View style={styles.comments}> 
          <Text>comments</Text>
        </View>
      </View>
      <Footer style={styles.footer} />
    </Container>
  )
}