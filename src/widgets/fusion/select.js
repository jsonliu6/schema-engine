import React from "react";
import {Select as NextSelect} from '@alifd/next';

export default function Select({value, onChange, props}) {

	const innerOnChange = value => {
		onChange(value)
	}

	return (
		<NextSelect
			{...props}
			value={value || ""}
			onChange={(value) => innerOnChange(value)}
		>
			<option value={1}>保密</option>
			<option value={2}>雄性</option>
			<option value={3}>雌性</option>
		</NextSelect>
	);
}
