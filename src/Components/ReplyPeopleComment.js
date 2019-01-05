import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import replySuggestion from './DataReplyCommentSuggestion';

let [reply]=replySuggestion;
export default class ReplyPeopleComment extends Component {
    render() {
        return (
            <View style={styles.replyComment}>
                <View style={styles.emptySpace}>
                </View>
                <View style={styles.reply}>
                    <View style={styles.replyDetail}>
                        <View style={styles.paddings}>
                            <Image
                                source={require('../Assets/image/profilePic.png')}
                            />
                        </View>
                        <View style={[styles.lightBluebgcolor,styles.paddings,{paddingHorizontal: 5}]}>
                            <Text style={{color:'white'}}>{reply.start}</Text>
                        </View>
                        <View style={styles.paddings}>
                            <Text style={styles.orangeFontColor}>{reply.responder}</Text>
                        </View>
                        <View style={styles.paddings}>
                            <Text> پاسخ داده است</Text>
                        </View>
                    </View>
                    <View style={{paddingRight: 10,paddingTop: 10}}>
                        <Text style={{lineHeight:22}}>
                            طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل
                            ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    replyComment: {
        flex: 1,
        flexDirection: 'row-reverse',
        paddingTop: 20,
        paddingBottom: 40,
    },
    emptySpace: {
        flex: .13,
    },
    reply: {
        flex: .87,
        paddingVertical: 5
    },
    replyDetail: {
        flexDirection: 'row-reverse',
        flex:.5,

    },
    paddings:{
        marginRight: 6,
        justifyContent: 'center',
    },
    Orangebgcolor:{
        backgroundColor:'#ff795f'
    },
    lightBluebgcolor:{
        backgroundColor: '#00afb2'
    },
    orangeFontColor:{
        color: '#ff795f'
    },
});