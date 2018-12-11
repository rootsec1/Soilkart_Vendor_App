import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import LottieView from 'lottie-react-native';
//LOCAL
import config from '../../../config';

export default class Splash extends React.PureComponent {
    render() {
        const {
            containerStyle
        } = styles;

        return (
            <View style={containerStyle}>
                <StatusBar backgroundColor={config.COLOR_BACKGROUND} barStyle='dark-content' />
                
                <LottieView
                    source={require('../../assets/lottie/delivery.json')}
                    autoPlay
                    loop={false}
                />

            </View>
        );
    }

    componentDidMount() {
        const { navigate } = this.props.navigation;

        setTimeout(()=>{
            navigate('SignIn');
        }, 2500);
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: config.COLOR_BACKGROUND,
        justifyContent: 'center',
        alignItems: 'center'
    }
});