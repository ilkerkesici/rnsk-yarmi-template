
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Platform } from 'react-native';
import { styles as func_style } from './Home.styles';
import { Header, HomeIllustration, SearchInput, BellIcon, Spinner } from '../../../components';
import { store, IRootState } from '../../../store';
import { HomeCard, HomeInfoModal, Line, HomeSkeleton } from './components';
import { Color } from '../../../styles/Colors';
import { isEndReached, getData, searchStringOnChange } from './Home.action';
import { useSelector } from 'react-redux';
import { IHomeData } from '../../../interfaces';

interface IHomeState {
    info_modal_visible: boolean,
    info_data: IHomeData,
}

const INITIALHOME_STATE: IHomeData = {
    Id: 0,
    MeetType: 'INITIAL',
    MeetWith: {
        Id: 0,
        Fullname: 'Initial Data',
        ProifleImage: 'init'
    },
    Title: 'No Data',
    Content: 'There is no information.',
    Date: new Date(),
    PublisherId: 0
}


export const Home = () => {
    useEffect(() => {
        getData('', 0, true);
      });
      const styles = func_style();
    return (
        <View style={styles.container}>
            <Header title={'Uyar mı?'}
                rightIcon={<BellIcon size={30} color={Color.white} num_of_data={0} />}
            />
            <Line />
            <EmptyData />
            <ScrollContent />
        </View>
    );
}

/**
 * Determine Home content
 * Loading , No data or list of data
 */
const ScrollContent = () => {
    const [state, setState] = useState<IHomeState>({ info_modal_visible: false, info_data: INITIALHOME_STATE });
    const data: IHomeData[] = useSelector<IRootState, any>((r_state: IRootState) => r_state.HomeResponse.data);
    const loading = useSelector<IRootState, any>((r_state: IRootState) => r_state.HomeResponse.loading);
    const styles = func_style();
    if (!loading && data && data.length > 0)
        return (
            <ScrollView
                style={styles.scroolView}
                onScroll={({ nativeEvent }) => {
                    if (isEndReached(nativeEvent)) {
                        //console.log('On reach end');   // On reach end
                    }
                }}
                scrollEventThrottle={500}
            >
                {Platform.OS == 'ios'  ? <View style={styles.primaryBackground} /> : null}
                <Search />
                
            <View style={styles.dataContainer}>
                <HomeInfoModal
                    close={() => setState({ info_data: INITIALHOME_STATE, info_modal_visible: false })}
                    data={state.info_data}
                    visible={state.info_modal_visible}
                />
                
                {
                    data.map((res, i) => <HomeCard
                        onPress={(data: IHomeData) => setState({ info_data: data, info_modal_visible: true })}
                        data={res}
                        key={i} />
                    )
                }
            </View>
            </ScrollView>
        )
    return (<></>)
}

/**
 * Render the emyt illustration
 */
const EmptyData = () => {
    const data = useSelector<IRootState, any>((r_state: IRootState) => r_state.HomeResponse.data);
    const loading = useSelector<IRootState, any>((r_state: IRootState) => r_state.HomeResponse.loading);
    const [language, setLanguage] = useState(store.getState().AppLanguageResponse.currentLanguage.HOME);
    const styles = func_style();
    if(loading){
        return (
            <>
                <Search />
                {/* <View style={styles.emptyContainer}>
                    <Spinner color={Color.primary} />
                </View>  */}
                <HomeSkeleton />
            </>
        );
    }
    else if (!loading && data && data.length == 0)
        return (
            <>
                <Search />
                <View style={styles.emptyContainer}>
                    <HomeIllustration />
                    <Text style={styles.empty_text}> {language.EMPTY_DATA} </Text>
                </View>
            </>
        );
    else return <></>
}

const Search = () => {
    const [language, setLanguage] = useState(store.getState().AppLanguageResponse.currentLanguage.HOME);
    const search_input = useSelector<IRootState, any>((r_state: IRootState) => r_state.HomeResponse.search);
    const styles = func_style();
    return(
        <View style={styles.header}>
            <SearchInput onChangeText={searchStringOnChange} value={search_input} placeholder={language.SEARCH} />
        </View>
    );
}


/**
 * Line of the list
 */
// const Line = () => {
//     const styles = func_style();
//     return (
//         <View style={styles.lineContainer}>
//             <View style={styles.line} />
//         </View>
//     );
// }












