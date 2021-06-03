import React from 'react'
import {View, StyleSheet} from 'react-native'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'

const Header = props =>{
    <View style={styles.header}>
        <TitleText>{props.title}</TitleText>
    </View>
}

const styles= StyleSheet.create({
    header:{
        height:90,
        width:'100%',
        paddingTop:36,
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Header