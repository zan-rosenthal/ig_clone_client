import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  item: {
    flex: 1
  }
})

export default function InfoGroup ({ value, label }) {
  return (
   <View style={styles.item}>
     <Text>{value}</Text>
     <Text>{label}</Text>
   </View>
 )
}
