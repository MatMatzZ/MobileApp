import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class PropExample extends Component{
    constructor(props){
        super(props);
        this.state = {
            myMessage: this.props.myMessage,
            message2: this.props.message2,
            message3: this.props.message3
        }
    }
    static defaultProps = {
        myMessage: "No message return",
        message2: "olleH dlroW",
        message3: "dlroW olleH"
    }
    
    render(){
        return(
            <View>
                <Text>
                    {this.state.myMessage + "\n" + 
                    this.state.message2 + "\n" + 
                    this.state.message3}
                </Text>
            </View>
        )
    }
}