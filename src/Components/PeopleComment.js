import React, {Component} from 'react';
import {Platform,View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,TextInput} from 'react-native';
import ReplyPeopleComment from "./ReplyPeopleComment";

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
                            <View style={styles.bodyComment}>
                                <Text style={{lineHeight: 22}}>لورم ایپسوم یا
                                    طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته
                                    می‌شود.
                                    طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه
                                    شکل
                                    ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                                    نوع و
                                    اندازه فونت و ظاهر متن باشد.معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های
                                    آزمایشی و بی‌معنی استفاده می‌کنند.</Text>
                            </View>
                        </View>
                    </View>
                    
                    {/*Reply Comment*/}
                    
                    
                    <ReplyPeopleComment/>
                    
                    {/*Reply Comment End*/}
                    
                    
                    <View>
                        <View><Text style={{fontSize: 16, fontWeight: 'bold'}}>12 نظر</Text></View>
                        <View style={styles.messageSection}>
                            <TextInput placeholder={'نظر خود را بنویسید ...'}></TextInput>
                        </View>
                        <View style={styles.sendButton}><Text style={{color: 'white'}}>ثبت</Text></View>
                    </View>
                    
                    <View style={styles.oneComment}>
                        <View style={styles.emptySpace}>
                        </View>
                        <View style={styles.votes}>
                            <View style={styles.voteCount}>
                                <Image
                                    source={require('../Assets/image/peoplePic.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.commentText}>
                            <View style={styles.titleComment}>
                                <Text style={{fontSize: 12, fontWeight: 'bold'}}>حمید رضا گلمحمدی</Text>
                                <Text style={{fontSize: 12, fontWeight: 'bold', marginRight: 10}}>18 مرداد</Text>
                            </View>
                            <View style={styles.bodyComment}>
                                <Text style={{lineHeight: 22}}>لورم ایپسوم یا
                                    طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته
                                    می‌شود.
                                    طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه
                                    شکل
                                    ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                                    نوع و
                                    اندازه فونت و ظاهر متن باشد.معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های
                                    آزمایشی و بی‌معنی استفاده می‌کنند.</Text>
                            </View>
                        </View>
                    </View>
    
                    <View style={styles.oneComment}>
                        <View style={styles.emptySpace}>
                        </View>
                        <View style={styles.votes}>
                            <View style={styles.voteCount}>
                                <Image
                                    source={require('../Assets/image/peoplePic.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.commentText}>
                            <View style={styles.titleComment}>
                                <Text style={{fontSize: 12, fontWeight: 'bold'}}>حمید رضا گلمحمدی</Text>
                                <Text style={{fontSize: 12, fontWeight: 'bold', marginRight: 10}}>18 مرداد</Text>
                            </View>
                            <View style={styles.bodyComment}>
                                <Text style={{lineHeight: 22}}>لورم ایپسوم یا
                                    طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته
                                    می‌شود.
                                    طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه
                                    شکل
                                    ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                                    نوع و
                                    اندازه فونت و ظاهر متن باشد.معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های
                                    آزمایشی و بی‌معنی استفاده می‌کنند.</Text>
                            </View>
                        </View>
                    </View>
    
                    <View style={styles.oneComment}>
                        <View style={styles.emptySpace}>
                        </View>
                        <View style={styles.votes}>
                            <View style={styles.voteCount}>
                                <Image
                                    source={require('../Assets/image/peoplePic.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.commentText}>
                            <View style={styles.titleComment}>
                                <Text style={{fontSize: 12, fontWeight: 'bold'}}>حمید رضا گلمحمدی</Text>
                                <Text style={{fontSize: 12, fontWeight: 'bold', marginRight: 10}}>18 مرداد</Text>
                            </View>
                            <View style={styles.bodyComment}>
                                <Text style={{lineHeight: 22}}>لورم ایپسوم یا
                                    طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته
                                    می‌شود.
                                    طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه
                                    شکل
                                    ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                                    نوع و
                                    اندازه فونت و ظاهر متن باشد.معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های
                                    آزمایشی و بی‌معنی استفاده می‌کنند.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.oneComment}>
                        <View style={styles.emptySpace}>
                        </View>
                        <View style={styles.votes}>
                            <View style={styles.voteCount}>
                                <Image
                                    source={require('../Assets/image/peoplePic.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.commentText}>
                            <View style={styles.titleComment}>
                                <Text style={{fontSize: 12, fontWeight: 'bold'}}>حمید رضا گلمحمدی</Text>
                                <Text style={{fontSize: 12, fontWeight: 'bold', marginRight: 10}}>18 مرداد</Text>
                            </View>
                            <View style={styles.bodyComment}>
                                <Text style={{lineHeight: 22}}>لورم ایپسوم یا
                                    طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته
                                    می‌شود.
                                    طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه
                                    شکل
                                    ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                                    نوع و
                                    اندازه فونت و ظاهر متن باشد.معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های
                                    آزمایشی و بی‌معنی استفاده می‌کنند.</Text>
                            </View>
                        </View>
                    </View>
    
                    <View style={styles.oneComment}>
                        <View style={styles.emptySpace}>
                        </View>
                        <View style={styles.votes}>
                            <View style={styles.voteCount}>
                                <Image
                                    source={require('../Assets/image/peoplePic.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.commentText}>
                            <View style={styles.titleComment}>
                                <Text style={{fontSize: 12, fontWeight: 'bold'}}>حمید رضا گلمحمدی</Text>
                                <Text style={{fontSize: 12, fontWeight: 'bold', marginRight: 10}}>18 مرداد</Text>
                            </View>
                            <View style={styles.bodyComment}>
                                <Text style={{lineHeight: 22}}>لورم ایپسوم یا
                                    طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته
                                    می‌شود.
                                    طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه
                                    شکل
                                    ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                                    نوع و
                                    اندازه فونت و ظاهر متن باشد.معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های
                                    آزمایشی و بی‌معنی استفاده می‌کنند.</Text>
                            </View>
                        </View>
                    </View>
    
                    <View style={styles.oneComment}>
                        <View style={styles.emptySpace}>
                        </View>
                        <View style={styles.votes}>
                            <View style={styles.voteCount}>
                                <Image
                                    source={require('../Assets/image/peoplePic.png')}
                                />
                            </View>
                        </View>
                        <View style={styles.commentText}>
                            <View style={styles.titleComment}>
                                <Text style={{fontSize: 12, fontWeight: 'bold'}}>حمید رضا گلمحمدی</Text>
                                <Text style={{fontSize: 12, fontWeight: 'bold', marginRight: 10}}>18 مرداد</Text>
                            </View>
                            <View style={styles.bodyComment}>
                                <Text style={{lineHeight: 22}}>لورم ایپسوم یا
                                    طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته
                                    می‌شود.
                                    طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه
                                    شکل
                                    ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                                    نوع و
                                    اندازه فونت و ظاهر متن باشد.معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های
                                    آزمایشی و بی‌معنی استفاده می‌کنند.</Text>
                            </View>
                        </View>
                    </View>
                    
                    
                
                
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
    messageSection: {
        borderWidth: 1,
        borderColor: '#dddddd',
        height: 160,
        paddingRight: 10
        
    },
    emptySpace: {
        flex: .13,
    },
    votes: {
        flex: .09,
        marginRight: 5,
    },
    voteCount: {
        flex: .35,
        alignItems: 'center',
        // justifyContent: 'center'
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
        // height: 160
    },
    titleComment: {
        flex: .2,
        flexDirection: 'row-reverse',
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
    },
    sendButton: {
        backgroundColor: '#00afb2',
        width: 80,
        // justifyContent:'flex-start',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginTop: 20
    }
    
});