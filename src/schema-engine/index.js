import React, { useContext } from "react";
import Field from "./field";
import FormWrapper from "./wrapper";
import EventBus from "eventbusjs";

const Provider = React.createContext();

export default class Schema extends React.Component {
	static Form = SchemaForm;

	constructor(props) {
		super(props);

		this.field = new Field(this, {
			onChange: this.onChange,
		});
	}

	onChange = (name, value, values) => {
		console.log(name, parseValues(values));
		EventBus.dispatch(name);

		this.props.onChange && this.props.onChange(values);
	};

	render() {
		const {
			children,
			schema: $schema,
			widgets,
			formData: $formData,
		} = this.props;

		return (
			<Provider.Provider
				value={{ field: this.field, widgets, $schema, $formData }}
			>
				{children}
			</Provider.Provider>
		);
	}
}

function SchemaForm() {
	const { field, widgets, $schema, $formData } = useContext(Provider);

	return schemaForEach($schema, widgets, field, { $schema, $formData });
}

function schemaForEach(schema, widgets, field, ctx) {
	const { widget, properties = {}, ...others } = schema;
	const Widget = widgets[widget] || FormWrapper;
	const props = Object.assign({}, ctx, others, { $ref: schema, field });

	if (!Object.keys(properties).length) {
		return <Widget {...props} />;
	}

	return (
		<Widget {...props}>
			{transformProperties(properties, schema.name).map((_schema) =>
				schemaForEach(_schema, widgets, field, {
					...ctx,
					$ref: _schema,
				})
			)}
		</Widget>
	);
}

function transformProperties(properties, parentKey = "") {
	return Object.keys(properties)
		.map((key) => {
			if (/^NOT_NAME_FILED/.test(key)) {
				return properties[key];
			}
			return {
				...properties[key],
				name: [parentKey, key].filter((v) => v).join("."),
			};
		})
		.sort((prev, next) => prev.order - next.order);
}

function parseValues(values) {
	return Object.keys(values).reduce((acc, key) => {
		if (/\w+\.\w+/i.test(key)) {
			let keys = key.split(".");
			let cKey = keys.pop();
			let [_key, ..._keys] = keys;

			acc[_key] = acc[_key] || {};

			let current = acc[_key];

			while (_keys.length) {
				const _k = _keys.shift();

				current[_k] = current[_k] || {};
				current = current[_k];
			}

			current[cKey] = values[key];
		} else {
			acc[key] = values[key];
		}

		return acc;
	}, {});
}
