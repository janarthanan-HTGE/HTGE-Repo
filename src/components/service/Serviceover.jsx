import { useParams } from "react-router-dom";
import services from "../../utils/Serviceoverview.json";

const ServiceOverview = () => {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="container section-padding">
        <h2>Service not found</h2>
      </div>
    );
  }

  return (
    <section className="service-details-section fix section-padding mb-[-60px]">
      <div className="container">
        <div className="service-details-wrapper">
          <div className="row g-5 justify-content-center">
            <div className="section-title text-center mb-0">
              <h2>
                {service.title}
              </h2>
              <p>
                {service.description}
              </p>
            </div>
            <div className="col-lg-12">
              <div className="service-details-image">
                <img src={service.image} alt={service.title}/>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="service-details-content">
                <h4>
                  {service.heading}
                </h4>
                <p className="mt-3 text-justify">
                  {service.paragraph1}
                </p>

                <p className="mt-3 text-justify">
                  {service.paragraph2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;