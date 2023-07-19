import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  scrowView: {
    flex: 1,
    height: '100%',
    backgroundColor:"#fac686"
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    resizeMode: 'cover'
  },
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  logo:{
    width: '25%',
    marginLeft: -135,
    marginTop: -35,
    resizeMode: 'contain',
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
    width: '100%',
    padding: 20,
    marginTop: 15,
    borderRadius: 20,
    borderColor: '#FFA500',
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
    color: '#FFA500',
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
    color: '#FFA500',
    fontStyle: 'italic',
    marginLeft: 5,
  },
})