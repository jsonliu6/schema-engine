import React from "react";
import T from "prop-types";
import EventBus from "eventbusjs";

/**
 * 表达式中变量定义
 *
 * $ref 代表当前对象
 * $schema 代表schema对象本身
 * $formData 代表业务数据
 */

const EXPRESSION_REG = /\{\{[^}]+\}\}/g;
const VARIABLE_REG = /\{\{([^}]+)\}\}/gi;

/* eslint-disable */
function snadbox(expression) {
	return new Function("ctx", "with(ctx) { return " + expression + "}");
}

let expressionMap = {};

function widgetHOC(Widget) {
	return class HOC extends React.Component {
		static propTypes = {
			type: T.oneOf(["object", "array", "string", "number", "boolean"])
				.isRequired,
			label: T.string,
			widget: T.string,
			help: T.string,
			description: T.string,
			props: T.object,
			rules: T.object,
			message: T.object,
			hidden: T.any,

			$ref: T.object,
			$schema: T.object,
			$formData: T.object,
		};

		static defaultProps = {
			help: null,
			label: null,
			widget: null,
			hidden: false,
			description: null,
			props: {},
			rules: {},
			message: {},

			$ref: {},
			$schema: {},
			$formData: {},
		};

		constructor(props) {
			super(props);

			if (props.name) {
				const { field, name, $formData } = props;
				const { onChange } = field.init(name, {
					initValue: $formData[name],
				});

				this.onChange = (v) => {
					onChange(v);
					this.relationUpdate();
				};

				EventBus.addEventListener(name, this.update);
			}
		}

		update = () => {
			this.forceUpdate();
		};

		relationUpdate = () => {
			setTimeout(() => {
				Object.keys(expressionMap).forEach((key) => {
					if (key !== this.props.name) EventBus.dispatch(key)
				});
			}, 30);
		}

		shouldComponentUpdate() {
			return false;
		}

		transformVariableInValue(props, ctx) {
			return Object.keys(props).reduce((acc, key) => {
				const value = props[key];

				if (
					!value ||
					key === "children" ||
					["enumArray", "dataSource"].includes(key)
				) {
					acc[key] = value;
				} else if (typeof value === "object") {
					acc[key] = this.transformVariableInValue(value, ctx);
				} else if (EXPRESSION_REG.test(value)) {
					if (props.name) expressionMap[props.name] = true;
					acc[key] = value.replace(VARIABLE_REG, (_, $1) => {
						return snadbox($1)(ctx);
					});
				} else {
					acc[key] = value;
				}
				return acc;
			}, {});
		}

		render() {
			const { field, $ref, $schema, $formData, ...props } = this.props;
			const _props = this.transformVariableInValue(props, {
				$schema,
				$formData,
				$ref,
			});

			if (_props.hidden === "true" || _props.hidden === true) {
				return null;
			}

			return (
				<Widget
					{..._props}
					value={field.getValue(props.name)}
					onChange={this.onChange}
				/>
			);
		}
	};
}

export default widgetHOC;
