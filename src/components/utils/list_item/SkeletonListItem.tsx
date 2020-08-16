import React from 'react';
import { styles as func_style } from './ListItem.style';
import { View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

interface ISkeletonItem{
    avatarSize?: number,
    avatar: boolean
}

export const SkeletonListItem = (props: ISkeletonItem) => {
    const styles = func_style();
    return (
        <View style={[styles.container, {margin: 5}]}>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item flexDirection="row">
                    {
                        props.avatar ? 
                        <SkeletonPlaceholder.Item 
                            width={props.avatarSize ? props.avatarSize : styles.avatar.width} 
                            height={props.avatarSize ? props.avatarSize :  styles.avatar.height} 
                            borderRadius={props.avatarSize ? props.avatarSize / 2 : styles.avatar.borderRadius} 
                        /> :
                        <></>
                    }
                    <SkeletonPlaceholder.Item
                        flex={1}
                        justifyContent={'center'}
                        marginLeft={12}>
                        <SkeletonPlaceholder.Item
                            width="100%"
                            height={20}
                            borderRadius={6}
                        />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
        </View>
    );
}