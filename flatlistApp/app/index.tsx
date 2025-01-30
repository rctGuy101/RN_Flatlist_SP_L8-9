import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";
import { useState } from "react";
import ListItemSeparator from "@/components/ListItemSeparator";
import ListItem from "@/components/ListItem";
import { DATA } from "@/data/appData";
import { dataType } from "@/data/appData";

export default function Index() {
  const [selectedId, setSelectedId] = useState<string>("");

  const handleRowPress = (item: dataType) => {
    console.log("Selected " + item.title);
    setSelectedId(item.id);
  };
  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>List Test</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA}
            keyExtractor={(item: dataType) => item.id}
            extraData={selectedId}
            ItemSeparatorComponent={() => <ListItemSeparator />}
            renderItem={({ item }) => (
              <ListItem
                item={item}
                isSelected={item.id === selectedId}
                onPress={handleRowPress}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
});
