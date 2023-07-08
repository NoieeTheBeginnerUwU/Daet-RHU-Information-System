import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 1000,
        backgroundColor: 'black',
        marginTop: '7%'
    },
    signing: {
        width: '100%',
        height: 100,
        backgroundColor: 'white',
        borderColor: 'black 1px'
    }
    ,buttonHolder: {
        padding: 20,
        backgroundColor: 'rgba(0,0,60,.2)',
        flex: 1,
        justifyContent: 'center',
    },
    email: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        fontSize: 20,
    },
    pass: {
        height: 40,
        margin: 12,
        marginTop: '6%',
        marginBottom: '10%',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        fontSize: 20,
    },
    Button: {
        width: "90%",
        
    },
    ButtonClicked: {
        backgroundColor: 'rgb(100,100,100)'
    },
  });

export default styles