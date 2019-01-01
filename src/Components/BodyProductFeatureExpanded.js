import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import HeaditemProductFeatureExpanded from "./HeaditemProductFeatureExpanded";
import Items1 from "./Items1ProductFeatureExpanded";
import Items2 from "./Items2ProductFeatureExpanded";
import Items3 from "./Items3ProductFeatureExpanded";

export default class BodyProductFeatureExpanded extends Component {
    render() {
        return (
            <View style={styles.bodyStyles}>
                <View style={styles.headTitle}>
                    <Text style={{fontSize: 30, color: 'black'}}>درخواست جلسه</Text>
                </View>
                <View>
                    <HeaditemProductFeatureExpanded/>
                    <Items1/>
                    <Items2/>
                    <Items3/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bodyStyles: {
        flex: .77,
        padding: 25,
        paddingBottom: 0
    },
    headTitle: {
        marginVertical: 40
    },
    
    
});