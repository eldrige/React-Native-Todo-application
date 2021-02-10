import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function TodoItem({item, pressHandler}){

  return(

    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  item: {
    padding:16,
    marginTop: 16,
    borderColor:'#666',
    borderWidth: 1,
    borderRadius: 10,
  }
});