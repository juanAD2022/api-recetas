import React from "react";
import "./style.css";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface CategoryCardProps {
  image: string;
  text: string;
  onPress?: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ image, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 8,
    overflow: "hidden",
    elevation: 3, // sombra en Android
    shadowColor: "#000", // sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  cardBody: {
    padding: 8,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});

