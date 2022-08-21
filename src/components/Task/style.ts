import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
    marginTop: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonCheck: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    marginRight: 8
  },
  text: {
    color: '#F2F2F2',
    fontSize: 14,
    lineHeight: 19.6,
    flex: 1
  },
  textUndli: {
    color: '#F2F2F2',
    fontSize: 14,
    lineHeight: 19.6,
    flex: 1,
    textDecorationLine: 'line-through'
  },
  buttonTrash: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32
  },
});