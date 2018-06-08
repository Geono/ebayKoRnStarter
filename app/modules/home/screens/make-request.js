import React from "react";
import { TouchableOpacity, Slider } from "react-native";
import { Text, View, Content } from "native-base";
import { RkText, RkTextInput, RkPicker, RkChoiceGroup, RkChoice, RkTheme } from 'react-native-ui-kitten';

class MakeRequest extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            partyDatePicker: {
                pickerVisible: false,
                pickedValue: [{key: 8, value: 'Aug'}, 26, 2017]
            },
            partyTimePicker: {
                pickerVisible: false,
                pickedValue: [13, {key: 1, value: '30'}]
            },
            partyCountPicker: {
                pickerVisible: false,
                pickedValue: [ 2 ]
            },
            partyWomenCount:1,
            partyWomenCountSliderDisable: true
        };
        this.hidePicker = this.hidePicker.bind(this);
        this.handlePickedValue = this.handlePickedValue.bind(this);
    }

    showPicker(picker) {
        let obj = Object.assign({}, this.state);
        for(var prop in obj)
            if(obj[prop] === picker)
                obj[prop].pickerVisible = true;
        this.setState(obj);

        // picker.pickerVisible = true;
        // if(picker === this.state.partyDatePicker)
        //     this.setState( Object.assign({}, this.state, {partyDatePicker: picker}) );
        // else if(picker === this.state.partyCountPicker)
        //     this.setState( Object.assign({}, this.state, {partyCountPicker: picker}) );
    }

    hidePicker(picker) {
        let obj = Object.assign({}, this.state);
        for(var prop in obj)
            if(obj[prop] === picker)
                obj[prop].pickerVisible = false;
        this.setState(obj);

        // picker.pickerVisible = false;
        // if(picker === this.state.partyDatePicker)
        //     this.setState( Object.assign({}, this.state, {partyDatePicker: picker}) );
        // else if(picker === this.state.partyCountPicker)
        //     this.setState( Object.assign({}, this.state, {partyCountPicker: picker}) );
    }

    handlePickedValue(picker, value) {
        let obj = Object.assign({}, this.state);
        for(var prop in obj)
            if(obj[prop] === picker)
                obj[prop].pickedValue = value;
        this.setState(obj);

        // picker.pickedValue = value;
        // if(picker === this.state.partyDatePicker)
        //     this.setState( Object.assign({}, this.state, {partyDatePicker: picker}) );
        // else if(picker === this.state.partyCountPicker)
        //     this.setState( Object.assign({}, this.state, {partyCountPicker: picker}) );
        this.hidePicker(picker);
    }

    generateArrayFromRange(start, finish) {
        return Array.apply(null, Array(finish - start + 1)).map((_, i) => start + i);
    }
    render() {
        let days = this.generateArrayFromRange(1, 31);
        let years = this.generateArrayFromRange(1985, 2025);
        let months = [
            {key: 1, value: 'Jun'}, {key: 2, value: 'Feb'},
            {key: 3, value: 'Mar'}, {key: 4, value: 'Apr'},
            {key: 5, value: 'May'}, {key: 6, value: 'Jun'},
            {key: 7, value: 'Jul'}, {key: 8, value: 'Aug'},
            {key: 9, value: 'Sep'}, {key: 10, value: 'Oct'},
            {key: 11, value: 'Nov'}, {key: 12, value: 'Dec'},
        ];
        let hours = this.generateArrayFromRange(0,23);
        let minutes = [ {key: 0, value: '00'}, {key: 1, value: '30'} ]
        let partyCounts = [ 2,3,4,5,6,7,8 ];
        RkTheme.setType('RkPicker','rounded',{
            windowBorderRadius: 15,
            windowBorderWidth: 0.5,
            windowBorderColor: 'black',
        });
        return (
            <View style={{ flex: 1 }}>
                <Content automaticallyAdjustContentInsets={true} >
                    <View>
                        <RkText>접선 위치</RkText>
                        <RkTextInput />
                    </View>
                    <View>
                        <RkText>밥집 이름</RkText>
                        <RkTextInput />
                    </View>
                    <View>
                        <View>
                            <RkText>모집인원 </RkText>
                            <TouchableOpacity onPress={() => this.showPicker(this.state.partyCountPicker)}>
                                <RkText>
                                    {this.state.partyCountPicker.pickedValue} 명
                                </RkText>
                            </TouchableOpacity>
                            <RkPicker
                                rkType='rounded'
                                title='인원수'
                                data={[partyCounts]}
                                visible={this.state.partyCountPicker.pickerVisible}
                                onConfirm={(value) => {this.handlePickedValue(this.state.partyCountPicker, value)}}
                                onCancel={() => {this.hidePicker(this.state.partyCountPicker)}}
                                selectedOptions={this.state.partyCountPicker.pickedValue}
                            />
                        </View>
                        <View>
                            <RkText>성비</RkText>
                            <RkChoiceGroup
                                selectedIndex={1}
                                radio
                                onChange={index => { this.setState(Object.assign({}, this.state, { partyWomenCountSliderDisable: (index)?false:true }))}}
                            >
                                <TouchableOpacity choiceTrigger>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <RkChoice rkType='radio' /><RkText>성별 무관</RkText>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity choiceTrigger>
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <RkChoice rkType='radio' /><RkText>성별 섞어서</RkText>
                                    </View>
                                </TouchableOpacity>
                            </RkChoiceGroup>
                            <View style={{flexDirection:'row', alignItems:'center'}} >
                                <RkText>{this.state.partyCountPicker.pickedValue[0]-this.state.partyWomenCount} 남성</RkText>
                                <Slider
                                    disabled={this.state.partyWomenCountSliderDisable}
                                    style={{ width: 300 }}
                                    step={1}
                                    minimumValue={0} // 사용자의 성별 필요
                                    maximumValue={this.state.partyCountPicker.pickedValue[0]}
                                    value={this.state.partyWomenCount}
                                    onValueChange={val => this.setState(Object.assign({}, this.state, { partyWomenCount: val }))}
                                    onSlidingComplete={val => this.setState(Object.assign({}, this.state, { partyWomenCount: val }))}
                                />
                                <RkText>여성 {this.state.partyWomenCount}</RkText>
                            </View>
                        </View>
                        <View>
                            <RkText>접선 날짜와 시간</RkText>
                            <TouchableOpacity onPress={() => this.showPicker(this.state.partyDatePicker)}>
                                <RkText>
                                    {this.state.partyDatePicker.pickedValue[0].value}.
                                    {this.state.partyDatePicker.pickedValue[1]}.
                                    {this.state.partyDatePicker.pickedValue[2]}
                                </RkText>
                            </TouchableOpacity>
                            <RkPicker
                                rkType='rounded'
                                title='접선 날짜'
                                data={[months, days, years ]}
                                visible={this.state.partyDatePicker.pickerVisible}
                                onConfirm={(value) => {this.handlePickedValue(this.state.partyDatePicker, value)}}
                                onCancel={() => {this.hidePicker(this.state.partyDatePicker)}}
                                selectedOptions={this.state.partyDatePicker.pickedValue}
                            />
                            <TouchableOpacity onPress={() => this.showPicker(this.state.partyTimePicker)}>
                                <RkText>
                                    {this.state.partyTimePicker.pickedValue[0]}:{this.state.partyTimePicker.pickedValue[1].value}
                                </RkText>
                            </TouchableOpacity>
                            <RkPicker
                                rkType='rounded'
                                title='접선 시간'
                                data={[ hours, minutes ]}
                                visible={this.state.partyTimePicker.pickerVisible}
                                onConfirm={(value) => {this.handlePickedValue(this.state.partyTimePicker, value)}}
                                onCancel={() => {this.hidePicker(this.state.partyTimePicker)}}
                                selectedOptions={this.state.partyTimePicker.pickedValue}
                            />
                        </View>
                        <View>
                            <RkText>남길 말</RkText>
                            <RkTextInput placeholder='긱삼기 화이팅' />
                        </View>
                    </View>
                </Content>
            </View>
        );
    }
}

export default MakeRequest;