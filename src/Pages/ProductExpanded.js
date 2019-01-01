import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import HeaderProductExpanded from "../Components/HeaderProductExpanded";
import SidebarProductExpanded from "../Components/SidebarProductExpanded";
import BodyProductExpanded from "../Components/BodyProductExpanded";

export default class ProductExpanded extends Component {
    render() {
        return (
            <View style={styles.HomeStyle}>
                <View style={styles.headerStyle}>
                    <HeaderProductExpanded/>
                </View>
                <View style={styles.bodySidebar}>
                    <SidebarProductExpanded/>
                    <BodyProductExpanded/>
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