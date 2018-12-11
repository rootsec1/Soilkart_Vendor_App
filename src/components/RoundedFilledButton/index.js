import React from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default class RoundedFilledButton extends React.PureComponent {
    render() {
        const {
            containerStyle,
            titleTextStyle
        } = styles;
        
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={[containerStyle, this.props.style]}>
                {
                    this.props.progress?
                    <ActivityIndicator color='white' size='large' />:
                    <Text style={titleTextStyle}>{ this.props.text }</Text>
                }
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: 24,
        flexDirection: 'row',
        flex: 1,
        padding: 12,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleTextStyle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    }
});