import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'native-base'
import InfoGroup from './InfoGroup'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    marginLeft: 20,
    paddingTop: 20,
    flex: 3
  },
  editBtn: {
    alignItems: 'center',
    flex: 1,
    padding: 5,
    height: 20,
    justifyContent: 'center',
    width: '100%'
  },
  infoContainer: {
    flex: 2,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default function ProfileMeta(props) {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <InfoGroup value="19" label="posts" />
        <InfoGroup value="278" label="followers" />
        <InfoGroup value="298" label="following" />
      </View>
      <Button bordered dark style={styles.editBtn}>
        <Text>
          Edit Profile
        </Text>
      </Button>
    </View>
  )
}
