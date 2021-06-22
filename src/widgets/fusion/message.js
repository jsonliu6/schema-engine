import React from "react";
import {Message as NextMessage} from '@alifd/next';


export default function Message({value, onChange, props}) {

	const getHtml = (children) => {
		if (/<[^>]*>/.test(children)) {
			return <div dangerouslySetInnerHTML={{__html: children}}></div>
		}
		return children;
	}

	return (
		<>
			<NextMessage
				{...props}
				title={value || props.defaultValue || ""}
			>
				{ getHtml(props.children)}
			</NextMessage>
		</>
	);
}
