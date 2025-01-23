import React from "react";
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
          <h1>Contact Us</h1>
          <div className="max-w-6xl mx-auto text-center rounded-xl bg-white/10 backdrop-blur-md py-8 px-40">
            <p className="text-lg text-gray-300 mb-8">
              Need help with IT solutions? At INDEV, we’re ready to assist with
              your web and mobile app development, digital systems, or
              networking needs. Contact us today to discuss how we can bring
              your project to life.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="flex justify-center items-center mt-12">
          <hr className="w-60 border-gray-300 mx-4" />
          <h5 className="text-gray-300">Contact Us</h5>
          <hr className="w-60 border-gray-300 mx-4" />
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
