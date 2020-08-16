import AppleSwipable from './AppleSwipable';
import GeneralSwipable from './GeneralSwipable';
import { Platform } from 'react-native';

export default Platform.OS == 'ios' ? AppleSwipable : GeneralSwipable;