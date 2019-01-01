import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MiddleBodyProductExpanded from "./MiddleBodyProductExpanded";
import RightBodyProductExpanded from "./RightBodyProductExpanded";

export default class BodyProductExpanded extends Component {
    render() {
        return (
            <View style={styles.body}>
                <MiddleBodyProductExpanded/>
                <RightBodyProductExpanded/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    body: {
        flex: .77,
        // backgroundColor: 'blue',
        flexDirection: 'row',
    },
});