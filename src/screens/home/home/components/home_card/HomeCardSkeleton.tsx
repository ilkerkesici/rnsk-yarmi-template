import React from 'react';
import { View, Text } from 'react-native';
import { styles as func_style } from './HomeCard.styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const HomeCardSkeleton = () => {
    const styles = func_style();
    return (
        <View>
            <View>
                <View style={styles.skeletonContainer}>
                    <View style={styles.lineContainer}>
                        <View style={styles.shortLine} />
                        <View style={styles.ball} />
                        <View style={styles.longLine} />
                    </View>
                    <View style={styles.cardMainContainer}>
                        <View style={[styles.cardContainer, styles.skeletonCard]}>
                            <SkeletonPlaceholder>
                                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" >
                                    <SkeletonPlaceholder.Item
                                        width={styles.avater.width}
                                        height={styles.avater.height}
                                        borderRadius={styles.avater.borderRadius}
                                    />
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
                                <View style={styles.tabDivider} />
                                <SkeletonPlaceholder.Item
                                    width="100%"
                                    height={16}
                                    borderRadius={6}
                                />
                                <View style={styles.skeletonDivider} />
                                <SkeletonPlaceholder.Item
                                    width="100%"
                                    height={16}
                                    borderRadius={6}
                                />
                                <View style={styles.skeletonDivider} />
                                <SkeletonPlaceholder.Item
                                    width="50%"
                                    height={16}
                                    borderRadius={6}
                                />
                            </SkeletonPlaceholder>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}