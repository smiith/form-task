import { Stack, TextField } from '@mui/material';
import React, { createElement } from 'react';
import { CheckboxField, DateField, NumberField, RadioGroupField, TextAreaField } from '../Library';
import { useConfigContext } from '../ConfigProvider';
import Header from './Header';
import Footer from './Footer';

const itemControls = {
	numberField: NumberField,
	textField: TextField,
	textArea: TextAreaField,
	checkBox: CheckboxField,
	dateField: DateField,
	radioGroup: RadioGroupField,
};

const renderItem = (item, index) => {
	const { type, label, options } = item;
	const itemControl = itemControls[type];
	return createElement(itemControl, { label, key: index, options });
};

const Result = () => {
	const { config } = useConfigContext();
	const { header, items = [], footer } = config;

	return (
		<>
			<Header config={header} />
			<Stack spacing={2}>{items.map(renderItem)}</Stack>
			<Footer config={footer} />
		</>
	);
};

export default Result;
