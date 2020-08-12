import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Goal_output = ({ onDelete, eachValue, id }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={onDelete.bind(this, id)}>
            <View style={styles.list_view}>
                <Text>{eachValue.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Goal_output

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    list_view: {
        padding: 10,
        backgroundColor: '#87cefa',
        marginTop: 2
    }
})
