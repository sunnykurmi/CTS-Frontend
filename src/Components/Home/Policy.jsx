import React, { useEffect, useState } from "react";
import HomeFooter from "./HomeFooter";
import { RiArrowLeftSLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const Policy = () => {
  const [activeSection, setActiveSection] = useState("privacy");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  

  const renderContent = () => {
    switch (activeSection) {
      case "privacy":
        return (
          <div className="w-full h-full px-56 max-[600px]:px-3 pb-10">
            <h1 className="text-4xl font-medium Rubik mt-5">Privacy Policy</h1>
            <h3 className="text-xl Rubik mt-10 font-medium">
              Table of contents :
            </h3>
            <ul className="mt-5 space-y-5">
              <li className="text-[#048FF5] text-sm">
                <a href="#A">A. Why we collect Personal information</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#B">
                  B. What information do we collect and how do we use it
                </a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#C">C. Information Sharing</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#D">D. How long do we retain user data</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#E">E. Grievances</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#F">F. Disclaimer</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#G">G. Data Deletion</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#H">H. Grievance Redressal</a>
              </li>
              <li className="text-[#048FF5] text-sm">
                <a href="#I">I. Company Details</a>
              </li>
            </ul>
            <h3 id="A" className="text-xl Rubik mt-8 font-medium">
              A. Why we collect Personal information
            </h3>
            <p className="Rubik mt-4 text-sm">
              We collect personal information from you to identify you, to
              provide you with information required to service you, and to help
              us deliver a superior career enhancement experience. Information
              collected enables us to give you a personalized roadmap, support
              and convenient access to our service offerings and products, and
              may help us tailor your career experience
            </p>
            <h3 id="B" className="text-xl Rubik mt-8 font-medium">
              B. What information do we collect and how do we use it?
            </h3>
            <h3 className="text-xl Rubik mt-8 font-medium">
              Information you provide:
            </h3>
            <p className="Rubik mt-4 text-sm">
              We collect information to provide more effective services. We ask
              for your name, email address, and other personal information when
              you register to use certain features of our website. We also may
              ask for this information at other times, such as roadmap creation,
              applying to specific programs. <br />
              <br /> When you use one of our paid services, we track the web
              pages, and information that has been accessed by you, and store it
              on our servers. This enables us to track items that you have
              completed, and those that you need to see.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">Cookies:</h3>
            <p className="Rubik mt-4 text-sm">
              We send cookies (small files containing a string of characters) to
              your computer, thereby uniquely identifying your browser. Cookies
              are used to track your preferences, help you login faster, and
              aggregated to determine user trends. This data is used to improve
              our offerings, such as providing more content in areas of greater
              interest to a majority of users. <br />
              <br /> Most browsers are initially set up to accept cookies, but
              you can reset your browser to refuse all cookies or to indicate
              when a cookie is being sent. Some of our features and services may
              not function properly if your cookies are disabled.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">Log Information:</h3>
            <p className="Rubik mt-4 text-sm">
              When you access our website, our servers automatically record
              information that your browser sends whenever you visit a website.
              These server logs may include information such as your web
              request, Internet Protocol address, browser type, browser
              language, the date and time of your request and one or more
              cookies that may uniquely identify your browser.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">
              User Communications:
            </h3>
            <p className="Rubik mt-4 text-sm">
              When you send email or other communication to us, we may retain
              those communications in order to process your inquiries, respond
              to your requests and improve our services.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">Links:</h3>
            <p className="Rubik mt-4 text-sm">
              We may present links in a format that enables us to keep track of
              whether these links have been followed. We use this information to
              improve our customized content. Clicking on links may take you to
              sites outside our domain. We are not responsible for the privacy
              practices of other web sites. We encourage our users to be aware
              when they leave our site to read the privacy statements of each
              and every web site that collects personally identifiable
              information. This Privacy Policy applies solely to information
              collected by our Website.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">Alerts:</h3>
            <p className="Rubik mt-4 text-sm">
              We may alert you by email or phone (through sms/call/whatsapp) to
              inform you about new updates, tasks, and offerings or other
              information which we feel might be useful for you.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">Data Security:</h3>
            <p className="Rubik mt-4 text-sm">
              We do not share your email address or your personal information
              with third party marketers.
              <br /> <br />
              We offer secure pages to collect sensitive information on our
              order form, such as credit card information. While no computer
              system is completely secure, we believe the measures implemented
              by our Site/payment partners reduce the likelihood of security
              problems to a level appropriate to the type of data involved.
              <br />
              <br />
              We use reasonable technical, administrative, and physical security
              measures for the purpose of safeguarding all data you share with
              us. We also have comprehensive internal policies in place to
              prevent unauthorized access to your data. We take adequate steps
              to ensure that third parties we share data with also adopt
              reasonable level of security practices and procedures to ensure
              the privacy and security of your information.
              <br />
              <br />
              You hereby acknowledge that we are not responsible, in particular,
              for any third party action or action on your part leading to loss,
              damage or harm to you or any other person.
              <br />
              <br />
              The Company shall not be held liable for any loss whatsoever
              incurred by you, due to unauthorized access to your electronic
              devices.
            </p>
            <h3 id="C" className="text-xl Rubik mt-8 font-medium">
              C. Information Sharing
            </h3>
            <p className="Rubik mt-4 text-sm">
              Other than the above mentioned sharing of data related to credit
              card information, we share personal information with other
              companies or individuals outside of CTSC EDUCATION PRIVATE LIMITED
              (Formerly known as Cross The Skylimits) in the following limited
              circumstances:
              <br />
              <br />
              A. Satisfy any applicable law, regulation, legal process or
              enforceable governmental request
              <br />
              <br />
              B. Enforce applicable Terms of Use, including investigation of
              potential violations thereof
              <br />
              <br />
              C. Detect, prevent, or otherwise address fraud, security or
              technical issues, or
              <br />
              <br />
              D. Protect against imminent harm to the rights, property or safety
              ofCTSC EDUCATION PRIVATE LIMITED (Formerly known as Cross The
              Skylimits), its users or the public as required or permitted by
              law. We may share with third parties certain pieces of aggregated,
              non-personal information, such as the number of users subscribed
              to a particular product, or the number of users registered on our
              website. Such information does not identify you individually.
              <br />
              <br />
              E. By using the website and/or registering yourself with us you
              authorise us to contact you via email or phone call or sms and
              offer you our services, imparting product knowledge, offer
              promotional offers running on website & offers offered by third
              parties, for which reasons, personally identifiable information
              may be collected. And irrespective of the fact if you have also
              registered yourself under DND or DNC or NCPR service, you still
              authorise us to give you a call from Leverage Edu for the above
              mentioned purposes till 365 days of your registration with us.
              <br />
              <br />
              F. To address customer goals, requirements, service/product
              offerings as and when opted by the customer.
            </p>
            <h3 id="D" className="text-xl Rubik mt-8 font-medium">
              D. How long do we retain user data?
            </h3>
            <p className="Rubik mt-4 text-sm">
              We may provide information to service providers to help us bring
              you the services we offer. Specifically, we may use third parties
              to facilitate our business, such as to host the service at a
              co-location facility for servers. Where we utilize third parties
              for the processing of any personal information, we implement
              reasonable contractual and technical protections limiting the use
              of that information to our specified purposes.
            </p>
            <h3 id="E" className="text-xl Rubik mt-8 font-medium">
              E. Grievances
            </h3>
            <p className="Rubik mt-4 text-sm">
              If You have any grievances as to the usage of any of Your personal
              information or any other privacy concerns, You can contact the
              Shubhankar Parashar whose details are provided below:
              <br />
              <br />
              <a
                className="text-[#0487F3] hover:border-b-[1px] hover:border-[#0487F3]"
                href="mailto:shubhankar@crosstheskylimits.org"
              >
                shubhankar@crosstheskylimits.org
              </a>
              <br />
              <br />
              <h2 className="text-2xl font-light">Contact us</h2>
              <br />
              If there are any questions regarding this privacy policy you may
              contact us by writing to us at:&nbsp;
              <a
                className="text-[#0487F3] hover:border-b-[1px] hover:border-[#0487F3]"
                href="mailto:info@crosstheskylimits.org"
              >
                info@crosstheskylimits.org
              </a>
            </p>
            <h3 id="F" className="text-xl Rubik mt-8 font-medium">
              F. Disclaimer
            </h3>
            <p className="Rubik mt-4 text-sm">
              The information contained in this website is for general
              information purposes only. The information is provided by CTSC
              EDUCATION PRIVATE LIMITED (Formerly known as Cross The Skylimits)
              and while we endeavor to keep the information up to date and
              correct, we make no representations or warranties of any kind,
              express or implied, about the completeness, accuracy, reliability,
              suitabsility or availability with respect to the website or the
              information, products, services, or related graphics contained on
              the website for any purpose. Any reliance you place on such
              information is therefore strictly at your own risk.
              <br />
              <br />
              In no event will we be liable for any loss or damage including
              without limitation, indirect or consequential loss or damage, or
              any loss or damage whatsoever arising from loss of data or profits
              arise out of, or in connection with, the use of this website.
              <br />
              <br />
              Through this website/ you are able to link to other websites which
              are not under the control of CTSC EDUCATION PRIVATE LIMITED
              (Formerly known as Cross The Skylimits). We have no control over
              the nature, content and availability of those sites. The inclusion
              of any links does not necessarily imply a recommendation or
              endorse the views expressed within them.
              <br />
              <br />
              Every effort is made to keep the website up and running smoothly.
              However, CTSC EDUCATION PRIVATE LIMITED (Formerly known as Cross
              The Skylimits) takes no responsibility for, and will not be liable
              for, the website being temporarily unavailable due to technical
              issues beyond our control.
            </p>
            <h3 id="G" className="text-xl Rubik mt-8 font-medium">
              G. Data Deletion
            </h3>
            <p className="Rubik mt-4 text-sm">
              You can send your data deletion request to us through email. In
              order to get your data deleted from our servers, send an email to{" "}
              <a
                className="text-[#0487F3] hover:border-b-[1px] hover:border-[#0487F3]"
                href="mailto:datadel@crosstheskylimits.org"
              >
                datadel@crosstheskylimits.org
              </a>{" "}
              with a subject Data Deletion {"<Your Email ID>"}.
            </p>
            <h3 id="H" className="text-xl Rubik mt-8 font-medium">
              H. Grievance Redressal
            </h3>
            <p className="Rubik mt-4 text-sm">
              In compliance with the provisions of the Information and
              Technology Act, 2005 (“IT Act”), we have appointed a Grievance
              Officer, to address your concerns pertaining to the usage of your
              user data, you can contact the officer Shubhankar Parashar at{" "}
              <a
                className="text-[#0487F3] hover:border-b-[1px] hover:border-[#0487F3]"
                href="mailto:shubhankar@crosstheskylimits.org"
              >
                shubhankar@crosstheskylimits.org
              </a>
              <br />
              <br />
              In the event, you have any complaints or concerns regarding the
              usage of your user data, you may write to us electronically at{" "}
              <a
                className="text-[#0487F3] hover:border-b-[1px] hover:border-[#0487F3]"
                href="mailto:shubhankar@crosstheskylimits.org"
              >
                shubhankar@crosstheskylimits.org
              </a>
              , or send a letter to us at:
              <br />
              <h2 className="font-bold">
                CTSC EDUCATION PRIVATE LIMITED (Formerly known as Cross The
                Skylimits)
              </h2>
              100, Multi Homes, Semra Gate
              <br />
              Bhopal, 462010
              <br />
              <br />
              Within 24 (twenty-four) hours of the receipt of your email, the
              Grievance Officer will acknowledge your email, and shall dispose
              the same within 15 (fifteen) days of the receipt of your email,
              upon conduct hearings and discussions.
            </p>
            <h3 id="I" className="text-xl Rubik mt-8 font-medium">
              I. Company Details
            </h3>
            <p className="Rubik mt-4 text-sm">
              Registered Office
              <br />
              CTSC EDUCATION PRIVATE LIMITED (Formerly known as Cross The
              Skylimits)
              <br />
              100, Multi Homes, Semra
              <br />
              Bhopal, 462010
              <br />
              India
              <br />
              <br />
              <span className="font-bold">CIN:</span> U85500MP2023PTC067589
            </p>
          </div>
        );
      case "terms":
        return (
          <div className="w-full h-full px-56 max-[600px]:px-3 pb-10">
            <h1 className="text-4xl font-medium Rubik mt-5">
              Terms & Condition
            </h1>
            <br />
            <p className="Rubik mt-4 text-sm">As updated on Nov 4, 2024</p>
            <h3 id="A" className="text-xl Rubik mt-8 font-medium">
              I.GENERAL
            </h3>
            <p className="Rubik mt-4 text-sm">
              Welcome to our website. If you continue to browse and use this
              website you are agreeing to comply with and be bound by the
              following terms and conditions of use, which together with our
              privacy policy govern CTSC EDUCATION PRIVATE LIMITED (Formerly
              known as Cross The Skylimits)’s relationship with you in relation
              to this website/mobile and the product which you purchase through
              this website/mobile . The term ‘CTSC EDUCATION PRIVATE LIMITED
              (Formerly known as Cross The Skylimits)’ or ‘us’ or ‘we’ refers to
              the owner of the website/mobile . The term ‘you’ refers to the
              user/viewer of our website.
              <br />
              <br />
              This Agreement is an electronic record in terms of Information
              Technology Act, 2000, and generated by a computer system and does
              not require any physical or digital signatures.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">
              II.Cross The Skylimits FEE
            </h3>
            <p className="Rubik mt-4 text-sm">
              Cross The Skylimits earns from selling courses, Counselling
              services, and some digital products.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">III.ABOUT US</h3>
            <p className="Rubik mt-4 text-sm">
              The use of this platform and the products purchased on this
              platform is subject to the following terms of use:
              <br />
              <br />
              The content of the pages of this platform is for your general
              information and use only. It is subject to change without notice.{" "}
              <br />
              <br />
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or
              suitability of the information and materials found or offered on
              this platform for any particular purpose. You acknowledge that
              such information and materials may contain inaccuracies or errors
              and we expressly exclude liability for any such inaccuracies or
              errors to the fullest extent permitted by law. <br /> <br />
              Your use of any information or materials on this platform is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products or
              information available through this platform meet your specific
              requirements. <br />
              <br />
              This platform contains material which is owned by or licensed to
              us. This material includes, but is not limited to, the design,
              layout, look, appearance and graphics. Reproduction is prohibited
              other than in accordance with the copyright notice, which forms
              part of these terms and conditions. <br />
              <br />
              Unauthorised use of this platfrom may give rise to a claim for
              damages and/or be a criminal offence. <br />
              <br />
              From time to time this platfrom may also include links to other
              websites. These links are provided for your convenience to provide
              further information. They do not signify that we endorse the
              website(s). We have no responsibility for the content of the
              linked website(s). <br />
              <br />
              You may not create a link to this website from another website or
              document without CTSC EDUCATION PRIVATE LIMITED (Formerly known as
              Cross The Skylimits)’s prior written consent. <br />
              <br />
              Your use of this platform and any dispute arising out of such use
              of the platform is subject to the laws of India or other
              regulatory authority. <br />
              <br />
              Your use of our products and services provided for herein is
              solely for your personal and non-commercial use. Any use other
              than for personal purposes is prohibited. Your personal and
              non-commercial use of our services shall be subjected to the
              following restrictions: i) You may not decompile, reverse
              engineer, or disassemble the contents of our products, or (c)
              remove any copyright, trademark registration, or other proprietary
              notices from the contents of our products. ii) You will not (a)
              use our product or service for commercial purposes of any kind, or
              (b) advertise or sell any products, services or otherwise (whether
              or not for profit), or solicit others (including, without
              limitation, solicitations for contributions or donations) or use
              any public forum for commercial purposes of any kind, or (c) use
              our products and services in any way that is unlawful, or harms
              CTSC EDUCATION PRIVATE LIMITED (Formerly known as Cross The
              Skylimits) or any other person or entity as determined by CTSC
              EDUCATION PRIVATE LIMITED (Formerly known as Cross The Skylimits).
              <br />
              <br />
              CTSC EDUCATION PRIVATE LIMITED (Formerly known as Cross The
              Skylimits) products and / or services, including the CTSC
              EDUCATION PRIVATE LIMITED (Formerly known as Cross The Skylimits)
              application and content, may not be compatible to all devices.
              CTSC EDUCATION PRIVATE LIMITED (Formerly known as Cross The
              Skylimits) shall not be obligated to provide workable products and
              / or services for any phones/tablets unless stated otherwise.
              <br />
              <br />
              CTSC EDUCATION PRIVATE LIMITED (Formerly known as Cross The
              Skylimits) or any of its subsidiaries or content partners shall
              have no responsibility for any loss or damage caused to tablet or
              phone or any other hardware and / or software, including loss of
              data or effect on the processing speed of the tablet, those
              results from the use of our products and services.
              <br />
              <br />
              In no event will VCTSC EDUCATION PRIVATE LIMITED (Formerly known
              as Cross The Skylimits). be liable for damages of any kind,
              including without limitation, (i) indirect, punitive, special,
              exemplary, incidental, or consequential damage (including loss of
              business, revenue, profits, use, data or other economic advantage,
              loss of programs or information), or (ii) direct damages in excess
              of the amount paid to CTSC EDUCATION PRIVATE LIMITED (Formerly
              known as Cross The Skylimits) for the product and / or service,
              arising out of the use of, misuse of or inability to use, or
              errors, omissions or other inaccuracies in the Site or the
              products and / or services, or any information provided on the
              Site. Some jurisdictions do not allow the limitation or exclusion
              of liability. Accordingly, in such instances, some of the above
              limitations may not apply to the User.
              <br />
              <br />
              CTSC EDUCATION PRIVATE LIMITED (Formerly known as Cross The
              Skylimits)may also contact the user through sms, email and call to
              give notifications on various important updates. Therefore, User
              holds CTSC EDUCATION PRIVATE LIMITED (Formerly known as Cross The
              Skylimits) non liable to any liabilities including financial
              penalties, damages, expenses in case the users mobile number is
              registered with Do not Call (DNC) database. You hereby indemnify,
              defend, and hold CTSC EDUCATION PRIVATE LIMITED (Formerly known as
              Cross The Skylimits)’s distributors, agents, representatives and
              other authorised users, and each of the foregoing entities”
              respective resellers, distributors, service providers and
              suppliers, and all of the foregoing entities’ respective officers,
              directors, owners, employees, agents, representatives, harmless
              from and against any and all losses, damages, liabilities and
              costs arising from your use of our product.
              <br />
              <br />
              In the event of breach of the terms and conditions of this Terms
              of Use by the User, the User shall be promptly liable to indemnify
              CTSC EDUCATION PRIVATE LIMITED (Formerly known as Cross The
              Skylimits) for all the costs, losses and damages caused to CTSC
              EDUCATION PRIVATE LIMITED (Formerly known as Cross The Skylimits)
              as a result of such a breach.
              <br />
              <br />
              In the event of your breach of this Terms of Use, you agree that
              CTSC EDUCATION PRIVATE LIMITED (Formerly known as Cross The
              Skylimits) will be irreparably harmed and will not have an
              adequate remedy in money or damages. CTSC EDUCATION PRIVATE
              LIMITED (Formerly known as Cross The Skylimits) therefore, shall
              be entitled in such event to obtain an injunction against such a
              breach from any court of competent jurisdiction immediately upon
              request. CTSC EDUCATION PRIVATE LIMITED (Formerly known as Cross
              The Skylimits)’s right to obtain such relief shall not limit its
              right to obtain other remedies.
              <br />
              <br />
              Persons who are “competent/capable” of contracting within the
              meaning of the Indian Contract Act, 1872 shall be eligible to use
              our products or services. Persons who are minors, un-discharged
              insolvents etc. are not eligible to use our products or services.
              As a minor if you wish to use our products or services, such use
              shall be made available to you by your legal guardian or parents.
              CTSC EDUCATION PRIVATE LIMITED (Formerly known as Cross The
              Skylimits) will not be responsible for any consequence that arises
              as a result of misuse of any kind of our products or services that
              may occur by virtue of any person including a minor using the
              services provided. By using the products or services you warrant
              that all the data provided by you is accurate and complete and
              that you have obtained the consent of parent/legal guardian(in
              case of minors). CTSC EDUCATION PRIVATE LIMITED (Formerly known as
              Cross The Skylimits) reserves the right to terminate your
              subscription and / or refuse to provide you with access to the
              products or services if it is discovered that you are under the
              age of 18 years and the consent to use the products or services is
              not made by your parent/legal guardian or any information provided
              by you is inaccurate. The users of this platform shall not host,
              display, upload, modify, publish, transmit, update or share any
              information that:
              <br />
              {"a)"}to another person and to which the user does not have any
              right to;
              <br />
              <br />
              {"b)"}is grossly harmful, harassing, blasphemous defamatory,
              obscene, pornographic, paedophilic, libellous, invasive of
              anothers privacy, hateful, or racially, ethnically objectionable,
              disparaging, relating or encouraging money laundering or gambling,
              or otherwise unlawful in any manner whatever;
              <br />
              <br />
              {"c)"}harm minors in any way;
              <br />
              <br />
              {"d)"}infringes any patent, trademark, copyright or other
              proprietary rights;
              <br />
              <br />
              {"e)"}violates any law for the time being in force;
              <br />
              <br />
              {"f)"}deceives or misleads the addressee about the origin of such
              messages or communicates any information which is grossly
              offensive or menacing in nature;
              <br />
              <br />
              {"g)"}impersonate another person;
              <br />
              <br />
              {"h)"}contains software viruses or any other computer code, files
              or programs designed to interrupt, destroy or limit the
              functionality of any computer resource;
              <br />
              <br />
              {"i)"}threatens the unity, integrity, defence, security or
              sovereignty of India, friendly relations with foreign states, or
              public order or causes incitement to the commission of any
              cognisable offence or prevents investigation of any offence or is
              insulting any other nation.
              <br />
              <br />
              We respect your right to privacy in respect of any personal
              information provided to us. To see how we collect and use your
              personal information, please see our Privacy Policy. The Privacy
              Policy is a necessary part of this Terms and Conditions and the
              clauses therein are not repeated here for the sake of brevity.
              <br />
              <br />
              We will not be liable for any non-compliance or delay in
              compliance with any of the obligations we assume under any
              contract when caused by events that are beyond our reasonable
              control or on account of force majeure.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">
              IV.TERM & TERMINATION
            </h3>
            <p className="Rubik mt-4 text-sm">
              This Agreement will remain in full force and effect until
              terminated, for using the platform or purchasing the products in
              any form or capacity. Provided, we have the right to immediately
              terminate your access or usage and remove non-compliant
              information or material, in case of non-compliance with the terms
              and conditions or our privacy policy
              <br />
              <br />
              The User shall be obligated to clear any dues with us for any of
              its Services which you have procured. CTSC EDUCATION PRIVATE
              LIMITED (Formerly known as Cross The Skylimits) shall not be
              liable to you or any third party for any termination of your
              access to the Services.
            </p>
            <h3 className="text-xl Rubik mt-8 font-medium">V.GOVERNING LAW</h3>
            <p className="Rubik mt-4 text-sm">
              The jurisdictional court of New Delhi, India shall have sole
              jurisdiction over any claim arising from, or related to, a visit
              to / use of the platform or purchase of the products. In case you
              are from a different country, we retain the right to bring
              proceedings against you for breach of any of the terms and
              conditions in your country of residence, country of use or other
              relevant country. The laws of New Delhi, India govern this
              Agreement and these terms and conditions of use of the platform or
              purchase of the products. <br />
              <br />
              CTSC EDUCATION PRIVATE LIMITED (Formerly known as Cross The
              Skylimits) accepts no liability whatsoever, direct or indirect,
              for non-compliance with the laws of any country other than that of
              India, and the mere fact that the platform can be accessed or used
              in a country other than India will not imply that we accede to the
              laws of such country.
            </p>
          </div>
        );
      case "refund":
        return (
          <div className="w-full h-full px-56 max-[600px]:px-3 pb-10">
            <h1 className="text-4xl font-medium Rubik mt-5">
              Refund Policy All Products
            </h1>
            <p className="Rubik mt-4 text-sm">
              We offer a refund if we have missed deadlines or there is any
              breach of service committed by one of our experts. In this case,
              we also take strict action against the expert, except issuing an
              immediate refund. However, if the refund request is made on the
              base of ‘change of mind’, we have a ‘No Refund, Exchange Only’
              policy. All products are sold “as is”. You may contact us within
              90 days from the purchase date if you wish to exchange your
              purchase for a product of equal or lesser value.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="policy-img-container relative w-full h-[45vh] max-[600px]:h-[30vh] bg-[#F5F5F5]">
        <div className="w-44 absolute left-0 flex items-center justify-center text-base mt-3">
          <Link
            className="h-12 gap-3 rounded-full z-[99] bg-[#008BDC] text-white flex items-center justify-center p-2 font-bold"
            to={"/"}
          >
            <div className="w-8 flex items-center justify-center h-8 rounded-full bg-white">
              <RiArrowLeftSLine className="text-[#0000009b]" />
            </div>
            <button className="mr-2">Go Back</button>
          </Link>
        </div>
        <div className="w-[456px] h-[346px] max-[600px]:h-[250px] max-[600px]:w-[356px] absolute top-[66%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src="/Images/privacyPolicy.png" alt="" />
        </div>
      </div>
      <div className="ploicyheadings w-full px-48 max-[600px]:px-5 whitespace-nowrap py-5 mt-10 max-[600px]:mt-5 flex items-center justify-center gap-5 max-[600px]:gap-2 max-[431px]:flex-wrap max-[431px]:gap-2">
        <h1
          className={`text-base font-medium Rubik p-2 px-3 cursor-pointer  ${
            activeSection === "privacy" ? "border-b-[3px] border-[#0487F3]" : ""
          }`}
          onClick={() => setActiveSection("privacy")}
        >
          Privacy Policy
        </h1>
        <h1
          className={`text-base z-50 font-medium Rubik p-2 px-3 cursor-pointer  ${
            activeSection === "terms" ? "border-b-[3px] border-[#0487F3]" : ""
          }`}
          onClick={() => setActiveSection("terms")}
        >
          Terms & Condition
        </h1>
        <h1
          className={`text-base z-50 font-medium Rubik p-2 px-3 cursor-pointer  ${
            activeSection === "refund" ? "border-b-[3px] border-[#0487F3]" : ""
          } max-[430px]:text-center`}
          onClick={() => setActiveSection("refund")}
        >
          Refund Policy
        </h1>
      </div>

      {renderContent()}
      <HomeFooter />
    </div>
  );
};

export default Policy;
