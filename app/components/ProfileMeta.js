import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'native-base'
import InfoGroup from './InfoGroup'

const styles = StyleSheet.create({
  container: {
    flex: 3,
    height: '100%',
    justifyContent: 'space-between',
    marginLeft: 10,
    padding: 10,
  },
  editBtn: {
    alignItems: 'center',
    height: 35,
    marginTop: 20,
    padding: 5,
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
