import React from 'react';
import s from './messenger.module.css';
import {Dialog} from "./dialog";
import {ChatItem} from "./chatItem";
import {addMassage, updateMassageText} from "../../../store/actions/masseger";

const Messenger = (props) => {

    let i = 0;

    let dialog = props.state.dialog.map(obj =>
        <Dialog id={obj.id}
                name={obj.name}
                key={obj.id}/>);

    let items = props.state.chatItem.map(obj =>
        <ChatItem content={obj.content}
                  who={obj.who}
                  key={i++}/>);

    const changeMassageText = (e) => {
        props.dispatch(updateMassageText(e.target.value));
    }

    const send = () => {
        props.dispatch(addMassage());
    };

    return (
        <div className={s.messenger}>
            <div className={s.dialogsWrapper}>
                <div className={s.dialogs}>
                    <div className={s.find}>
                        <input type="text" className={s.text} placeholder="find..."/>
                    </div>
                    {dialog}
                </div>
            </div>
            <div className={s.history}>
                <div className={s.chatHeader}>header</div>
                <div className={s.chatBody}>
                    {items}
                </div>
                <div className={s.chatFooter}>
                    <input type="text" onChange={changeMassageText} value={props.state.newMassageText} />
                    <button onClick={send}>click</button>
                    <a href="/">icon</a>
                    <a href="/">icon</a>
                    <a href="/">icon</a>
                </div>
            </div>
        </div>
    )
};

export {Messenger};