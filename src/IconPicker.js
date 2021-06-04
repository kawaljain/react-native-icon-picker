import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Modal, Text, TouchableOpacity, ScrollView } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import styles from "./style";

const iconComponents = {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
};
const ICON_COLOR_SELECTED_COLOR = "white";
const ICON_COLOR = "#999999";
const ICON_SIZE = 20;
const MODAL_CLOSE_COLOR = "#000000";
const MODAL_CLOSE_ICON_SIZE = 20;
class IconPicker extends Component {
  renderItem = (data) => {
    let selectedIconContainerStyle = this.props.selectedIconContainerStyle
      ? this.props.selectedIconContainerStyle
      : styles.selectedItem;
    let { selectedIcon } = this.props;
    return data.map((item, index) => {
      if (!item) return;

      const Family = iconComponents[item.family];
      if (!Family) return;

      let isSelected =
        selectedIcon &&
        selectedIcon.icon == item.icon &&
        selectedIcon.family == item.family;
      return (
        <TouchableOpacity
          key={index}
          style={[styles.item, isSelected ? selectedIconContainerStyle : {}]}
          onPress={() => this.props.onSelect(item)}
        >
          <Family
            name={item.icon}
            size={ICON_SIZE}
            color={isSelected ? ICON_COLOR_SELECTED_COLOR : ICON_COLOR}
          />
        </TouchableOpacity>
      );
    });
  };
  render() {
    const { iconDetails, showIconPicker } = this.props;
    const headerTitle = this.props.headerTitle
      ? this.props.headerTitle
      : "Select Icon";

    const data = [];
    if (iconDetails && iconDetails.length > 0) {
      iconDetails.map((detail) => {
        let family = detail.family;
        let color = detail.color ? detail.color : ICON_COLOR;
        if (detail.icons && detail.icons.length > 0) {
          detail.icons.map((icon) => {
            data.push({
              icon: icon,
              family: family,
              color: color,
            });
          });
        }
      });
    }
    return (
      <>
        <Modal
          animationType="fade"
          transparent={true}
          visible={showIconPicker}
          onRequestClose={this.props.toggleIconPicker}
        >
          <View style={styles.wrapper}>
            <View style={styles.content}>
              {/* header */}
              <View style={[styles.modalHeader]}>
                <View style={[styles.modalHeaderWrapper]}>
                  <View>
                    <Text style={styles.modalTitle}>{headerTitle}</Text>
                  </View>
                  <TouchableOpacity onPress={this.props.toggleIconPicker}>
                    <Ionicons
                      name={"close"}
                      size={MODAL_CLOSE_ICON_SIZE}
                      color={MODAL_CLOSE_COLOR}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {/* Content */}
              <ScrollView style={[styles.modalContent]}>
                <View style={styles.iconContainer}>
                  {this.renderItem(data)}
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={this.props.toggleIconPicker}>
          {this.props.content ? (
            this.props.content
          ) : (
            <Text>Open Iconpicker</Text>
          )}
        </TouchableOpacity>
      </>
    );
  }
}

IconPicker.propTypes = {
  headerTitle: PropTypes.string,
  showIconPicker: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  toggleIconPicker: PropTypes.func.isRequired,
  iconDetails: PropTypes.array.isRequired,
  content: PropTypes.any,
  selectedIcon: PropTypes.object,
  selectedIconContainerStyle: PropTypes.object,
};

export default IconPicker;
