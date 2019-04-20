import React, {Component} from 'react'
import { View, StyleSheet, FlatList} from 'react-native'
import {connect} from 'react-redux'
import ContactItem from './ContactItem'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap:'wrap',
        paddingTop:20,
        paddingLeft:20
      }
})

class ContactsList extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
            <FlatList data={this.props.contacts} 
            renderItem={(item)=>{
                console.log(item.item)
                return <ContactItem contact={item.item}/>
            }
            
            }/>
            </View>
        )
    }
}
const mapStateToProps = state =>{
    return {contacts:state.contacts}
}
export default connect(mapStateToProps)(ContactsList)