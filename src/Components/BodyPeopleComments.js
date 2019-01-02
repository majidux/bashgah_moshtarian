import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PeopleComment from "./PeopleComment";

export default class BodySuggestion extends Component {
    render() {
        return (
            <View style={styles.body}>
                <View style={styles.allContent}>
                    <View style={[styles.commonStyle,{paddingRight: 40}]}>
                        <Text style={styles.subTitleText}>چطور میتونیم پیام گستر را بهبود ببخشیم؟</Text>
                    </View>
                        <View style={{flexDirection: 'row-reverse', paddingVertical: 15,paddingLeft: 25}}>
                            <View style={{paddingHorizontal: 10}}>
                                <Image
                                    source={require('../Assets/image/Back_icon.png')}
            
                                />
                            </View>
                            <Text style={{color:'#ff795f'}}>بازگشت</Text>
                        </View>
                    <PeopleComment/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    body: {
        flex: .75,
        backgroundColor: '#ffffff',
    },
    allContent: {
        paddingRight: 35,
        paddingTop: 20,
        flex: 1
    },
    subTitleText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500'
        
    },
    textInBoxes: {
        fontSize: 16,
        color: 'black'
    },
    textInBox2: {
        color: '#666666'
    },
    
    suggTitle: {
        borderWidth: 1,
        borderColor: '#dddddd',
        paddingVertical: 15,
        paddingHorizontal: 12,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    },
    commonStyle: {
        marginTop: 30,
    },
    commonStyle2: {
        marginTop: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20
    },
    commonButton: {
        backgroundColor: '#f3f6fa',
        flex: .12,
        paddingVertical: 8,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    

    buttonFontStyles: {
        color: 'black',
        fontSize: 14,
    },
    viewTouch: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row-reverse',
    },
    Orangebgcolor:{
        backgroundColor:'#ff795f'
    },
    
});