import React from "react";
import {Checkbox as NextCheckbox} from '@alifd/next';


// 兼容单个checkbox和 checkboxes 组合
export default function Checkbox({onChange, value, text, props, enumArray}) {

	if (enumArray && enumArray.length) {
		return <NextCheckbox.Group dataSource={enumArray} value={value} onChange={onChange} />
	}

	return (
		<NextCheckbox
			{...props}
			checked={value}
			onChange={onChange}
		>{text}</NextCheckbox>
	);
}
