import React from 'react';
import { Body, Button, Container, Header, Icon, Left, Right, Tab, TabHeading, Tabs, Text, Title } from 'native-base';

import Tab1 from './tabone';
import Tab2 from './tabtwo';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            title="Open drawer"
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>HomeScreen</Title>
                    </Body>
                    <Right />
                </Header>
                <Tabs>
                    <Tab heading={<TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
                        <Tab1 />
                    </Tab>
                    <Tab heading={<TabHeading><Text>No Icon</Text></TabHeading>}>
                        <Tab2 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
