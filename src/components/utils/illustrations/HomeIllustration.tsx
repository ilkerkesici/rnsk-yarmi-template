import React from 'react';
import { Image } from 'react-native';
import { styles } from './Illustration.style';
import { images } from 'assets';

export const HomeIllustration = () => {
    return(
        <Image style={styles.image} resizeMode={'contain'} source={images.emptyMeet} />
    );
}

