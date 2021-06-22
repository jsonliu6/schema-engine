import React from "react";
import {Checkbox as NextCheckbox} from '@alifd/next';

export default function Checkbox({data, onChange, text, props}) {

	const innerOnChange = (value) => {
		console.log('innerOnChange', value)
		onChange(value);
	}

	// console.log('---1', data)
	// console.log('---2', text)
	// console.log('---3', props)

	return (
		<NextCheckbox
			defaultChecked={props.value || false}
			onChange={(value) => innerOnChange(value)}
			{...props}
		>{text}</NextCheckbox>
	);
}
