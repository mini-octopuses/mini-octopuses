import { Dimensions } from 'react-native';

const StyleGuide = {
    container: {
        backgroundColor: '#2B2B2B',
        flex: 1,
        justfyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    profileImage: {
        width: 55,
        height: 55,
        borderRadius: 50,
        marginTop: 30,
        marginLeft: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width / 1,
        marginBottom: 20
    },
    buttonMargin: {
        marginTop: 20,
    },
    buttonGradient: {
        margin: 3,
        backgroundColor: "#2B2B2B",
        borderRadius: 5,
        width:  Dimensions.get('window').width/1.3,
        height:  Dimensions.get('window').height/11,
    },
    button: {
        textAlign: "center",
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 20,
    },
    buttonGradientFilled: {
        margin: 3,
        colors: ['#F81C8F', '#FFA353'],
        borderRadius: 5,
        width:  Dimensions.get('window').width/1.3,
        height:  Dimensions.get('window').height/11,
    },
    buttonFilled: {
        margin: 18,
        textAlign: "center",
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 20,
    },
    buttonGradientToppic: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        backgroundColor: "#2B2B2B",
        borderRadius: 40,
        width:  Dimensions.get('window').width/1.3,
        height: Dimensions.get('window').height / 11,
    },
    fontSize: {
        fontSize: 20,
        marginBottom: 20,
    },
    footer: {
        backgroundColor: '#2B2B2B',
        position: 'absolute',
        bottom: 0,
    },
    googleButton:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        borderRadius:10,
        backgroundColor: '#fff',
        width:  Dimensions.get('window').width/1.2,
        height:  Dimensions.get('window').height/11,
    },
    titleGoogleButton:{
        color:'#757575',
        fontSize :20,
    },
    facebookButton:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        borderRadius:10,
        backgroundColor: '#4267B2',
        width: Dimensions.get('window').width/1.2,
        height: Dimensions.get('window').height/11,
    },
    titleFacebookButton:{
        color:'#fff',
        fontSize :20,
    },
    googlePicto:{
        aspectRatio: 2.5, 
        resizeMode: 'contain',
    },
    logo:{
        width:  Dimensions.get('window').width/1.5,
        resizeMode: 'contain',
    },
    input:{
        flex:1,
        justfyContent:"center",
        width:  Dimensions.get('window').width/1.5,
        height:  Dimensions.get('window').height/15,
        backgroundColor:"#fff",
        borderRadius:10,

    }

    

};

export default StyleGuide;


// colors: {
//     primary: '#EBC56E',
//     secondary: '#435E75',
//     third: '#E6D8C1',
//     white: '#FFFDFB',
//     black: '#3C3C3B',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFDFB',
//     paddingTop: 45,
//     paddingBottom: 45,
//     paddingLeft: 25,
//     paddingRight: 25,
//   },
//   typography: {
//     text1: {
//       fontSize: 20,
//       lineHeight: 27,
//       textTransform: 'uppercase',
//       fontFamily: 'Manrope_700Bold',
//     },
//     text2: {
//       fontSize: 24,
//       lineHeight: 33,
//       fontFamily: 'Manrope_700Bold',
//     },
//     text3: {
//       fontSize: 12,
//       lineHeight: 16,
//       fontFamily: 'Manrope_700Bold',
//     },
//     text4: {
//       fontSize: 10,
//       lineHeight: 14,
//       fontFamily: 'Manrope_700Bold',
//     },
//     textButton: {
//       fontSize: 12,
//       lineHeight: 16,
//       fontFamily: 'Manrope_700Bold',
//     },
//   },
//   borderRadius: 8,
//   shadowProp: {
//     shadowColor: 'rgba(0, 0, 0, 0.25)',
//     shadowOffset: { width: -2, height: 4 },
//     shadowOpacity: 0.4,
//     shadowRadius: 3,
//   },