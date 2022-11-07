import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';

export const NumberField = (props) => <TextField type="number" {...props} />;

export const TextAreaField = (props) => <TextField multiline minRows={2} {...props} />;

export const DateField = (props) => <TextField type="date" {...props} />;

export const CheckboxField = ({ label, ...restProps }) => (
	<FormControlLabel control={<Checkbox {...restProps} />} label={label} labelPlacement="start" />
);

export const RadioGroupField = ({ label, options = [] }) => (
	<FormControl component="fieldset">
		<FormLabel component="legend">{label}</FormLabel>
		<RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
			{options.map(({ label, value }) => (
				<FormControlLabel key={value} value={value} control={<Radio />} label={label} labelPlacement="start" />
			))}
		</RadioGroup>
	</FormControl>
);
