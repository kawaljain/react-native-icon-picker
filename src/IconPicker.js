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
const ICON_COLOR = "#000000";
class IconPicker extends Component {
  renderItem = (data) =>
    data.map((item, index) => {
      if (!item) return;

      const Family = iconComponents[item.family];
      if (!Family) return;

      return (
        <TouchableOpacity
          key={index}
          style={[
            styles.item,
            {
              borderColor: item.color,
            },
          ]}
          onPress={() => this.props.onSelect(item)}
        >
          <Family name={item.icon} size={30} color={item.color} />
        </TouchableOpacity>
      );
    });

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
                    <Ionicons name={"close"} size={30} color="#000" />
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
};

export default IconPicker;
