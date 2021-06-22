import React from "react";
import {Button as NextButton} from '@alifd/next';

const _style = {
	marginRight: 8
}

export default function Buttons({name, onChange, props, value, enumArray}) {

	if (enumArray && enumArray.length) {
		const _value = [...(Array.isArray(value) ? value : [value])].filter(v => v);
		return enumArray.map((item) => {
			const checked = _value.includes(item.value);

			return (
				<NextButton
					key={`${name}_${item.value}`}
					style={_style}
					{...props}
					type={checked ? 'primary' : 'normal'}
					onClick={() => {
						onChange(_value.includes(item.value) ? _value.filter(v => v !== item.value) : [..._value, item.value]);
					}}
				>{item.label}</NextButton>
			)
		})
	}

	return (
		<NextButton
			style={_style}
			{...props}
			type={value ? 'primary' : 'normal'}
			onClick={_ => onChange(true)}
		>{text}</NextButton>
	);
}
