import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { fingerprintIcon, deleteIcon, closeIcon } from './static';

const arrayOfNumbers = [
  { key: 1 },
  { key: 2 },
  {
    key: 3
  },
  { key: 4 },
  { key: 5 },
  { key: 6 },
  { key: 7 },
  { key: 8 },
  { key: 9 },
  { key: 10 },
  { key: 0 },
  { key: 12 }
];

const empties = [
  { key: 1, value: ' ' },
  { key: 2, value: ' ' },
  { key: 3, value: ' ' },
  { key: 4, value: ' ' }
];

let counter = 0;

export default class App extends Component {
  state = {
    code: '',
    digitDisabled: false,
    clearDisabled: false
  };

  onEnterDigit = (num, index) => {
    const { code } = this.state;
    if (counter + 1 <= 4) {
      counter++;
      empties[counter - 1].value = num;
      this.setState({
        clearDisabled: false
      });
    }
    if (counter === 4) {
      this.props.onEnteredPincode(this.joinElements());
      this.setState({
        digitDisabled: true
      });
    }
  };

  joinElements = () => {
    let pincode = '';
    empties.forEach(item => {
      pincode += `${item.value}`;
    });
    return pincode;
  };
  onRemoveDigit = () => {
    if (counter - 1 >= 0) {
      --counter;
      empties[counter].value = ' ';
      this.setState({
        digitDisabled: false
      });
    } else {
      this.setState({
        allowClear: true
      });
    }
  };

  renderItemCell = ({ item, index }) => {
    const { withTouchId = true } = this.props;
    if (index === 9) {
      if(withTouchId) {
        return (
          <TouchableOpacity style={[styles.round, styles.centerAlignment]} onPress={() => this.props.onPressTouchId()} >
            <Image source={fingerprintIcon.src} style={styles.icon} />
          </TouchableOpacity>
        );
      }else{
        return <View style={[styles.round]} />;
      }
      
    } else if (index === 11) {
      return (
        <TouchableOpacity
          style={[styles.round, styles.centerAlignment]}
          onPress={this.onRemoveDigit}
          disabled={this.state.clearDisabled}
        >
          <Image source={deleteIcon.src} style={styles.deleteIcon} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={[styles.round, styles.centerAlignment]}
          onPress={() => this.onEnterDigit(item.key)}
          disabled={this.state.digitDisabled}
        >
          <Text style={styles.digit}>{item.key}</Text>
        </TouchableOpacity>
      );
    }
  };
  render() {
    const { spaceColor, closeButtonColor } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.close} onPress={() => this.props.onCloseView()} >
          <Image source={closeIcon.src} style={[styles.icon, , { tintColor: closeButtonColor || '#FF0000' }]} />
        </TouchableOpacity>
        <View style={styles.enterView}>
          {empties.map(item => (
            <View key={item.key} style={styles.digitView}>
              <Text style={styles.digit}>{item.value}</Text>
              <View style={[styles.redSpace, { backgroundColor: spaceColor || '#FF0000'}]} />
            </View>
          ))}
        </View>
        <View style={[styles.textView, styles.centerAlignment]}>
          <Text style={styles.instruction}>
            {this.props.descriptionText || 'Please enter pincode for entry'}
          </Text>
        </View>
        <View style={styles.flatcontainer}>
          <FlatList
            style={styles.flatlist}
            data={arrayOfNumbers}
            renderItem={this.renderItemCell}
            numColumns={3}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centerAlignment: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterView: {
    alignSelf: 'center',
    marginBottom: 15,
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  flatcontainer: {
    flex: 6
  },
  flatlist: {
    alignSelf: 'center'
  },
  icon: {
    height: 24,
    width: 24
  },
  round: {
    width: 60,
    height: 60,
    backgroundColor: '#E8E8E8',
    borderRadius: 30,
    margin: 10
  },
  instruction: {
    marginHorizontal: 30,
    textAlign: 'center',
    color: 'gray',
    fontSize: 14
  },
  close: {
    marginTop: 30,
    marginLeft: 15
  },
  digit: {
    fontSize: 24
  },
  digitView: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  redSpace: {
    height: 2,
    width: 40,
    marginHorizontal: 5
  },
  textView: {
    flex: 0.5,
    marginBottom: 10
  },
  deleteIcon: {
    height: 20,
    width: 20
  }
});