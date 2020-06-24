import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...courseGoals, { 
      id: Math.random().toString(), 
      value: goalTitle
    }]);
    setShowAdd(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalAdditionalHandler = () => {
    setShowAdd(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setShowAdd(true)} />
      <GoalInput 
        visible={showAdd} 
        onAddGoal={addGoalHandler} 
        onCancel={cancelGoalAdditionalHandler} 
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler} 
            title={itemData.item.value} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
