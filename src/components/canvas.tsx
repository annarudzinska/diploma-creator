import React from "react";
import { Paper } from "@mui/material";


interface Props {
    width?: number;
    height?: number;
    children: React.ReactNode;
    className?: string;
}

export const Canvas: React.FC<Props> = (props) => {

	return (
		<Paper elevation={5} sx={{width: `${props.width ?? 600}px` , height: `${props.height ?? 800}px`}} className={props.className}>
            {props.children}
        </Paper>
	);
};
