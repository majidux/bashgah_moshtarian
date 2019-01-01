import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import HeaderProductFeatureExpanded from "../Components/HeaderProductFeatureExpanded";
import Sidebar from "../Components/Sidebar";
import BodyProductFeatureExpanded from "../Components/BodyProductFeatureExpanded";

export default class ProductFeatureExpanded extends Component {
    render() {
        return (
            <View style={styles.HomeStyle}>
                <View style={styles.headerStyle}>
                    <HeaderProductFeatureExpanded/>
                </View>
                <View style={styles.bodySidebar}>
                    <Sidebar/>
                    <BodyProductFeatureExpanded/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    HomeStyle: {
        flex: 1,
    },
    bodySidebar: {
        flexDirection: 'row',
        flex: .93,
        
    },
    headerStyle:{
        flex:.07
    }
});