import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const Privacy = () => {
  return (
    <div className="bg-blue-300 text-white">
      <Navbar  />
    <div className="bg-grey-100 text-white py-8 px-4 sm:px-8 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-6">
          Privacy Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white">
            Personal Identification Information
          </h2>
          <p className="mt-2 text-white w-[80%]">
            We may collect personal identification information from Users in
            various ways, including, but not limited to, when Users visit our
            site, register, and in connection with other activities, services,
            features, or resources we make available.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white">
            Non-personal Identification Information
          </h2>
          <p className="mt-2 text-white w-[80%]">
            We may collect non-personal identification information about Users
            whenever they interact with our site. This may include the browser
            name, type of computer, and technical information about means of
            connection.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white">
            Web Browser Cookies
          </h2>
          <p className="mt-2 text-white">
            Our site may use “cookies” to enhance the User experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white">
            How We Use Collected Information
          </h2>
          <p className="mt-2 text-white w-[80%]">
            Evoprime.com may collect and use Users’ personal information for the
            following purposes: to improve customer service, personalize user
            experience, improve our site, process payments, run a promotion,
            survey, or other site feature, and send periodic emails.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white">
            How We Protect Your Information
          </h2>
          <p className="mt-2 text-white w-[80%]">
            We adopt appropriate data collection, storage, and processing
            practices and security measures to protect against unauthorized
            access, alteration, disclosure, or destruction of your personal
            information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white">
            Sharing Your Personal Information
          </h2>
          <p className="mt-2 text-white w-[80%]">
            We do not sell, trade, or rent Users’ personal identification
            information to others.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white">
            Your Acceptance of These Terms
          </h2>
          <p className="mt-2 text-white">
            By using this Site, you signify your acceptance of this policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Contacting Us</h2>
          <p className="mt-2 text-white">
            If you have any questions about this Privacy Policy, please contact
            us.
          </p>
        </section>
      </div>
    </div>
    <Footer />

    </div>
  );
};

export default Privacy;
