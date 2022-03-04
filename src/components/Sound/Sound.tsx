import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { select } from "../../store/selector";
import { setSound } from "../../store/view/view.actions";

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
`

const Sound = () => {

    const dispatch = useDispatch();

    const sound = useSelector(select.view.sound)

    const handleClick = () => {
        dispatch(setSound(!sound));
    }

    return (
        <Wrapper>
            <button className="ui-btn" onClick={handleClick}>
                {sound ? "Выключить звук" : "Вкючить звук"}
            </button>
            <audio 
                loop={true}
                autoPlay={true}
                >
                <source 
                    type="audio/mp3"
                    src="https://firebasestorage.googleapis.com/v0/b/su-10-ee191.appspot.com/o/guitar.mp3?alt=media&token=562b024c-d0e5-4e1e-b434-2075e1fa62f2">
                </source>
            </audio>
        </Wrapper>
    )
};

export default Sound;