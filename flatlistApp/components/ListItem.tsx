import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../styles/colors";

type dataType = {
  id: string;
  title: string;
};

type propsDataType = {
  item: dataType;
  isSelected: boolean;
  onPress: (item: dataType) => void;
};

// declare data type for props here

const ListItem: React.FC<propsDataType> = ({ item, isSelected, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View
        style={[
          styles.titleContainer,
          {
            backgroundColor: isSelected ? "#F1ECDB" : "#F6F2E6",
          },
        ]}
      >
        <Text
          style={[
            styles.titleText,
            {
              color: isSelected ? colors.text.light : colors.text.dark,
            },
          ]}
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#F1ECDB",
  },
  titleText: {
    fontSize: 24,
    padding: 10,
    fontFamily: "tahoma",
  },
});
