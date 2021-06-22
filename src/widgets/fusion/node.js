import React from "react";

export default function Node({label, children, props}) {
	return <span dangerouslySetInnerHTML={{__html: props.children}}></span> ;
}
