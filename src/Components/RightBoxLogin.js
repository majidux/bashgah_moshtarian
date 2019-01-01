import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class LeftBox extends Component {
    render() {
        return (
            <View style={{flex: 1,justifyContent:'space-between'}}>
                <View style={styles.viewImageStyle}>
                    <Image
                        source={require('../Assets/image/shape.png')}
                        style={styles.imageStyle}
                    />
                </View>
                <View style={styles.middleOne}>
                    <View style={[styles.categoryName, styles.commonStyle]}>
                        <Text style={{fontSize: 21}}>نام گروه</Text>
                    </View>
                    <View style={[styles.userName, styles.commonStyle]}>
                        <Text style={{fontSize: 21}}>کد کاربر</Text>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <View style={[styles.buttonView,styles.confirmButton]}>
                        <Text style={{fontSize: 19,color:'white'}}>تایید</Text>
                    </View>
                    <View style={[styles.buttonView,styles.declineButton]}>
                        <Text style={{fontSize: 19,color:'white'}}>لغو</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewImageStyle: {
        alignItems: 'center',
        flex: .3
    },
    categoryName: {
    
    },
    userName: {
    
    },
    buttons: {
        flexDirection: 'row',
        flex: .3,
        justifyContent:'space-between',
        alignItems: 'center',
    },
    commonStyle: {
        borderColor: '#cccccc',
        borderStyle: 'solid',
        borderWidth: 1,
        flex: .4,
        justifyContent: 'center',
        paddingHorizontal:25
    },
    middleOne: {
        flex: .3,
        justifyContent: 'space-between',
    },
    buttonView:{
        flex:.48,
        alignItems:'center',
        paddingVertical: 10,
    },
    confirmButton:{
        backgroundColor:'#00afb2'
    },
    declineButton:{
        backgroundColor:'#ff795f'
    }
});