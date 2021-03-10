const initialState = {

    profilePage: {
        posts: [{
            textContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolor eum expedita id, ipsa magni modi molestias optio quam qui saepe veniam voluptatibus voluptatum. Commodi dolorem illo perspiciatis veniam voluptatibus.',
            likedCount: 8, commentCount: 15, sharedCount: 24
        },
            {
                textContent: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
                likedCount: 2, commentCount: 3, sharedCount: 12
            },],

        newPostText: 'New post.',
    },

    messengerPage: {
        dialog: [{name: 'first', id: '1'},
            {name: 'two', id: '2'},],

        chatItem: [{content: 'Hi.', who: 'My'},
            {content: 'Hi!', who: 'noMy'},
            {content: 'I am ok.', who: 'My'}],

        newMassageText: 'New massage.',
    },
};

export default initialState;