import React from 'react';
import { View } from 'react-native';
import { styles as func_style  } from './UserListSkeleton.styles';
import { SkeletonListItem } from '../list_item';

const FAKE_NUM = 10

export const UserListSkeleton = () => {
    const styles = func_style();
    let newArray = new Array(FAKE_NUM);
    for(let i = 0; i <  FAKE_NUM ; i++){
        newArray[i] = i;
    }
    return(
        <View style={styles.container} >
            {
                newArray.map((res, i ) => 
                <SkeletonListItem key={i} avatar={true} avatarSize={40} />
                )
            }
        </View>
    );
}