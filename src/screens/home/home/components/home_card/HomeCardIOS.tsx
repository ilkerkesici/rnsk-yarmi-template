  
import React from 'react';
import { View, Text } from 'react-native';
import { styles as func_style} from './HomeCard.styles';
import AppleStyleSwipeableRow from '../swipable';
import { getLocalMonthOfDate, getTimeAsStringOfDate } from 'helpers/Utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CardTab } from 'components';
import { IHomeData } from 'interfaces';


interface IHomeCardProps{ 
    data: IHomeData,
    onPress: (data: IHomeData) => void
 }

export const HomeCardIOS = (props: IHomeCardProps) => {
    const styles = func_style();
    return (
        <AppleStyleSwipeableRow data={{month: getLocalMonthOfDate(props.data.Date), date: props.data.Date.getDate(), time: getTimeAsStringOfDate(props.data.Date)}}>
        <TouchableOpacity activeOpacity={1} onPress={() =>props.onPress(props.data)}>
        <View style={styles.container}>
            <View style={styles.lineContainer}>
                <View style={styles.shortLine} />
                <View style={styles.ball} />
                <View style={styles.longLine} />
            </View>
            <View style={styles.cardMainContainer}>
                <View style={styles.cardContainer}>
                    <CardTab avatar={props.data.MeetWith.ProifleImage} title={props.data.MeetWith.Fullname} />
                    <View style={styles.tabDivider} />
                    <Text numberOfLines={5} style={styles.contentText}>{props.data.Content}</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity> 
        </AppleStyleSwipeableRow>
    );
}

