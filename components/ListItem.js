import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/dist/FontAwesome";

function ListItem({ item }) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View syle={styles.listItemview}>
        <Text styel={styles.listItemText}>{item.text}</Text>
        <Text>X</Text>
        {/* <Icon name="remove" size={20} color="firebrick"/> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;

{
  /*<TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        {isEditing && editItemDetail.id === item.id ? (
          <TextInput
            placeholder="Edit Item..."
            style={styles.editItemInput}
            onChangeText={handleEditChange}
          />
        ) : (
          <Text
            onPress={() => itemChecked(item.id, item.text)}
            style={
              checked.length ? styles.checkedItemText : styles.listItemText
            }>
            {item.text}
          </Text>
        )}
        <View style={styles.iconView}>
          {isEditing && editItemDetail.id === item.id ? (
            <Icon
              name="save"
              size={20}
              color="green"
              onPress={() => saveEditItem(item.id, item.text)}
            />
          ) : (
            !checked.length && (
              <Icon
                name="pencil"
                size={20}
                color="blue"
                onPress={() => editItem(item.id, item.text)}
              />
            )
          )}
          <Icon
            name="remove"
            size={20}
            color="firebrick"
            onPress={() => deleteItem(item.id)}
          />
        </View>
      </View>
    </TouchableOpacity> */
}
