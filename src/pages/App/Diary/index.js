import { useState, useEffect } from "react";

import useDiary from "../../../hooks/api/useDiary";

export default function Diary() {
    const { diary } = useDiary();

    return (
        <>
        { diary ? (
            <RenderDiary diary={diary}/>
        ) : (
            'Loading...'
            )
        }
        </>
    )
}

function RenderDiary(props) {
    const { diary } = props;

    return (
        <>
            {diary[0] ? (<div>
                {diary?.map(diaryLog => {
                    return (
                        <>
                            <h1>{diaryLog.Date}</h1>
                        </>
                    )    
                })}
            </div>
            ) : (
                'There are no diary logs yet'
            )
        }
        </>
    )
}
