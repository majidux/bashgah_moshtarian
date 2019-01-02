import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import HeaderSuggestion from "../Components/HeaderSuggestion";
import SidebarSuggestion from "../Components/SidebarSuggestion";
import BodyPeopleComments from "../Components/BodyPeopleComments";

export default class Suggestion extends Component {
    render() {
        return (
            <View style={styles.HomeStyle}>
                <View style={styles.headerStyle}>
                    <HeaderSuggestion/>
                </View>
                <View style={styles.bodySidebar}>
                    <SidebarSuggestion/>
                    <BodyPeopleComments/>
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