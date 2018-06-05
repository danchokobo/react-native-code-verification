
# react-native-react-native-code-verification
This module presents you view with digit display and numkeypad for convinient entering

## Getting started

`$ npm install react-native-react-native-code-verification --save`

### Mostly automatic installation

`$ react-native link react-native-react-native-code-verification`

### Manual installation

## Screenshots
<img src="/screenshots/second.png?raw=true" width="30%"> 

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-react-native-code-verification` and add `RNReactNativeCodeVerification.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativeCodeVerification.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNReactNativeCodeVerificationPackage;` to the imports at the top of the file
  - Add `new RNReactNativeCodeVerificationPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-react-native-code-verification'
  	project(':react-native-react-native-code-verification').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-react-native-code-verification/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-react-native-code-verification')
  	```

## Usage
```javascript
import RNReactNativeCodeVerification from 'react-native-react-native-code-verification';

// TODO: What to do with the module?
RNReactNativeCodeVerification;
```
## Credentials
© [Otel Danagul](https://github.com/danchokobo)
