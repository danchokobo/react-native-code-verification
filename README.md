
# react-native-code-verification
This module presents you view with digit display and numkeypad for convinient entering

## Getting started

`$ npm install react-native-code-verification --save


## Screenshots
<img src="/screenshots/second.png?raw=true" width="30%"> 

## Usage
```javascript
import Pincode from 'react-native-code-verification';

// TODO: What to do with the module?
class Example extends Component<IProps> {
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
© [Otel Danagul](https://github.com/danchokobo)
