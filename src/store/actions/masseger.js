export const ADD_MASSAGE = "ADD-MASSAGE";
export const UPDATE_MASSAGE = "UPDATE-MASSAGE-TEXT";

export function addMassage () {
    return {type: ADD_MASSAGE};
}
export function updateMassageText (changedMassageText) {
    return {type: UPDATE_MASSAGE, changedMassageText};
}

