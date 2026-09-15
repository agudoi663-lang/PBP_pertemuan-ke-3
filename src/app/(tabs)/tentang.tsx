// app/(tabs)/tentang.tsx
import { View, Text, StyleSheet } from "react-native";
import { typeScale, spacing } from "../../constants/styles";

export default function TentangScreen() {
  const namaAplikasi = "Jelajah Aman";
  const versi = "1.0.0";
  const namaPembuat = "Doni"; // ganti sesuai nama kamu

  return (
    <View style={styles.container}>
      <Text
        style={styles.judul}
        accessibilityLabel={`Halaman Tentang aplikasi ${namaAplikasi}`}
      >
        Tentang
      </Text>

      <View style={styles.kartu}>
        <Text style={styles.namaAplikasi}>{namaAplikasi}</Text>
        <Text style={styles.teks}>Versi {versi}</Text>
        <Text style={styles.teks}>Dibuat oleh {namaPembuat}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.sedang,
    backgroundColor: "#FFFFFF",
  },
  judul: {
    fontSize: typeScale.judul,
    fontWeight: "bold",
    marginBottom: spacing.sedang,
  },
  kartu: {
    padding: spacing.sedang,
    borderRadius: 8,
    backgroundColor: "#F4F7FA",
    gap: spacing.kecil / 2,
  },
  namaAplikasi: {
    fontSize: typeScale.subjudul,
    fontWeight: "bold",
  },
  teks: {
    fontSize: typeScale.isi,
    color: "#444",
  },
});