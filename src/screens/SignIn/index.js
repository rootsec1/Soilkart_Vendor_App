import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput } from 'react-native';
import LottieView from 'lottie-react-native';
//LOCAL
import config from '../../../config';
import BlockOutlineButton from '../../components/BlockOutlineButton';

export default class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
        progress: false
    }

    render() {
        const {
            containerStyle,
            logoStyle,
            titleTextStyle,
            subtitleTextStyle,
            textInputStyle
        } = styles;

        return (
            <ScrollView style={{flex: 1}}>
                <View style={containerStyle}>
                    <LottieView
                        source={require('../../assets/lottie/office.json')}
                        autoPlay
                        loop
                        style={logoStyle}
                    />

                    <Text style={titleTextStyle}>{ "Welcome" }</Text>
                    <Text style={subtitleTextStyle}>{ "Sign in to continue :)" }</Text>

                    <TextInput
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                        placeholder='EMAIL ADDRESS'
                        keyboardType='email-address'
                        selectionColor={config.COLOR_ACCENT}
                        placeholderTextColor={config.COLOR_TEXT_DARK}
                        underlineColorAndroid={config.COLOR_TEXT_DARK}
                        style={[textInputStyle,{marginTop: 40}]}
                    />


                    <TextInput
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text })}
                        secureTextEntry
                        placeholder='PASSWORD'
                        selectionColor={config.COLOR_ACCENT}
                        placeholderTextColor={config.COLOR_TEXT_DARK}
                        underlineColorAndroid={config.COLOR_TEXT_DARK}
                        style={[textInputStyle,{marginTop: 20,marginBottom:60}]}
                    />

                    <BlockOutlineButton
                        text='Sign In'
                        progressText='Signing In..'
                        onPress={this.onSignInButtonPress.bind(this)}
                        progress={this.state.progress}
                    />
                </View>
            </ScrollView>
        );
    }

    onSignInButtonPress() {
        this.setState({ progress: true });
        
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: config.COLOR_BACKGROUND,
        paddingTop: 40,
        paddingLeft: 16,
        paddingRight: 16
    },
    logoStyle: {
        height: 196,
        width: 196
    },
    titleTextStyle: {
        color: config.COLOR_TEXT_DARK,
        fontSize: 64,
        fontFamily: 'Fredoka'
    },
    subtitleTextStyle: {
        color: config.COLOR_TEXT_LIGHT,
        fontSize: 24
    },
    textInputStyle: {
        color: 'black',
        fontSize: 16
    }
});