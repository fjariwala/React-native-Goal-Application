import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Text } from 'react-native'

const Goal_input = ({ setGoalHandler, visibility, setIsModalAvailable, isInputTextNull, setIsInputTextNull }) => {

    const [goal, setGoal] = useState('');

    const setEnteredGoal = (setText) => {
        setGoal(setText);
    }

    const addGoalHandler = () => {
        setGoalHandler(goal)
        setEnteredGoal('')
    }

    const cancelHandler = () => {
        setIsModalAvailable(false)
        setIsInputTextNull(false)
    }

    return (
        <Modal visible={visibility} animationType='slide'>

            <View style={styles.input_container} >

                {/* To show weather the input is valid or not */}
                <Text>
                    {isInputTextNull == true ? <Text>Invalid input</Text> : ''}
                </Text>

                {/* Text input */}
                <TextInput placeholder='Course Goal' style={styles.goal_text} onChangeText={setEnteredGoal}
                    value={goal} />

                {/* Buttons */}
                <View style={styles.button_container}>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='CANCEL' color='red' onPress={cancelHandler} />
                    </View>
                </View>


            </View>
        </Modal>
    )
}

export default Goal_input

const styles = StyleSheet.create({

    input_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    goal_text: {
        width: '80%',
        borderBottomWidth: .5,
        borderColor: 'black',
        marginBottom: 10,
        padding: 10
    },

    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },

    button: {
        width: '40%'
    }
})
