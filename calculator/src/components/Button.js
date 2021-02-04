import React from 'react'
import {
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions
} from 'react-native'

const styles = StyleSheet.create({
    buttons: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderWidth: 1,
        borderColor: '#888',
        textAlign: 'center'
    },
    operationButton: {
        backgroundColor: '#fa8231',
        color: '#fff'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})

export default props => {
    const styleButton = [styles.buttons]
    if(props.double) styleButton.push(styles.buttonDouble)
    if(props.triple) styleButton.push(styles.buttonTriple)
    if(props.operation) styleButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}