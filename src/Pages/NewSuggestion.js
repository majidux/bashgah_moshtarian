import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import HeaderNewSuggestion from "../Components/HeaderNewSuggestion";
import SidebarNewSuggestion from "../Components/SidebarNewSuggestion";
import BodyNewSuggestion from "../Components/BodyNewSuggestion";


export default class Home extends Component {
    render() {
        return (
            <View style={styles.HomeStyle}>
                <View style={styles.headerStyle}>
                    <HeaderNewSuggestion/>
                </View>
                <View style={styles.bodySidebar}>
                    <SidebarNewSuggestion/>
                    <BodyNewSuggestion/>
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