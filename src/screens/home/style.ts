import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  logo: {
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 70
  },
  subContainer: {
    paddingHorizontal: 24,
  },
  form: {
    marginTop: -30,
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    padding: 16,
    borderRadius: 6,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    marginRight: 7,
  },
  button: {
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60
  },
  progresso: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 32,
    paddingBottom: 20
  },
  progressoText: {
    flexDirection: 'row'
  },
  criadas: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: '700',
    marginRight: 8
  },
  concluidas: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: '700',
    marginRight: 8
  },
  progressoTextCount: {
    backgroundColor: '#333333',
    color: '#D9D9D9', 
    borderRadius: 999,
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: '700'
  },
  listEmpty: {
    alignItems: 'center',
    paddingTop: 50,
    borderWidth: 1,
    borderColor: '#1A1A1A',
    borderTopColor: '#333333'
  },
  listEmptyImage: {
    marginBottom: 15
  },
  listEmptyText1: {
    color: '#808080',
    fontWeight: '700'
  },
  listEmptyText2: {
    color: '#808080'
  }
});