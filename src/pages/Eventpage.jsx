import EventsSection from "../components/events/Eventcards";
import MasonryGallery from "../components/events/Gallery";
import BreadCrumb from "../components/overlay/Firstsection";

const Event = () => {
    return(
        <>
        <BreadCrumb/>
        <EventsSection/>
        <MasonryGallery/>
        </>
    )
}

export default Event;