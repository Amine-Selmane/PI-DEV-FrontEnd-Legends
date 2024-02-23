import React from 'react';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';
import SignUpMain from '../components/SignUp/SignUpMain';

class SignIn extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <SignUpMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default SignIn;