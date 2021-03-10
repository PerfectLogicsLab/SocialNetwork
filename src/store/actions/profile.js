export const ADD_POST = 'ADD-POST';
export const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export function addPost() {
    return {type: ADD_POST};
}
export function updatePostText (changedPostText) {
    return {type: UPDATE_POST_TEXT, changedPostText};
}