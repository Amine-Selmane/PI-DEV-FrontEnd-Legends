import React from 'react';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import SignInMain from '../components/SignIn/SignInMain';
import HeaderFour from '../components/Layout/Header/HeaderStyleFour';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';
class SignIn extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
             <HeaderTwo />
            <SignInMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default SignIn;