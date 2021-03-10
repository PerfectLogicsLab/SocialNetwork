import * as actions from '../actions/masseger'

const initialState = {
    dialog: [],
    chatItem: [],
    newMassageText: 'New massage.',
}

const messengerReducer = (state= initialState, action) => {
    
    switch (action.type) {
        
        case actions.ADD_MASSAGE :
            state.chatItem.push(
                {
                    content: state.newMassageText,
                    who: 'My',
                }
            );
            state.newMassageText = '';
            return state
            
        case actions.UPDATE_MASSAGE :
            state.newMassageText = action.changedMassageText;
            return state
            
        default:
            return state
    }
};

export default messengerReducer;