import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import replySuggestion from './DataReplyCommentSuggestion';

let [reply]=replySuggestion;

export default class ReplyCommentSuggestion extends Component {
    render() {
        return (
            
            <View style={styles.replyComment}>
                <View style={styles.reply}>
                    <View style={styles.replyDetail}>
                        <View style={styles.paddings}>
                            <Image
                                source={reply.image}
                            />
                        </View>
                        <View style={[styles.lightBluebgcolor, styles.paddings,{paddingHorizontal:5}]}>
                            <Text style={{color: 'white'}}>{reply.start}</Text>
                        </View>
                        <View style={styles.paddings}>
                            <Text style={styles.orangeFontColor}>{reply.responder}</Text>
                        </View>
                        <View style={styles.paddings}>
                            <Text> پاسخ داده است</Text>
                        </View>
                    </View>
                    <View style={{paddingRight: 10, paddingTop: 10}}>
                        <Text style={{lineHeight: 22}}>{this.props.reply}</Text>
                    </View>
                </View>
                
                <View style={styles.emptySpace}>
                </View>
            
            </View>
        );
    }
}
const styles = StyleSheet.create({
    replyComment: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 40,
    },
    emptySpace: {
        flex: 1,
    },
    reply: {
        flex: 9,
        paddingVertical: 5
    },
    replyDetail: {
        flexDirection: 'row-reverse',
        flex: .5,
        
    },
    paddings: {
        marginRight: 6,
        justifyContent: 'center',
    },
    Orangebgcolor: {
        backgroundColor: '#ff795f'
    },
    lightBluebgcolor: {
        backgroundColor: '#00afb2'
    },
    orangeFontColor: {
        color: '#ff795f'
    },
});