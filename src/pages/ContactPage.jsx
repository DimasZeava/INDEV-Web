import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import PlatformCard from "../components/PlatformCard";
import ContactCard from "../components/ContactCard";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-32">
        <section className="text-white h-[300px] flex flex-col justify-center items-center mt-44">
          <div className="flex justify-center items-center w-full">
            <div className="top-contact-curve-left flex-1 bg-white/10 backdrop-blur-md p-5 rounded-tl-3xl h-full">
            </div>
            <h1 className="text-4xl font-normal px-10 py-3">
              Contact Us
            </h1>
            <div className="top-contact-curve-right flex-1 bg-white/10 backdrop-blur-md p-5 rounded-tr-3xl h-full">
            </div>
          </div>
          <div className="max-w-6xl mx-auto text-center rounded-b-3xl bg-white/10 backdrop-blur-md py-8 px-40">
            <p className="text-lg text-gray-300 mb-8">
              Need help with IT solutions? At INDEV, we’re ready to assist with
              your web and mobile app development, digital systems, or
              networking needs. Contact us today to discuss how we can bring
              your project to life.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="relative text-center">
          <div className="border-t border-gray-700 absolute inset-0 top-1/2"></div>
          <span className="bg-black px-4 relative text-sm text-gray-300">
            Our Contact
          </span>
        </div>

        {/* Cards Section */}
        <div className="flex justify-center items-center gap-10 mt-20">
          <PlatformCard />
          <ContactCard />
        </div>
      </div>
      <GetStarted />
      <Footer />
    </>
  );
};

export default ContactPage;
