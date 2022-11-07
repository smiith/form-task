import { TabContext, TabList } from '@mui/lab';
import { Tab } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState } from 'react';

const Tabs = ({ tabs = [], defaultTabID }) => {
	const [activeTab, setActiveTab] = useState(defaultTabID);

	const handleTabChange = (event, newValue) => {
		setActiveTab(newValue);
	};

	return (
		<TabContext value={activeTab}>
			<TabList value={activeTab} onChange={handleTabChange} variant="scrollable" scrollButtons={false}>
				{tabs.map(({ label, id }) => (
					<Tab label={label} key={id} value={id} />
				))}
			</TabList>
			{tabs.map(({ tab, id }) => (
				<TabPanel key={id} value={id}>
					{tab}
				</TabPanel>
			))}
		</TabContext>
	);
};

export default Tabs;
