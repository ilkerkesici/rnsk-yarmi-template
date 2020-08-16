  
import React, { useState } from 'react';
import { View, TouchableOpacity, Animated, Platform, Easing } from 'react-native';
import { styles as func_style } from './Tabbar.style';
import { FriendsIcon, PlusIcon, SettingIcon, HomeIcon } from '../icons';
import {  Color } from 'styles/Colors';
import { Actions } from 'react-native-router-flux';

const ANIMATION_DURATION = Platform.OS == 'ios' ? 200 : 200;

interface ITabbarProps{ 
    screenOnChange?: (type: EScreenType) => void
 }

export enum EScreenType {
    HOME,
    CONTACT,
    SETTING,
    PLUS
}

export const Tabbar = (props: ITabbarProps) => {
    const [screen, setScreen] = useState<EScreenType>(EScreenType.HOME);
    const [isAnimated, setAnimate] = useState<boolean>(true);
    const [animation, setAnimation] = useState<any>(new Animated.Value(0.01));
    const styles = func_style();
    const animatedStyles = {
        transform: [
            {
                scale: animation
            }
        ],
    };
    
    const onPressSetting = () => {
        if(screen == EScreenType.HOME){
            animation.setValue(0.01);
            setAnimate(true);
            setScreen(EScreenType.SETTING);
            setTimeout(() => setAnimate(false), ANIMATION_DURATION);
        }
        else setScreen(EScreenType.SETTING);
        //props.screenOnChange(EScreenType.SETTING);
        Actions['tab3']();
    }

    const onPressHome = () => {
        if(screen == EScreenType.HOME){
            //props.screenOnChange(EScreenType.PLUS);
            return;
        }
        animation.setValue(0.01);
        setScreen(EScreenType.HOME);
        setAnimate(true);
        setTimeout(() => setAnimate(false), ANIMATION_DURATION);
        //props.screenOnChange(EScreenType.HOME);
        Actions['tab2']();
    }

    const onPressContact = () => {
        if(screen == EScreenType.HOME){
            animation.setValue(0.01);
            setAnimate(true);
            setScreen(EScreenType.CONTACT);
            setTimeout(() => setAnimate(false), ANIMATION_DURATION);
        }
        else setScreen(EScreenType.CONTACT);
        //props.screenOnChange(EScreenType.CONTACT);
        Actions['tab1']();
    }

    const startAnimation = () => {
        Animated.timing(animation, {
            duration: ANIMATION_DURATION,
            toValue: 1,
            useNativeDriver: false,
        }).start();
      }
    if(isAnimated)
        startAnimation();
    return (
        <View style={styles.tabContainer}>
                <TouchableOpacity onPress={onPressContact} style={styles.iconsWrapper}>
                    <FriendsIcon size={30} color={screen == EScreenType.CONTACT ? Color.primary : Color.black_color} />
                </TouchableOpacity>
                <View style={styles.iconsWrapper}>
                    <TouchableOpacity style={styles.homeIcon} onPress={onPressHome}>
                    <Animated.View style={[styles.animated, animatedStyles]}>
                            {screen == EScreenType.HOME ? 
                                <PlusIcon size={50} color={Color.white} />
                                :
                                <HomeIcon size={40} color={Color.white} />
                            }
                    </Animated.View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={onPressSetting} style={styles.iconsWrapper}>
                    <SettingIcon size={30} color={screen == EScreenType.SETTING ? Color.primary : Color.black_color} />
                </TouchableOpacity>
            </View>
    );
}


