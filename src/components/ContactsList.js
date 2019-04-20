import React, {Component} from 'react'
import { View, StyleSheet, FlatList} from 'react-native'
import {connect} from 'react-redux'
import ContactItem from './ContactItem'
import Icon from 'react-native-vector-icons/EvilIcons'
import ContactDetail from './ContactsDetail'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 353,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
    }
})

class ContactsList extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    static navigationOptions={
        tabBarIcon:({tintColor})=>(
            <Icon name={'user'} size={50} color={tintColor}/>
        )
    }
    renderIntialView(){
        if(this.props.detailView === true){
            return (
                <ContactDetail/>
            )
        } else {
            return(
        <FlatList data={this.props.contacts} 
                    renderItem={(item)=> <ContactItem contact={item.item}/>}
                    keyExtractor={(item, index)=>index.toString()}
            />
            )
        }
    }
    

    render(){
        return(
            <View style={styles.container}>
                {this.renderIntialView()}
            </View>
        )
    }
}
const mapStateToProps = state =>{
    return {contacts:state.contacts,
        detailView:state.detailView}
}
export default connect(mapStateToProps)(ContactsList)