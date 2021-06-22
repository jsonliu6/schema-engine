import widgetHOC from "../../schema-engine/widget-hoc";

import Input from "./input";
import Select from "./select";
import Checkbox from "./checkbox";
import Row from "./row";
import DatePicker from "./datepicker";
import Node from "./node";
import Button from "./button";
import Buttons from "./buttons";
import Card from "./card";
import Notice from "./notice";
import Message from "./message";


export default {
	Input: widgetHOC(Input),
	Row: widgetHOC(Row),
	DatePicker: widgetHOC(DatePicker),
	Select: widgetHOC(Select),
	Checkbox: widgetHOC(Checkbox),
	Node: widgetHOC(Node),
	Button: widgetHOC(Button),
	Buttons: widgetHOC(Buttons),
	Notice: widgetHOC(Notice),
	Message: widgetHOC(Message),
	Card: widgetHOC(Card)
};
