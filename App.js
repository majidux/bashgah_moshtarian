import React, {Component} from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import HomeLogin from "./src/Pages/HomeLogin";
import NewSuggestion from "./src/Pages/NewSuggestion";
import NewTicket from "./src/Pages/NewTicket";
import ProductExpanded from "./src/Pages/ProductExpanded";
import ProductFeatureExpanded from "./src/Pages/ProductFeatureExpanded";
import Suggestion from "./src/Pages/Suggestion";
import PeopleCommentsPage from "./src/Pages/PeopleCommentsPage";


export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                    {/*<HomeLogin/>*/}
                    {/*<NewSuggestion/>*/}
                    {/*<NewTicket/>*/}
                    {/*<ProductExpanded/>*/}
                    {/*<ProductFeatureExpanded/>*/}
                    {/*<Suggestion/>*/}
                    <PeopleCommentsPage/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
