import React from "react";
import { Text, View } from "native-base";

class Tab1 extends React.Component{
    render() {
       return (
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
               <Text>Make Requests (TODO)</Text>
           </View>
       );
    }
}

export default Tab1;
