import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import HeadernewTicket from "../Components/HeadernewTicket";
import BodynewTicket from "../Components/BodynewTicket";

export default class NewTicket extends Component {
    render() {
        return (
            <View style={styles.HomeStyle}>
                <View style={styles.headerStyle}>
                    <HeadernewTicket/>
                </View>
                <View style={styles.bodySidebar}>
                    <BodynewTicket/>
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