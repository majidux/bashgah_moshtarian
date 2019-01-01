import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import ReplyCommentSuggestion from "./ReplyCommentSuggestion";

export default class CommentSuggestion extends Component {
    render() {
        return (
            <View style={styles.commentSection}>
                <ScrollView>
                    <View style={styles.oneComment}>
                        <View style={styles.votes}>
                            <View style={styles.voteCount}><Text>۱۲۳ رای</Text></View>
                            <TouchableOpacity style={[styles.giveVote, styles.Orangebgcolor]}>
                                <View>
                                    <Text style={styles.whiteFont}>رای بده</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.commentText}>
                            <View style={styles.titleComment}><Text
                                style={[styles.fontSize20, styles.boldFont]}>لورم ایپسوم متن ساختگی با
                                تولید</Text></View>
                            <View style={styles.bodyComment}><Text style={{lineHeight: 22}}>لورم ایپسوم یا
                                طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل
                                ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و
                                اندازه فونت و ظاهر متن باشد.معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های
                                آزمایشی و بی‌معنی استفاده می‌کنند.</Text></View>
                            <View style={styles.footerComment}>
                                <View style={styles.footerCommentInside}>
                                    <View style={styles.footerCommentText}>
                                        <Text style={styles.boldFont}>۱۲ نظر</Text>
                                    </View>
                                    <View style={styles.footerCommentText}>
                                        <Text style={styles.boldFont}>نام دسته بندی</Text>
                                    </View>
                                    <View style={styles.footerCommentText}>
                                        <Text style={styles.boldFont}>پیشنهاد خوبی نبود</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    {/*Reply Comment*/}
                    
                    <ReplyCommentSuggestion/>
                    
                    {/*Reply Comment End*/}
                    
                    <View style={styles.oneComment}>
                        <View style={styles.votes}>
                            <View style={styles.voteCount}>
                                <Text>۱۲۳ رای</Text>
                            </View>
                            <TouchableOpacity style={[styles.giveVote, styles.darkBluebgColor]}>
                                <View>
                                    <Text style={styles.whiteFont}>رای دادید</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.commentText}>
                            <View style={styles.titleComment}><Text
                                style={[styles.fontSize20, styles.boldFont]}>لورم ایپسوم متن ساختگی با
                                تولید</Text></View>
                            <View style={styles.bodyComment}><Text style={{lineHeight: 22}}>لورم ایپسوم یا
                                طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل
                                ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و
                                اندازه فونت و ظاهر متن باشد.معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های
                                آزمایشی و بی‌معنی استفاده می‌کنند.</Text></View>
                            <View style={styles.footerComment}>
                                <View style={styles.footerCommentInside}>
                                    <View style={styles.footerCommentText}>
                                        <Text style={styles.boldFont}>۱۲ نظر</Text>
                                    </View>
                                    <View style={styles.footerCommentText}>
                                        <Text style={styles.boldFont}>نام دسته بندی</Text>
                                    </View>
                                    <View style={styles.footerCommentText}>
                                        <Text style={styles.boldFont}>پیشنهاد خوبی نبود</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.oneComment}>
                        <View style={styles.votes}>
                            <View style={styles.voteCount}><Text>۱۲۳ رای</Text></View>
                            <TouchableOpacity style={[styles.giveVote, styles.Orangebgcolor]}>
                                <View>
                                    <Text style={styles.whiteFont}>رای بده</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.commentText}>
                            <View style={styles.titleComment}><Text
                                style={[styles.fontSize20, styles.boldFont]}>لورم ایپسوم متن ساختگی با
                                تولید</Text></View>
                            <View style={styles.bodyComment}><Text style={{lineHeight: 22}}>لورم ایپسوم یا
                                طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل
                                ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و
                                اندازه فونت و ظاهر متن باشد.معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های
                                آزمایشی و بی‌معنی استفاده می‌کنند.</Text></View>
                            <View style={styles.footerComment}>
                                <View style={styles.footerCommentInside}>
                                    <View style={styles.footerCommentText}>
                                        <Text style={styles.boldFont}>۱۲ نظر</Text>
                                    </View>
                                    <View style={styles.footerCommentText}>
                                        <Text style={styles.boldFont}>نام دسته بندی</Text>
                                    </View>
                                    <View style={styles.footerCommentText}>
                                        <Text style={styles.boldFont}>پیشنهاد خوبی نبود</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    {/*Reply Comment*/}
                    
                    <ReplyCommentSuggestion/>
                    
                    {/*Reply Comment End*/}
                
                
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    commentSection: {
        flex: 1,
    },
    oneComment: {
        flex: .9,
        flexDirection: 'row-reverse',
        paddingTop: 20,
        justifyContent: 'space-between',
    },
    votes: {
        flex: .09,
        marginRight: 5
    },
    voteCount: {
        flex: .35,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    giveVote: {
        flex: .1,
        marginTop: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    commentText: {
        flex: .88,
        justifyContent: 'space-between',
        height: 160
    },
    titleComment: {
        flex: .2
    },
    bodyComment: {
        flex: .7
    },
    footerComment: {
        flexDirection: 'row-reverse',
        flex: .1,
    },
    footerCommentInside: {
        flex: .4,
        flexDirection: 'row-reverse',
    },
    footerCommentText: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    Orangebgcolor: {
        backgroundColor: '#ff795f'
    },
    whiteFont: {
        color: 'white'
    },
    orangeFontColor: {
        color: '#ff795f'
    },
    fontSize20: {
        fontSize: 17
    },
    boldFont: {
        fontWeight: 'bold'
    },
    lightBluebgcolor: {
        backgroundColor: '#00afb2'
    },
    darkBluebgColor: {
        backgroundColor: '#2d3f4f'
    }
    
});