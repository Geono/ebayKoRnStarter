import React from "react";
import { Image } from "react-native";
import { Container, Content, List, ListItem, Text } from "native-base";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'modules/0-intro/actions/auth';

const routes = [ "Home", "Chat", "Calendar" ];

class SideBar extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <Image
                        square
                        style={{ height: 80, width: 70 }}
                        source={{
                            uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
                        }}
                    />
                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <List>
                                    <ListItem
                                        button
                                        onPress={() => this.props.navigation.navigate(data)}
                                    >
                                        <Text>{data}</Text>
                                    </ListItem>
                                </List>
                            );
                        }}
                    />
                    <List>
                        <ListItem
                            button
                            onPress={() => this.props.UserActions.logout()}
                        >
                            <Text>Logout</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(SideBar);
