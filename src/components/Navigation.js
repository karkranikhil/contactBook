import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import ContactsList from './ContactsList'
import CompanyList from './CompanyList'
import AddContact from './AddContact'

const TabNavigator = createBottomTabNavigator({
    Contacts:ContactsList,
    Add:AddContact,
    Company:CompanyList
},{
    initialRouteName:'Contacts',
    tabBarOptions:{
        activeTintColor:'white',
        inactiveTintColor:"#80cbc4",
        showLabel:false,
        showIcon:true,
        style:{
            backgroundColor:'#26a69a'
        }
    }
}
)
export default createAppContainer(TabNavigator)