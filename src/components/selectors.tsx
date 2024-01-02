import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
    onHeaderTextChange: (text: string) => void;
};

export const Selectors: React.FC<Props> = (props) => {
    const [headerText, setHeaderText] = React.useState<string>('');

    const handleHeadeTextChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setHeaderText(event.target.value);
            props.onHeaderTextChange(event.target.value)
        },
        [setHeaderText, props.onHeaderTextChange]
    );
    const autocompleteOptions = React.useMemo(
        () => {
            return [
                'Times New Roman',
                'Arial',
                'Verdana',
                'Comic Sans'
            ]
        },
        []
    );

    return (
        <div>
            <TextField
                label='Header text'
                value={headerText}
                onChange={handleHeadeTextChange}
                defaultValue='This is header'
            />
            <Autocomplete
                options={autocompleteOptions}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </div>
    )
}