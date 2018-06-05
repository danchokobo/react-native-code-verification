
# react-native-code-verification
This module presents you UI for user typing pincode verification

## Getting started

`$ npm i react-native-code-verification --s`


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

### Props
| Name | Type | Description | Default |
| ---- | :---: | --- | --- |
| ```descriptionText``` | String  | A description text | Please enter pincode for entry
| ```onEnteredPincode``` | Function  | A function that returns entered code | -
| ```onCloseView``` | Function  | On press close button, will be useful to close view | -
| ```onPressTouchId``` | Function  | Touch Id is not available, but you can make it by yourself | -

## Credentials
[MIT](http://opensource.org/licenses/mit-license.html), ©[Otel Danagul](https://github.com/danchokobo)



