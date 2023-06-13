import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Image } from "primereact/image";
import "./thinks-explains.css";

const ThinksExplains = () => {
  return (
    <div className="col-12 border-round-xl bg-green-100 bg-green-100 flex p-0">
      <div className="card col-7 px-0">
        <Accordion activeIndex={0}>
          <AccordionTab className="text-header" header="Makerting">
            <p className="m-0 text-explains">
              ThinkShield would like to send you information about our products
              and services that we think you might like. <br></br> - If you have
              agreed to receive marketing, you may always opt out later.
              <br></br> - You have the right at any time to stop ThinkShield
              from contacting you for marketing purposes.<br></br> - If you no
              longer wish to be contacted for marketing purposes, please advise
              us and tick the appropriate box on the website.
            </p>
          </AccordionTab>
          <AccordionTab
            className="text-header"
            header="What data do we collect?"
          >
            <p className="m-0 text-explains">
              Should you wish to share information with ThinkShield we collect
              the following data:<br></br> - Personal identification information
              (name, email address, phone number, etc.)
            </p>
          </AccordionTab>
          <AccordionTab
            className="text-header"
            header="How do we collect your data?"
          >
            <p className="m-0 text-explains">
              You directly provide our company with most of the data we collect.
              We collect data and process data when you:<br></br> - Register
              online or place an order for any of our products or services.
              <br></br> - Voluntarily complete a customer survey or provide
              feedback on any of our message boards or via email.<br></br> - Use
              or view our website via your browser's cookies.
            </p>
          </AccordionTab>
          <AccordionTab
            className="text-header"
            header="How will we use your data?"
          >
            <p className="m-0 text-explains">
              Our Company collects your data so that we can:<br></br> - Manage
              your account.<br></br> - Email you regarding our products and
              services we think may be of benefit to you or that you might like.
              <br></br>- Unless you tell us otherwise, we will not share your
              data with any other company.
            </p>
          </AccordionTab>
          <AccordionTab
            className="text-header"
            header="How do we store your data?"
          >
            <p className="m-0 text-explains">
              ThinkShield securely stores your data in a secure online data
              storage facility, accessible only by company authorised personnel.
              <br></br>- ThinkShield will keep your Personal Identification
              Information for 12 months. Once this time period has expired, your
              data will be permanently deleted, and no further record retained.
            </p>
          </AccordionTab>
          <AccordionTab
            className="text-header"
            header="What is your data protection rights?"
          >
            <p className="m-0 text-explains">
              ThinkShield would like to make sure you are fully aware of your
              data protection rights. Every user is entitled to the following:
              <br></br> - The right to access<br></br> - You have the right to
              request ThinkShield for copies of your personal data. We may
              charge you a small fee for this service.<br></br> - The right to
              rectification<br></br> - You have the right to request that
              ThinkShield correct any information you believe is inaccurate. You
              also have the right to request ThinkShield to complete information
              you believe is incomplete.<br></br> - The right to erasure
              <br></br> - You have the right to request that Our Company erase
              your personal data, under certain conditions. The right to
              restrict processing<br></br> - You have the right to request that
              ThinkShield restrict the processing of your personal data, under
              certain conditions.<br></br> - The right to object to processing
              <br></br> - You have the right to object to ThinkShield's
              processing of your personal data, under certain conditions.
              <br></br> - The right to data portability<br></br> - You have the
              right to request that ThinkShield transfer the data that we have
              collected to another organization, or directly to you, under
              certain conditions.ate
            </p>
          </AccordionTab>
          <AccordionTab className="text-header" header="What are cookies?">
            <p className="m-0 text-explains">
              Cookies are text files placed on your computer to collect standard
              Internet log information and visitor behaviour information. When
              you visit our website, we may collect information from you
              automatically through cookies or similar technology.<br></br> -
              For further information, visit allaboutcookies.org.
            </p>
          </AccordionTab>
          <AccordionTab className="text-header" header="How do we use cookies?">
            <p className="m-0 text-explains">
              ThinkShield uses cookies in a range of ways to improve your
              experience on our website, including:<br></br> - Keeping you
              signed in.<br></br> - Understanding how you use our website.
            </p>
          </AccordionTab>
          <AccordionTab
            className="text-header"
            header="What types of cookies do we use?"
          >
            <p className="m-0 text-explains">
              There are several different types of cookies, however, our website
              uses:<br></br> - Functionality<br></br> - Our company uses these
              cookies so that we recognize you on our website and remember your
              previously selected preferences. These could include what language
              you prefer and location you are in. A mix of first<br></br> -Party
              and third <br></br>-Party cookies are used.
            </p>
          </AccordionTab>
          <AccordionTab className="text-header" header="How to manage cookies">
            <p className="m-0 text-explains">
              You can set your browser not to accept cookies, and the above
              website tells you how to remove cookies from your browser.
              However, in a few cases, some of our website features may not
              function as a result.
            </p>
          </AccordionTab>
          <AccordionTab
            className="text-header"
            header="Privacy policies of other websites"
          >
            <p className="m-0 text-explains">
              The ThinkShield website contains links to other websites. Our
              privacy policy applies only to our website, so if you click on a
              link to another website, you should read their privacy policy.
            </p>
          </AccordionTab>
          <AccordionTab
            className="text-header"
            header="Changes to our privacy policy"
          >
            <p className="m-0 text-explains">
              ThinkShield keeps its privacy policy under regular review and
              places any updates on this web page. This privacy policy was last
              updated on 6th January 2023
            </p>
          </AccordionTab>
          <AccordionTab className="text-header" header="How to contact us">
            <p className="m-0 text-explains">
              If you have any questions about Our Company's privacy policy, the
              data we hold on you, or you would like to exercise one of your
              data protection rights, please do not hesitate to contact us.
              <br></br> - Email: accounts@thinkshield.com<br></br> - Or write to
              us: 4 The Arches, Furmston Court, Icknield Way, Letchworth Garden
              City, SG6 1UJ
            </p>
          </AccordionTab>
          <AccordionTab
            className="text-header"
            header="How to contact the appropriate authority"
          >
            <p className="m-0 text-explains">
              Should you wish to report a complaint or if you feel that our
              company has not addressed your concern in a satisfactory manner,
              you may contact the Information Commissioner's Office by following
              this link:<br></br> -
              <a href="https://ico.org.uk/for-the-public/how-to-make-a-data-protection-complaint/">
                https://ico.org.uk/for-the-public/how-to-make-a-data-protection-complaint
              </a>
              <br></br>- Complete advice and instructions are provided on how to
              address a complaint and how to follow up with the ICO if you are
              dissatisfied with our response.
            </p>
          </AccordionTab>
        </Accordion>
      </div>

      <div className="col-5 flex justify-content-center flex-column border-round-xl bg-green-100 px-0">
        <div
          className="col-12 text-center align-self-center"
          style={{ width: "15vw" }}
        >
          <Image
            src="src/assets/images/logoHere.jpg"
            alt="Image"
            width="100%"
            height={"100%"}
          ></Image>
        </div>
        <div className="col-12 text-7xl text-center text-black-alpha-90">
          Privacy Policy
        </div>
        <div className="col-12 text-gray-600 text-center text-5xl">
          This privacy policy explains how{" "}
          <span class="text-900 text-green-500">ThinkShield Ltd</span> uses the
          personal data we collect from individuals who visit and use our
          website.
        </div>
      </div>
    </div>
  );
};

export default ThinksExplains;
