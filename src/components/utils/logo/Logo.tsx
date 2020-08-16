import React from 'react';
import { Image } from 'react-native';
import {styles} from './Logo.style';
import { images } from 'assets';

export const Logo = (props: ILogo) => {
    return (
        <Image style={[styles.image, props.style]} source={images.logo} />
    );
}

interface ILogo {
    style?: any
}