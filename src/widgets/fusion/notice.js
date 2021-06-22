import React from "react";

export default function Notice({label, children, props}) {
	const style = {
		padding: props.padding,
		border: `1px solid ${props.borderColor}`,
		boxSizing: 'border-box',
		width: props.width ? props.width : '100%',
		lineHeight: '20px',
		borderRadius: 3
	}
	return <div style={style}>
		<span dangerouslySetInnerHTML={{__html: props.children}}></span> ;
	</div>
}
