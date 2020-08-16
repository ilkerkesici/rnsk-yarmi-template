import {HomeCardIOS} from './HomeCardIOS';
import {HomeCardAndroid} from './HomeCardAndroid';
import {HomeCardSkeleton} from './HomeCardSkeleton';
import { Platform } from 'react-native';
export const HomeCard  = Platform.OS === 'android' ? HomeCardAndroid : HomeCardIOS;

export const HomeSkeletonCard = HomeCardSkeleton;

