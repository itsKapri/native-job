import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./ScreenBtn.style";

interface ScreenHeaderBtnProps {
  iconUrl: string; 
  dimension: string; 
  handlePress: () => void;
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({
  iconUrl,
  dimension,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={{ uri: iconUrl }} // Assuming iconUrl is a URL
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
