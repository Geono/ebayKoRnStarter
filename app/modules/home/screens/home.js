import React from 'react';
import { Body, Button, Container, Header, Icon, Left, Right, Tab, TabHeading, Tabs, Text, Title } from 'native-base';

import Requests from './tabone';
import MakeRequest from './make-request';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.openDrawer()}
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
                    <Tab heading={<TabHeading><Icon name="camera" /><Text>Show Requests</Text></TabHeading>}>
                        <Requests />
                    </Tab>
                    <Tab heading={<TabHeading><Text>Make Request</Text></TabHeading>}>
                        <MakeRequest />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
