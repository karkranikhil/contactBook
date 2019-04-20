import React, {Component} from 'react'
import { View, Text} from 'react-native'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions/index'
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexWrap:'wrap',
//         paddingTop:20,
//         paddingLeft:20
//       }
// })

class CompanyList extends Component{
    static navigationOptions={
        tabBarIcon:({tintColor})=>(
            <Icon name={'archive'} size={50} color={tintColor}/>
        )
    }
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Text>Company screen</Text>
            </View>
        )
    }
}

export default connect(null , actions)(CompanyList)