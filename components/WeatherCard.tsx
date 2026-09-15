// components/WeatherCard.tsx
import { View, Text } from "react-native";
import { WeatherCardProps } from "../types/cuaca";
import { typeScale, spacing } from "../src/constants/styles";

export default function WeatherCard({ kota, suhu, tingkatAQI }: WeatherCardProps) {
  const warnaAQI = tingkatAQI === "BAIK" ? "green" : "orange";

  return (
    <View
      accessible
      accessibilityLabel={`Cuaca ${kota}, suhu ${suhu} derajat, kualitas udara ${tingkatAQI}`}
      style={{ padding: spacing.sedang, borderRadius: 8, backgroundColor: "#F4F7FA" }}
    >
      <Text style={{ fontSize: typeScale.judul, fontWeight: "bold" }}>
      {kota}
      </Text>
      <Text style={{ fontSize: typeScale.judul, marginTop: 4 }}>
      {suhu}°C
      </Text>
      <Text style={{ fontSize: typeScale.isi, color: warnaAQI, marginTop: 4 }}>
      Kualitas Udara: {tingkatAQI}
      </Text>
    </View>
  );
}