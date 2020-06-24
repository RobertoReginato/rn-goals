import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default GoalItem;