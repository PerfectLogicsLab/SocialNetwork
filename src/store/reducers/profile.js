import * as actions from '../actions/profile'

const initialState = {
    posts: [],
    newPostText: 'New post.',
}

const profileReducer = (state= initialState, action) => {

    switch (action.type) {

        case actions.ADD_POST :
            state.posts.push(
                {
                    textContent: state.newPostText,
                    likedCount: 0,
                    commentCount: 0,
                    sharedCount: 0,
                }
            );
            state.newPostText = '';
            return state;

        case actions.UPDATE_POST_TEXT :
            state.newPostText = action.changedPostText;
            return state;

        default:
            return state;

    }
};

export default profileReducer;