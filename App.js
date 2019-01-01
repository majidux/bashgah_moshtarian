import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';
import HomeLogin from "./src/Pages/HomeLogin";
import NewSuggestion from "./src/Pages/NewSuggestion";
import NewTicket from "./src/Pages/NewTicket";
import ProductExpanded from "./src/Pages/ProductExpanded";
import ProductFeatureExpanded from "./src/Pages/ProductFeatureExpanded";
import Suggestion from "./src/Pages/Suggestion";


export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <HomeLogin/>
                    <NewSuggestion/>
                    <NewTicket/>
                    <ProductExpanded/>
                    <ProductFeatureExpanded/>
                    <Suggestion/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
