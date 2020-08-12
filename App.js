import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList, TouchableOpacity } from 'react-native';

import GoalInput from './components/Goal_input'
import GoalOutput from './components/Goal_output'

export default function App() {

  useEffect(() => {
    setCourseGoals([]);
    setIsModalAvailable(false);
  }, [])

  const [courseGoals, setCourseGoals] = useState([]);

  const [isModalAvailable, setIsModalAvailable] = useState(false);

  const [isInputTextNull, setIsInputTextNull] = useState(false);

  const setGoalHandler = (goalText) => {
    if (goalText == '' || goalText == null || goalText == ' ') {
      setIsInputTextNull(true);
    }
    else {
      setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalText }]);
      setIsModalAvailable(false);
      setIsInputTextNull(false);
    }

  }

  const onRemoveHandler = (goal_id) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((eachGoal) => eachGoal.id !== goal_id)
    })
  }

  return (
    <View style={styles.parent_container}>

      <TouchableOpacity >
        <Button title="Add Goals" onPress={() => setIsModalAvailable(true)} />
      </TouchableOpacity>


      {/* Input component */}
      <View>
        <GoalInput
          visibility={isModalAvailable}
          setIsModalAvailable={setIsModalAvailable}
          isInputTextNull={isInputTextNull}
          setIsInputTextNull={setIsInputTextNull}
          setGoalHandler={setGoalHandler} />
      </View>

      {/* Output component */}
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData =>
          <GoalOutput
            id={itemData.item.id}
            onDelete={onRemoveHandler}
            eachValue={itemData.item} />} />
    </View >

  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    flexDirection: 'column'
  },

  parent_container: { padding: 20, marginTop: 20 }
})
