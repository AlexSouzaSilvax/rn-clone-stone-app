import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/styles";
import logo from "../../assets/logo.png";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";

export default function Inicio() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.body}>
        <View style={styles.header}>
          <View style={styles.viewLogoHeader}>
            <Image source={logo} style={styles.logoHeader} />
          </View>
          <View style={styles.viewHeader}>
            <Text style={styles.tituloHeader} numberOfLines={1}>
              Bolos da Paz
            </Text>
            <Text style={styles.subTituloHeader} numberOfLines={1}>
              CNPJ: 16.010.123/0001-76
            </Text>
          </View>
          <View style={styles.viewBtnHeader}>
            <TouchableOpacity style={styles.btnHeader} onPress={() => {}}>
              <Text style={styles.textBtnHeader}>Trocar</Text>
              <IconSimpleLineIcons
                style={styles.iconBtnHeader}
                name="arrow-right"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cardSaldo}>
          <View style={styles.viewLabelSaldo}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textLabelSaldoConta}>Saldo da Conta</Text>
            </View>
            <View style={styles.viewTexOcultaSaldoConta}>
              <TouchableOpacity
                style={styles.viewSaldoOcultar}
                onPress={() => {}}
              >
                <Text style={styles.textLabelOcultar}>Ocultar</Text>
                <IconFeather style={styles.iconBtnOcultar} name="eye-off" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.valueSaldoConta} numberOfLines={1}>
            R$ 4.780,20
          </Text>

          <View style={styles.divisao} />

          <TouchableOpacity style={styles.btnTodosSaldos} onPress={() => {}}>
            <Text style={styles.textBtnTodosSaldos}>Ver todos os saldos</Text>
            <IconEntypo
              style={styles.iconBtnTodosSaldos}
              name="chevron-right"
              size={15}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.cardAgendamentos}>
          <Text style={styles.textAgendamentos}>Agendamentos</Text>
          
          <View style={styles.}>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
