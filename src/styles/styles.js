import { StyleSheet, Dimensions, Platform } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: colors.primaryColor,
  },
  body: {
    flex: 1,
    backgroundColor: colors.whiteDark,
  },
  header: {
    flexDirection: "row",
    height: 80,
    backgroundColor: colors.primaryColor,
  },
  viewLogoHeader: {
    paddingTop: 10,
    paddingStart: 5,
  },
  logoHeader: {
    width: 40,
    height: 40,
  },
  viewHeader: {
    flex: 1,
    paddingStart: 10,
    paddingTop: 10,
  },
  tituloHeader: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  subTituloHeader: {
    color: colors.white,
    fontSize: 13,
    paddingTop: 5,
  },
  viewBtnHeader: {
    paddingEnd: 20,
    paddingTop: 15,
  },
  btnHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 4,
    width: 80,
    height: 30,
  },
  textBtnHeader: {
    fontSize: 15,
    color: colors.white,
  },
  iconBtnHeader: {
    color: colors.white,
    paddingStart: 5,
    paddingTop: 2,
  },
  cardSaldo: {
    marginTop: 10,
    alignSelf: "center",
    width: Dimensions.get("screen").width - 20,
    backgroundColor: colors.white,
    borderRadius: 3,
  },
  viewLabelSaldo: {
    flexDirection: "row",
    marginTop: 5,
  },
  textLabelSaldoConta: {
    flex: 1,
    color: colors.whiteDark2,
    fontSize: 15,
    paddingStart: 12,
  },
  viewTexOcultaSaldoConta: {
    paddingEnd: 20,
    paddingStart: 10,
  },
  textLabelOcultar: {
    color: colors.whiteDark2,
    fontSize: 14,
  },
  iconBtnOcultar: {
    color: colors.whiteDark2,
    paddingStart: 5,
    ...Platform.select({
      ios: {
        paddingTop: 2,
      },
      android: {
        paddingTop: 5,
      },
    }),
  },
  viewSaldoOcultar: {
    flexDirection: "row",
    height: 25,
  },
  valueSaldoConta: {
    color: colors.cinza,
    fontSize: 28,
    fontWeight: "bold",
    paddingStart: 10,
    marginTop: 4,
  },
  divisao: {
    backgroundColor: colors.primaryLigthColor,
    height: 0.5,
    marginTop: 10,
  },
  btnTodosSaldos: {
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 10,
  },
  textBtnTodosSaldos: {
    flex: 1,
    color: colors.primaryLigthColor,
    fontSize: 14,
    fontWeight: "bold",
    paddingStart: 12,
  },
  iconBtnTodosSaldos: {
    color: colors.primaryLigthColor,
    paddingEnd: 10,
    paddingTop: 1,
  },
  cardAgendamentos: {
    marginTop: 10,
    alignSelf: "center",
    width: Dimensions.get("screen").width - 20,
    backgroundColor: colors.white,
    borderRadius: 3,
    paddingBottom: 7,
  },
  textAgendamentos: {
    marginTop: 5,
    color: colors.whiteDark2,
    fontSize: 15,
    paddingStart: 12,
  },
  textMeses: {
    fontSize: 13,
  },
  viewValorDetalheAgendamento: {
    flexDirection: "row",
  },
  viewValorAgendamento: {
    flex: 1,
    alignSelf: "center",
  },
  textValorAgendamento: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.whiteDark3,
  },
  btnDetalheAgendamento: {
    alignSelf: "flex-end",
    paddingEnd: 15,
    justifyContent: "center",
    marginTop: 7,
  },
  listaCards: {
    width: Dimensions.get("screen").width - 20,
    alignSelf: "center",
    marginTop: 10,
  },
  cards: {
    margin: 5,
    padding: 15,
    width: "50%",
    marginTop: 5,
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 3,
  },
  iconCard: {
    color: colors.primaryColor,
    paddingStart: 5,
    paddingTop: 2,
  },
  textCard: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.whiteDark3,
    paddingStart: 10,
    ...Platform.select({
      ios: {
        paddingTop: 8,
      },
      android: {
        paddingTop: 5,
      },
    }),
  },
});

export default styles;
