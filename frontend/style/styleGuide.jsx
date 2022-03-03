import { Dimensions } from 'react-native';

const StyleGuide = {
    container: {
        flex: 1,
        justfyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#2B2B2B',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width / 1,
        marginBottom: 20
    },
    profileImageButton: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginTop: 30,
        marginLeft: 10
    },
    buttonTitle: {
        textAlign: "center",
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 20,
    },
    // squareButtonBorder: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     margin: 3,
    //     backgroundColor: "#2B2B2B",
    //     borderRadius: 5,
    //     width: Dimensions.get('window').width / 1.3 + 6,
    //     height: Dimensions.get('window').height / 11 + 6,
    // },
    squareButtonFilled: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        colors: ['#F81C8F', '#FFA353'],
        borderRadius: 5,
        width: Dimensions.get('window').width / 1.4 + 6,
        height: Dimensions.get('window').height / 13 + 6,
    },
    roundButtonBorder: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        backgroundColor: "#2B2B2B",
        borderRadius: 40,
        width: Dimensions.get('window').width / 1.4 + 6,
        height: Dimensions.get('window').height / 13 + 6,
    },
    roundButtonFilled: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        colors: ['#F81C8F', '#FFA353'],
        borderRadius: 40,
        width: Dimensions.get('window').width / 1.4 + 6,
        height: Dimensions.get('window').height / 13 + 6,
    },
    squareButtonDisable: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        backgroundColor: "#757575",
        borderRadius: 5,
        width: Dimensions.get('window').width / 1.4 + 6,
        height: Dimensions.get('window').height / 13 + 6,
    },
    footer: {
        backgroundColor: '#2B2B2B',
        position: 'absolute',
        bottom: 30,
    },
    googleButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 12,
        backgroundColor: '#fff',
        width: Dimensions.get('window').width / 1.4 + 6,
        height: Dimensions.get('window').height / 13 + 6,
    },
    titleGoogleButton: {
        color: '#757575',
        fontSize: 20,
    },
    facebookButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 30,
        backgroundColor: '#4267B2',
        width: Dimensions.get('window').width / 1.4 + 6,
        height: Dimensions.get('window').height / 13 + 6,
    },
    titleFacebookButton: {
        color: '#fff',
        fontSize: 20,
    },
    googlePicto: {
        aspectRatio: 2.5,
        resizeMode: 'contain',
    },
    logo: {
        width: Dimensions.get('window').width / 1.5,
        resizeMode: 'contain',
    },
    input: {
        flex: 1,
        justfyContent: "center",
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height / 15,
        backgroundColor: "#fff",
        borderRadius: 10,

    }
};

export default StyleGuide;
