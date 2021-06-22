import React, { useState } from "react";
import ReactDOM from "react-dom";
import JSONSchema from "./json-schema";
import widgets from "./widgets";
import Schema from "./schema-engine";

import '@alifd/next/dist/next.css';

const rootElement = document.getElementById("root");

ReactDOM.render(<App />,
	rootElement
);

function App() {
	const [formData, setFormData] = useState();

	const onChange = (values) => {
		setFormData(values);
	};

	return (
		<div className="App">
			<Schema
				widgets={widgets}
				schema={JSONSchema}
				formData={formData}
				onChange={onChange}
			>
				<Schema.Form />
			</Schema>
		</div>
	);
}
