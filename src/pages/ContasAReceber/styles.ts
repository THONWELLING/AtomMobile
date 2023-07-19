import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  scrowView: {
    flex: 1,
    height: '100%',
    backgroundColor: "#fac686"
  },
  image: {
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  inputArea: {
    width: '100%',
    padding: 20,
    marginTop: 15,
    borderRadius: 20,
    borderColor: ' #FFFFA014',
    backgroundColor: 'rgba(248,248,255, 0.25)'
  },
  aditionals: {
    width: '97%',
  },
  forgotBtnArea: {
    paddingTop: 20,
    alignSelf: 'flex-end',
    marginRight: 18
  },
  forgotBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: ' #FFFFA014',
  },
  signUpBtnArea: {
    flexDirection: 'row',
    marginVertical: 30,
  },
  signUpText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#999',
  },
  signUpBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: ' #FFFFA014',
    fontStyle: 'italic',
    marginLeft: 5,
  },
})