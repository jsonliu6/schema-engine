import React from "react";
import { DatePicker as NextDatePicker } from '@alifd/next';

export default function DatePicker({value, onChange, label, props}) {

	const innerOnChange = (value) => {
		if (props.showTime) {
			onChange(value.format('YYYY-MM-DD hh:mm:ss'));
			return;
		}
		onChange(value.format('YYYY-MM-DD'));
	}

	return (
		<NextDatePicker
			{...props}
			value={ value }
			onChange={(value) => innerOnChange(value)}
		/>
	);
}
