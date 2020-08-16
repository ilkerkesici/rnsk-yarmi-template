import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles as func_style } from './HomeCard.styles';
import GeneralSwipable from '../swipable';
import { getLocalMonthOfDate, getTimeAsStringOfDate } from 'helpers/Utils';
import { CardTab } from 'components';
import { IHomeData } from 'interfaces';



interface IHomeCardProps{ 
    data: IHomeData,
    onPress: (data: IHomeData) => void
 }
// props.onPress(props.data)
export const HomeCardAndroid = (props: IHomeCardProps) => {
    const styles = func_style();
    return (
        <GeneralSwipable
            leftContent={<LeftContent month={getLocalMonthOfDate(props.data.Date)} time={getTimeAsStringOfDate(props.data.Date)} date={props.data.Date.getDate()}  />}
            
        >
        <TouchableOpacity onPress={() => props.onPress(props.data)} activeOpacity={1}>
        <View style={styles.container}>
            <View style={styles.lineContainer}>
                <View style={styles.shortLine} />
                <View style={styles.ball}>
                </View>
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
        </GeneralSwipable>
    );
}

const LeftContent = (props: ILeftContent) => {
    const styles = func_style();
    return(
        <View style={styles.leftAction}>
            <View style={styles.actionView}>
                <Text style={styles.date}>
                    {props.date}
                </Text>
                <Text style={styles.month}>
                    {props.month}
                </Text>
                <Text style={styles.time}>
                    {props.time}
                </Text>
            </View>
        </View>
    );
}

interface ILeftContent{
    month: string,
    time: string,
    date: number
}

