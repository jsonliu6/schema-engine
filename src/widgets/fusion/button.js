import React from "react";
import {Button as NextButton} from '@alifd/next';


export default function Button({data, text, onChange, props}) {

	const _style = {
		marginRight: 8
	}

	const innerOnClick = evt => {
		onChange(data);
	}

	return (
		<>
			<NextButton
				style={_style}
				{...props}
				onClick={x => innerOnClick(x)}
			>{text}</NextButton>
		</>
	);
}
