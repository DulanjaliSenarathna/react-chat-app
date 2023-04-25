import { useContext } from 'react';
import {SettingsContext} from '../contexts/SettingsContext';

// ----------------------------------------------------------------------
// give access all the methods and properties that are drfine in SettingsContext
const useSettings = () => useContext(SettingsContext);

export default useSettings;
