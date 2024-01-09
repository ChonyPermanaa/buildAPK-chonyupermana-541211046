import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Portfolio</Text>
       <Image source={ require("./assets/chony1.png")} style={{ width: 125, height: 125}}></Image>

      <View style={styles.portfolioItem}>
        <Text style={styles.portfolioTitle}>Project 1</Text>
        <Text>Ini adalah desain dari tugas kelompok kk4, ditugas ini saya dan kelompok saya membuat aplikasi CallDifit, yaitu aplikasi untuk menghitung calori harian dan program diet yang disertai fitur panduan olahraga dan membeli makan yang sehat </Text>
        <Image source={ require("./assets/proyek1.png")} style={{ width: 125, height: 125}}></Image>
      </View>

      <View style={styles.portfolioItem}>
        <Text style={styles.portfolioTitle}>Project 2</Text>
        <Text>Ini adalah desain aplikasi ecomerce yang saya buat saat tugas dp4 kelas 10.</Text>
        <Image source={ require("./assets/chony1.png")} style={{ width: 125, height: 125}}></Image>
      </View>

      <View style={styles.portfolioItem}>
        <Text style={styles.portfolioTitle}>Project 3</Text>
        <Text>Di projek ini saya membuat sebuah desain web dengan html css, web ini adalah web Baqery, saya membuat ini karena pada saat itu saya sering pergi ke Queen Baqery .</Text>
        <Image source={ require("./assets/home.png")} style={{ width: 125, height: 125}}></Image>
      </View>

      <Button title="Contact Me :)" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  portfolioItem: {
    marginBottom: 20,
  },
  portfolioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PortfolioScreen;