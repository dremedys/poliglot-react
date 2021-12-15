import React, {FC} from "react";
import {useAppSelector} from "../../store/hooks";
import {GIVEN_TIME_TO_PLAY} from "../../constans";

const arr = new Array(GIVEN_TIME_TO_PLAY).fill(0)

export const Timer:FC = () => {
    const {leftTime} =  useAppSelector(state => state.game)

    return (
        <div style={{
            background:'rgba(53, 55, 64,0.7)',
            display:'flex',
            justifyContent:'space-between',
            padding:2,
            borderRadius:3,
            margin:'0 auto',
            boxShadow:'0px 4px 16px rgba(0,0,250,0.3)',
            width:'50%'
        }}>
            {
                arr.map((ooo,index) => {
                    return <svg
                        key={index}
                        opacity={index < leftTime? 1 : 0}
                        fill={ leftTime >= GIVEN_TIME_TO_PLAY/2? 'orange' : 'red'}
                        width={`${100/GIVEN_TIME_TO_PLAY}%`}
                        height={7}
                        viewBox="0 0 20 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect x="0" width="17" height="10" rx="3" />
                    </svg>
                })
            }
        </div>
    )
}
