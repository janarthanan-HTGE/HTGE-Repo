import CtaSection from "../components/home/Ctasection";
import BreadCrumb from "../components/overlay/Firstsection";
import ServiceOverview from "../components/service/Serviceover";
import Process from "../components/service/Serviceprocess";

const ServiceDetails = () => {
    return (
        <>
        <BreadCrumb/>
        <ServiceOverview/>
        <Process/>
        <div className="mt-20">
            <CtaSection/>
        </div>
        </>
    )
}

export default ServiceDetails;