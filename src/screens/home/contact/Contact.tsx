
import React, { useState } from 'react';
import { View, Text, Platform, ScrollView } from 'react-native';
import { styles as func_style } from './Contact.styles';
import { Header, SearchInput, Spinner, HomeIllustration, ThreeDotIcon, CreateIcon, UserListSkeleton } from 'components';
import { store, IRootState } from '../../../store';
import { useSelector } from 'react-redux';
import { 
    searchStringOnChange, 
    androidMenuRefChanged, 
    openMenu, 
    onPressAddFriend,
    onPressCreateChannelItem,
    iosMenuRefChanged,
    redirectActionSheet 
    } from './Contact.action';
import { Color } from '../../../styles/Colors';
import { IContactDataProps } from '../../../interfaces';
import { isEndReached } from '../home/Home.action';
import { ContactRow, CreateChannel } from './components';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import ActionSheet from 'react-native-actionsheet'




export const Contact = () => {
    const [language] = useState(store.getState().AppLanguageResponse.currentLanguage.CONTACT);
    const styles = func_style();
    return (
        <View style={styles.container}>
            <Header
                title={language.TITLE}
                rightIcon={Platform.OS === 'android' ? <MenuAndroid /> : <MenuIOS />}
                onRightIconPress={openMenu}
            />
            <CreateChannel />
            <EmptyData />
            <ScrollContent />
        </View>
    );
}

/**
 * Search bar of 
 */
const Search = () => {
    const [language] = useState(store.getState().AppLanguageResponse.currentLanguage.HOME);
    const search_input = useSelector<IRootState, any>((r_state: IRootState) => r_state.ContactResponse.search);
    const styles = func_style();
    return (
        <View style={styles.header}>
            <SearchInput onChangeText={searchStringOnChange} value={search_input} placeholder={language.SEARCH} />
        </View>
    );
}


/**
 * Render the emyt illustration
 */
const EmptyData = () => {
    const data = useSelector<IRootState, any>((r_state: IRootState) => r_state.ContactResponse.data);
    const loading = useSelector<IRootState, any>((r_state: IRootState) => r_state.ContactResponse.loading);
    const [language] = useState(store.getState().AppLanguageResponse.currentLanguage.CONTACT);
    const styles = func_style();
    if (loading) {
        return (
            <>
                <Search />
                {/* <View style={styles.emptyContainer}>
                    <Spinner color={Color.primary} />
                    <UserListSkeleton />
                </View> */}
                <UserListSkeleton />
                
            </>
        );
    }
    else if (!loading && data && data.length == 0)
        return (
            <>
                <Search />
                <View style={styles.emptyContainer}>
                    <HomeIllustration />
                    <Text style={styles.empty_text}>{language.EMPTY_DATA}</Text>
                </View>
            </>
        );
    else return <></>
}

/**
 * Determine Home content
 * Loading , No data or list of data
 */
const ScrollContent = () => {
    const contacts: IContactDataProps[] = useSelector<IRootState, any>((r_state: IRootState) => r_state.ContactResponse.data);
    const loading = useSelector<IRootState, any>((r_state: IRootState) => r_state.ContactResponse.loading);
    const styles = func_style();
    if (!loading && contacts && contacts.length > 0)
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
                {Platform.OS == 'ios' ? <View style={styles.primaryBackground} /> : null}
                <Search />

                <View style={styles.dataContainer}>
                    {
                        contacts.map((res, i) => <ContactRow
                            data={res}
                            key={i}
                        />
                        )
                    }
                </View>
            </ScrollView>
        )
    return (<></>)
}

/**
 * Android Create Memu
 */
const MenuAndroid = () => {
    const [language] = useState(store.getState().AppLanguageResponse.currentLanguage.CONTACT);
    return (
        <Menu
            ref={(ref) => androidMenuRefChanged(ref)}
            button={<ThreeDotIcon size={30} color={Color.white} />}
        >
            <MenuItem onPress={onPressAddFriend}>{language.ADD_CONTACT}</MenuItem>
            <MenuDivider />
            <MenuItem onPress={onPressCreateChannelItem}>{language.CREATE_CHANNEL}</MenuItem>
        </Menu>
    );
}

/**
 * Menu for IOS
 */
const MenuIOS = () => {
    const [language] = useState(store.getState().AppLanguageResponse.currentLanguage.CONTACT);
    return(
        <>
        <CreateIcon size={26} color={Color.white} />
        <ActionSheet
          ref={o => iosMenuRefChanged(o)}
          title={language.ACTIONSHEET_TEXT}
          options={[language.ADD_CONTACT, language.CREATE_CHANNEL, language.CANCEL]}
          cancelButtonIndex={2}
          onPress={(index) => redirectActionSheet(index)}
        />
        </>
    );
}