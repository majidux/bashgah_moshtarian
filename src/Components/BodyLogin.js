import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LeftBoxLogin from "./LeftBoxLogin";
import RightBox from "./RightBoxLogin";

export default class BodyLogin extends Component {
    render() {
        return (
            <View style={styles.bodyMain}>
                <View style={styles.centerBoxes}>
                    <View style={styles.commonBoxStyles}>
                        <LeftBoxLogin/>
                    </View>
                    <View style={styles.commonBoxStyles}>
                        <RightBox/>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bodyMain: {
        flex: 1,
        justifyContent: 'center'
    },
    centerBoxes: {
        flex: .55,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    commonBoxStyles:{
        flex: .38,
        paddingHorizontal: 50,
        paddingTop: 35,
        borderWidth: 1,
    }
    

});