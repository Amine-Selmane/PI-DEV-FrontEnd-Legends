import React from 'react';
import ContactMain from '../components/Contact/ContactMain';
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';
class Contact extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <ContactMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default Contact;

