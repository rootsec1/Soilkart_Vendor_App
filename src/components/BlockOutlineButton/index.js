import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
//LOCAL
import config from '../../../config';

export default class BlockOutlineButton extends React.PureComponent {
    render() {
        const {
            containerStyle,
            textStyle
        } = styles;

        return (
            <TouchableOpacity activeOpacity={0.75} onPress={this.props.onPress} disabled={this.props.progress}>
                <View style={[containerStyle,this.props.style]}>
                    {
                        this.props.progress?
                        <Text style={[textStyle,this.props.textStyle]}>{ this.props.progressText }</Text>:
                        <Text style={[textStyle,this.props.textStyle]}>{ this.props.text }</Text>
                    }
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: config.COLOR_ACCENT,
        borderWidth: 2,
        borderRadius: 4,
        padding: 5
    },
    textStyle: {
        fontSize: 22,
        margin: 3,
        color: config.COLOR_ACCENT
    }
});