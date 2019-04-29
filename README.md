
# react-native-code-verification
An UI module for user-side pincode verification.

## Getting started

`$ npm i react-native-code-verification --s`

### Props
| Name | Type | Description | Default |
| ---- | :---: | --- | --- |
| ```descriptionText``` | String  | A description text | Please enter pincode for entry
| ```spaceColor``` | Color  | Color of line under digit | #FF0000
| ```textColor``` | Color  | Color of descriptionText | gray
| ```closeButtonColor``` | Color  | Color of X - close button | #FF0000
| ```onEnteredPincode``` | Function  | A function that returns entered code | -
| ```currentEnteredNumber``` | Function  | A function that returns every time a number is pressed | -
| ```onCloseView``` | Function  | On press close button, will be useful to close view | -
| ```onPressTouchId``` | Function  | Touch Id is not available, but you can make it by yourself | -
| ```withTouchId``` | Boolean  | If you do not neet touch id, you can set it to false | TRUE

## Screenshots
<img src="/screenshots/blue.png?raw=true" width="30%"> <img src="/screenshots/second.png?raw=true" width="30%">

## Usage
```javascript
import Pincode from 'react-native-code-verification-v2';

// TODO: What to do with the module?
class Example extends Component {
  onEnteredPincode(pin) {
    console.log(pin);
  }
  onCloseView() {
    // Can Close View.
  }
  currentEnteredNumber(number) {
    console.log(number);
  }
  public render() {
    return (
      <View style={styles.container}>
        <Pincode
          onEnteredPincode={this.onEnteredPincode.bind(this)}
          onCloseView={this.onCloseView.bind(this)}
          spaceColor={'#433223'}
          textColor={'#433223'}
          currentEnteredNumber={this.currentEnteredNumber.bind(this)}
        />
      </View>
    );
  }
}
```

## Credentials
[MIT](http://opensource.org/licenses/mit-license.html), [Otel Danagul](https://github.com/danchokobo), [Darrell Richards](https://github.com/DarrellRichards)
