  
import React from 'react';
import { View } from 'react-native';
import { styles } from './HomeSkeleton.styles';
import { HomeSkeletonCard } from '../home_card';
import { Line } from '../line';

interface IHomeSkeletonState{ }
interface IHomeSkeletonProps{ }

export const HomeSkeleton = (props: IHomeSkeletonProps) => {

    return (
        <View style={styles.container}>
            <Line />
            <HomeSkeletonCard />
            <HomeSkeletonCard />
            <HomeSkeletonCard />
            <HomeSkeletonCard />
        </View>
    );
}


