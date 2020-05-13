import React from 'react';
import { View, Text } from 'react-native';


const Members = ({ members }) => {

    return (
        <View>
            {members.map(member => (
                <Text key={member.id} testID="memberDetail">{member.name}</Text>
            ))}
        </View>
    )
}


export default Members;