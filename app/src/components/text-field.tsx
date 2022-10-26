import React from "react";

interface Props {
    text: string;
    onTextChange: () => void;
    onBlur?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const TextField: React.FC<Props> = (props) => {
    return (
            <input
            type={'text'}
            value={props.text}
            onChange={props.onTextChange}
            >
            </input>
    )
}