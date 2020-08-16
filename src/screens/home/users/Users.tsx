  
import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './Users.styles';
import { Header } from '../../../components';

interface IUsersState{ }
interface IUsersProps{ }

export const Users = (props: IUsersProps) => {
    const [state, setState] = useState<IUsersState>({ });

    return (
        <View style={styles.container}>
            <Header 
                title="Users"
                back
            />
        </View>
    );
}


