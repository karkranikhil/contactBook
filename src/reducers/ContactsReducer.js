import contacts from './contacts.json'

const initialState={
    contacts,
    detailView:false,
    contactSelected:null
}
export default (state = initialState, action)=>{
    console.log('action', action.selectId)
    switch(action.type){
        case'SELECTED_CONTACT':
        return {...state, detailView:true, contactSelected:action.selectId}
        
        case'NONE_SELECTED':
        return {...state, detailView:false, contactSelected:null}
        
        default:
        return state
    }
}