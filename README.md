# React native icon picker (Only For Expo )

A cross platform react native icon picker component for android and ios. It includes vector icon and it is easily customizable. Its includes

- AntDesign
- Entypo
- FontAwesome
- FontAwesome5
- Fontisto
- Ionicons
- MaterialCommunityIcons
- MaterialIcons

we are working for native version. we update you soon...

## Screen Capture

## Installation

```sh
npm install react-native-icon-picker
```

## Usage

**_Step 1_**

```sh
npm install react-native-icon-picker
```

**_Step 2_**

```sh
import IconPicker from "react-native-icon-picker";
```

**_Step 3_**

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

| Name                       | Type     | Default                      | Description                                |
| -------------------------- | -------- | ---------------------------- | ------------------------------------------ |
| headerTitle                | String   | Select Icon                  | Header Title                               |
| showIconPicker             | bool     | false                        | show the icon picker                       |
| onSelect                   | function | **_REQUIRED_**               | Called when the icon is selected           |
| toggleIconPicker           | function | **_REQUIRED_**               | Called when the user taps the close button |
| iconDetails                | Array    | **_REQUIRED_**               | Icon Details                               |
| selectedIcon               | obect    | {}                           | passes the selected icon object            |
| selectedIconContainerStyle | obect    | {}                           | style applied on selected icon container   |
| content                    | any      | <Text>Open Iconpicker</Text> | Icon picker Content                        |

## Icon List [ClickMe](https://oblador.github.io/react-native-vector-icons/)

    Above link contain all the icon list

## License

**_MIT_**

## Author

**Kawal Jain**
