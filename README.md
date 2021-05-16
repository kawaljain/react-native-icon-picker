# React native icon picker
A cross platform react native icon picker component for android and ios. It includes vector icon and it is easily customizable. Its includes

- AntDesign
- Entypo
- FontAwesome
- FontAwesome5
- Fontisto
- Ionicons
- MaterialCommunityIcons
- MaterialIcons

## Screen Capture
## Installation
```sh
npm install react-native-icon-picker
```
## Usage
***Step 1***
```sh
npm install react-native-icon-picker
```
***Step 2***
```sh
import IconPicker from "react-native-icon-picker";
```
***Step 3***
```sh
<IconPicker
    showIconPicker={this.state.showIconPicker}
    toggleIconPicker={() => this.setState({ showIconPicker: !this.state.showIconPicker })}
    iconDetails={[
        { family: "AntDesign", color: "blue", icons: ["wallet"] },
        { family: "Entypo", icons: ["wallet"] },
        { family: "FontAwesome", icons: ["google-wallet"] },
        { family: "FontAwesome5", icons: ["wallet"] },
        { family: "Fontisto", icons: ["wallet"] },
        {
            family: "MaterialCommunityIcons",
            icons: ["wallet-membership"]
        },
        { family: "MaterialIcons", icons: ["wallet-travel"] }
        ]
    }
    onSelect={(icon) => console.log(icon)}
    content={<MaterialIcons name="category" size={32} />}
/>
```
## Available Props

| Name | Type | Default | Description
| ------ | ------ | ------ | ------ |
| headerTitle | String | Select Icon | Header Title
| showIconPicker | bool | false | show the icon picker
| onSelect |  function | ***REQUIRED*** |  Called when the icon is selected
| toggleIconPicker |   function | ***REQUIRED*** | Called when the user taps the close button
| iconDetails | Array | ***REQUIRED*** | Icon Details 
| content | any | <Text>Open Iconpicker</Text> | Icon picker Content
## Icon List [ClickMe](https://oblador.github.io/react-native-vector-icons/)
    Above link contain all the icon list
## License
***MIT***

## Author
**Kawal Jain**