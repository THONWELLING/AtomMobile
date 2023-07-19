import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  scrowView: {
    flex: 1,
    height: '100%'
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    resizeMode: 'contain'
  },
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  logo:{
    width: '25%',
    marginLeft: -145,
    resizeMode: 'stretch',
    marginVertical: 7
  },
  h1: {
    color: '#999',
    fontSize: 23,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  h2: {
    color: '#999',
    fontSize: 15,
    fontStyle: 'italic',
  },
  inputArea: {
    width: '98%',
    padding: 20,
    marginTop: 15,
    borderRadius: 20,
    borderColor: ' #FFFFA014',
    backgroundColor: 'rgba(248,248,255, 0.25)'
  },
  inputLabel: {
    color: '#141414',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  inputField: {
    width: '80%',
    fontSize: 15,
    color: '#141414bb',
    fontStyle: 'italic',
    padding: 10,
    textAlign: 'center',
    justifyContent:'center'
  },
  inputPasswordArea:{
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: ' #FFFFA014',
    textAlign: 'center',
    justifyContent:'center'
  },
  icon:{
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '2%'
  },
   button: {
    backgroundColor: ' #FFFFA014',
    width: '60%',
    padding: 10,
    borderRadius: 20,
    marginTop: 40
  },
  buttonText: {
    alignSelf: 'center',
    color: '#141414',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpBtnArea: {
    flexDirection: 'row',
    marginVertical: 30,
  },
  loadingArea:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  loadingText:{
    fontSize: 20,
    marginVertical: 30
  }
})