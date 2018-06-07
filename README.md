
# react-native-code-verification
An UI module for user-side pincode verification.

## Getting started

`$ npm i react-native-code-verification --s`

### Props
| Name | Type | Description | Default |
| ---- | :---: | --- | --- |
| ```descriptionText``` | String  | A description text | Please enter pincode for entry
| ```spaceColor``` | Color  | Color of line under digit | #FF0000
| ```closeButtonColor``` | Color  | Color of X - close button | #FF0000
| ```onEnteredPincode``` | Function  | A function that returns entered code | -
| ```onCloseView``` | Function  | On press close button, will be useful to close view | -
| ```onPressTouchId``` | Function  | Touch Id is not available, but you can make it by yourself | -
| ```withTouchId``` | Boolean  | If you do not neet touch id, you can set it to false | TRUE

## Screenshots
<img src="/screenshots/second.png?raw=true" width="30%"> 

## Usage
```javascript
import Pincode from 'react-native-code-verification';

// TODO: What to do with the module?
class Example extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <Pincode onEnteredPincode={pin => this.onDetectPin(pin)} />
      </View>
    );
  }
  private onDetectPin = pin => {
    console.log('pinCode>>>', pin);
  };
}
```

## Credentials
[MIT](http://opensource.org/licenses/mit-license.html), [Otel Danagul](https://github.com/danchokobo)



