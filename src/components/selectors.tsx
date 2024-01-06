import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Typography } from "@mui/material";
import './selectors.css';


type SelectorType = 'Header' | 'Text' | 'Footer';

interface Props {
	onTextChange: (text: string) => void;
	onFontSizeChange: (number: string) => void;
	type: SelectorType;
}

export const Selectors: React.FC<Props> = (props) => {
	const [text, setText] = React.useState<string>('');
	const [fontSize, setFontSize] = React.useState<string>('');


	const handleTextChange = React.useCallback(
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setText(event.target.value);
			props.onTextChange(event.target.value);
		},
		[setText, props.onTextChange]
	);

	const handleFontSizeChange = React.useCallback(
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setFontSize(event.target.value);
			props.onFontSizeChange(event.target.value);
		},
		[setFontSize, props.onFontSizeChange]
	);

	const fontAutocompleteOptions = React.useMemo(
		() => {
			return [
				'Times New Roman',
				'Arial',
				'Verdana',
				'Comic Sans'
			];
		},
		[]
	);

	return (
		<div>
			<Typography variant='h6' fontFamily='Arial' className="header">
				{props.type} selectors
			</Typography>
			<TextField
							className="field"
				label={`${props.type} content`}
				value={text}
				onChange={handleTextChange}
				defaultValue={`${props.type} content goes here`}
				sx={{padding: '10px 5px', marginLeft: '15px'}}
			/>
			<Autocomplete
				options={fontAutocompleteOptions}
				renderInput={(params) => <TextField {...params} label="Font" />}
				className="field"
			/>
			<TextField
				label='Font size'
				value={fontSize}
				onChange={handleFontSizeChange}
				defaultValue={`${props.type} font size is set here`}
				sx={{padding: '10px 5px', marginLeft: '15px', width: '100px'}}
				className="field"
			/>
		</div>
	);
};
