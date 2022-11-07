import { createContext, useContext, useState } from 'react';

const ConfigContext = createContext(null);

export const ConfigProvider = ({ children }) => {
	const [config, setConfig] = useState({});
	return <ConfigContext.Provider value={{ config, setConfig }}>{children}</ConfigContext.Provider>;
};

export const useConfigContext = () => useContext(ConfigContext);
