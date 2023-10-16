
Docs and samples for the entire package are coming

### Ramp Network Android Support
If you want to support Ramp Network Fiat On/Off Ramp for your Android game in Unity, there are some steps that need to be followed, since it's not as simple as 'import our unity package and it's done' 
First you need to go to Player Settings -> Publishing Settings and tick 3 of the following (if they're not ticked already):
* Custom Main Gradle Template
* Custom Base Gradle Template
* Custom Gradle Properties Template

This will create 3 files in the Assets/Plugins/Android folder and those files can't be moved anywhere else! 
In the gradleTemplate.properties just add
```
android.useAndroidX=true
```
In settingsTemplate.gradle in the `dependencyResolutionManagement` below `mavenCentral()` just add
```
maven { url 'https://jitpack.io'}
``` 
And lastly, in the `mainTemplate.gradle` in the `dependencies` just add 
```
api 'com.github.RampNetwork:ramp-sdk-android:3.0.4'
```
above the `**DEPS**}` line.

#### Big note: If you are also using our Web3Auth plugin make sure to remove the androidx aar libraries from the Plugins/Android folder because it can cause errors during the gradle build!
