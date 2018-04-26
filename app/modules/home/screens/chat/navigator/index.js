import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Button, Footer, FooterTab, Icon, Text } from 'native-base';
import LucyChat from '../chat';

export default TabNavigator(
    {
        LucyChat: { screen: LucyChat },
    },
    {
        tabBarPosition: "bottom",
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("LucyChat")}
                        >
                            <Icon name="bowtie" />
                            <Text>Lucy</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    }
);

