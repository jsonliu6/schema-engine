import React from "react";
import {Input as NextInput} from '@alifd/next';


export default function Input({value, onChange, props}) {

	const innerOnChange = value => {
		onChange(value)
	}

	return (
		<>
			<NextInput
				{...props}
				value={value || props.defaultValue || ""}
				onChange={(value) => innerOnChange(value)}
			/>
		</>
	);
}
