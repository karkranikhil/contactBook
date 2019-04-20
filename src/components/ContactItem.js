import React from 'react'
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback } from 'react-native'
import {connect} from 'react-redux'
import {getTheme} from 'react-native-material-kit'
import * as actions from '../actions'
import Icon from 'react-native-vector-icons/EvilIcons';
const theme = getTheme()
const styles = StyleSheet.create({
    card: {
        marginTop: 20,
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24,
    },
    image: {
        height: 100,
    },
    action: {
        backgroundColor: 'black',
        color: 'white',
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
})

const ContactItem =(props)=>{
    console.log('props.contact',props)
        return(
            <TouchableWithoutFeedback
            onPress={()=>props.selectContact(props.contact)}
            >
                <View style={[theme.cardStyle, styles.card]}>
                    {/* {console.log(props)} */}
                    <Image 
                    source={require('../images/background.jpg')}
                    style={[theme.cardImageStyle, styles.image]}/>
                    <Icon
                    name={'user'}
                    size={100}
                    style={styles.icon}/>
                    <Text 
                    style={[theme.cardTitleStyle, styles.title]}
                    >{props.contact.firstName} 
                    {props.contact.lastName}</Text>
                    <Text
                    style={[theme.cardActionStyle, styles.action]}
                    >{props.contact.company}</Text>
                </View>
            </TouchableWithoutFeedback>
            
        )
}

export default connect(null, actions)(ContactItem);