import React from "react";

export default function Row({label, children, props}) {

	const style = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		width: '100%',
		minHeight: 28,
		margin: '8px 0 8px'
	}

	const styleLeft = {
		minWidth: '10%',
		alignItems: 'center',
		textAlign: 'right',
		display: 'flex',
		justifyContent: 'flex-end'
	}

	const getHtml = (label) => {
		if (typeof label == 'string') {
			if (/<[^>]*>/.test(label)) {
				return <div style={styleLeft}><span dangerouslySetInnerHTML={{__html: label}}></span></div> ;
			}
			return <div style={styleLeft}>{label}</div>
		}
		return null
	}

	return (
		<div style={style}>
			{
				getHtml(label)
			}
			<div>{children}</div>
		</div>
	);
}
