import { Button } from '@mui/material';

const Footer = ({ config }) => {
	const { buttons = [] } = config || {};

	return buttons.map(({ label }) => (
		<Button sx={{ m: 1 }} variant="contained" color="primary" key={label}>
			{label}
		</Button>
	));
};

export default Footer;
