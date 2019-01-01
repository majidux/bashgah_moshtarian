import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BodyLogin from "../Components/BodyLogin";

export default class HomeLogin extends Component {
    render() {
        return (
            <View style={styles.container}>
                <BodyLogin/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});