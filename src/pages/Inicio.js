import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import styles from "../styles/styles";
import logo from "../../assets/logo.png";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import { Icon } from "native-base";

export default function Inicio() {
  const cards = [
    {
      nome: "Cartão",
      icone: "credit-card",
      tipoIcone: "FontAwesome",
    },
    {
      nome: "Transferir",
      icone: "exchange",
      tipoIcone: "FontAwesome",
    },
    {
      nome: "Agendamentos",
      icone: "file-text-o",
      tipoIcone: "FontAwesome",
    },
    {
      nome: "Pagar",
      icone: "barcode-scan",
      tipoIcone: "MaterialCommunityIcons",
    },
    {
      nome: "Extrato",
      icone: "md-paper",
      tipoIcone: "Ionicons",
    },
    {
      nome: "Meus contatos",
      icone: "notebook",
      tipoIcone: "SimpleLineIcons",
    },
  ];

  const [visibleSaldoConta, setVisibleSaldoConta] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.body}>
        {/* header */}
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

        {/* card saldo */}
        {visibleSaldoConta ? (
          <View style={[styles.cardSaldo, { paddingBottom: 10 }]}>
            <View style={styles.viewLabelSaldo}>
              <View style={{ flex: 1 }}>
                <Text style={styles.textLabelSaldoConta}>Saldo da Conta</Text>
              </View>
              <View style={styles.viewTexOcultaSaldoConta}>
                <TouchableOpacity
                  style={styles.viewSaldoOcultar}
                  onPress={() => setVisibleSaldoConta(!visibleSaldoConta)}
                >
                  <Text style={styles.textLabelOcultar}>Mostrar</Text>
                  <IconFeather style={styles.iconBtnOcultar} name="eye-off" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.cardSaldo}>
            <View style={styles.viewLabelSaldo}>
              <View style={{ flex: 1 }}>
                <Text style={styles.textLabelSaldoConta}>Saldo da Conta</Text>
              </View>
              <View style={styles.viewTexOcultaSaldoConta}>
                <TouchableOpacity
                  style={styles.viewSaldoOcultar}
                  onPress={() => setVisibleSaldoConta(!visibleSaldoConta)}
                >
                  <Text style={styles.textLabelOcultar}>Ocultar</Text>
                  <IconFeather style={styles.iconBtnOcultar} name="eye" />
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
        )}

        {/* card agendamento */}
        <View style={styles.cardAgendamentos}>
          <Text style={styles.textAgendamentos}>Agendamentos</Text>

          <View style={styles.viewValorDetalheAgendamento}>
            <View style={styles.viewValorAgendamento}>
              <Text
                style={[styles.textAgendamentos, styles.textValorAgendamento]}
              >
                - R$ 698,06
              </Text>
            </View>
            <TouchableOpacity
              style={styles.btnDetalheAgendamento}
              onPress={() => {}}
            >
              <Text style={styles.textBtnTodosSaldos}>Ver detalhes</Text>
            </TouchableOpacity>
          </View>

          <Text style={[styles.textAgendamentos, styles.textMeses]}>
            Próximos 12 meses
          </Text>
        </View>

        {/* lista cards */}
        <FlatList
          style={styles.listaCards}
          data={cards}
          numColumns={2}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => {}} style={styles.cards}>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    style={styles.iconCard}
                    name={item.icone}
                    type={item.tipoIcone}
                  />
                  <Text style={styles.textCard}>{item.nome}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
