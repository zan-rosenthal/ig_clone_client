import React from 'react'
import { Container, Content, Footer, Thumbnail, Text } from 'native-base';
import { View, StyleSheet } from 'react-native'
import ProfileMeta from 'components/ProfileMeta'
import Header from 'components/Header'
import Gallery from 'components/Gallery'

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  container: {
    width: '100%',
    height: '100%'
  },
  footer: {
    backgroundColor: 'white',
    height: 20
  },
  profileMeta: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    width: '100%',
  },
  profileImg: {
    flex: 1
  },
  metaInfo: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20
  },
  profileIntro: {
    marginTop: 10,
    marginLeft: 15,
  },
  profileIntroText: {
    fontSize: 20,
    lineHeight: 32,
  },
  userFullName: {
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default function Profile({ user, posts, handleNavigateToImageDetail }) {
  return (
    <Container style={styles.container}>
      <Header text={user.userName} />
      <Content style={styles.body}>
        <View style={styles.profileMeta}>
          <Thumbnail 
            large 
            source={{ uri: "https://fillmurray.com/100/100" }} />
          <ProfileMeta style={styles.metaInfo} />
        </View>
        <View style={styles.profileIntro}>
          <Text style={styles.userFullName}> {user.fullName} </Text>
          <Text style={styles.profileIntroText}>
           {user.profileIntro}
          </Text>
        </View>
        <Gallery 
          posts={posts}
          handleNavigateToImageDetail={handleNavigateToImageDetail}/>
      </Content>
      <Footer style={styles.footer} />
    </Container>
  )
}