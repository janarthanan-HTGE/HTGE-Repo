import ContactInfo from "../components/contact/Contactcard";
import ContactSection from "../components/contact/Contactform";
import ContactMap from "../components/contact/contactlocation";
import BreadCrumb from "../components/overlay/Firstsection"

const Contact = () => {
    return(
        <>
        <BreadCrumb/>
        <ContactInfo/>
        <ContactSection/>
        <ContactMap/>    
        </>
    )
}

export default Contact;