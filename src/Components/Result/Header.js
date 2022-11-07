import { Typography } from '@mui/material';

const Header = ({ config }) => {
	const { label } = config || {};
	return (
		<Typography variant="h5" component="h5" gutterBottom>
			{label}
		</Typography>
	);
};

export default Header;
