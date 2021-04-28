# Overview
This project is created using ReactJs framework and it is built strictly using React Hooks. The project contains all the individual styling rules within the respective files with the help of 'styled-components'.

## Folder Structure
 ```sh
  ├── README.md
  ├── package.json *** Required dependencies and project configurations
  ├── src
  │   ├── Index.js *** The main file which renders all components from App.js
  │   ├── App.js   *** Contains all the imports of pages and routing for various URLs
  │   ├── components  *** contains all Components and Pages (js files)
  |   │   ├── Navbar.js
  |   │   ├── Footer.js
  |   │   ├── CHP.js
  |   │   ├── News.js
  |   │   ├── Panel.js
  |   │   ├── Home
  |   |   │   ├── Home.js *** Main file for Home Page (including imports)
  |   |   │   ├── Header.js *** Header with Image slider
  |   |   │   ├── FindDoctor.js *** Icons and Emergency, Learning Section
  |   |   │   ├── Fitness.js *** Section with Fitness and workout tracking
  |   |   │   └── Services.js *** our services section
  |   │   ├── Services
  |   |   │   ├── ServicesPage.js *** Main file for Services Page (including imports)
  |   |   │   ├── ServiceHeader.js *** Service Header
  |   |   │   ├── ServiceTabs.js *** 3 tabs for location, emergency and opening hours
  |   |   │   ├── ServiceCrypto.js *** Section for crypto
  |   |   │   ├── WorldClassServices.js *** services component
  |   |   │   └── ServiceApp.js *** Section for appointment form embedded
  |   │   ├── Education
  |   |   │   ├── Education.js *** Main file for Services Page (including imports)
  |   |   │   ├── Alumni.js *** Alumni Section
  |   |   │   ├── Benefit.js *** Section for benefits
  |   |   │   ├── Placement.js *** Section for Placement Partners
  |   |   │   ├── CoursesSection.js *** Courses component (with tabs)
  |   |   │   ├── EducationAdmission.js *** Section for Admission form link
  |   |   │   └── EduHeader.js *** Education Header Section
  |   │   ├── AboutUs
  |   |   │   ├── About.js *** Main file for AboutUs Page (including imports)
  |   |   │   ├── AboutCrypto.js *** Section for crypto
  |   |   │   ├── WhyChooseUs.js *** Section for Why CHoose Us
  |   |   │   └── AboutHeader.js *** AboutUs Header Section
  |   │   └── Forms
  |   |       ├── Appointment.js *** Appointment Form
  |   |       └── Admission.js *** Admission Form
  │   └── images *** contains all images to be used in the project
  |   │   ├── alummi
  |   │   ├── ambulance *** ambulance (white, gray, red)
  |   │   ├── benefit *** icons for benefit section
  |   │   ├── blog *** images for blog, news
  |   │   ├── caret *** (black, white)
  |   │   ├── course_icons *** duration, medal icon for course section
  |   │   ├── courses *** images for different courses
  |   │   ├── doctorpanel *** doctor images
  |   │   ├── headers *** bg images for headers in all pages
  |   │   ├── heading_icons *** icons for headings (our world class services, doctor panel, latest news, etc)
  |   │   ├── icons_specality *** icons for speciality (pill, help, question, bone, baby, etc)
  |   │   ├── logo *** (dark, white)
  |   │   ├── online_doctors *** (doctors circle profile photos for online doctors section)
  |   │   ├── placement *** placement partners
  |   │   ├── service_tabs *** tabs section in service page
  |   │   ├── services *** service section images (OPD etc...)
  |   │   ├── whychooseus *** why choose us section in about us page
  |   │   └── social *** social icons in footer
  └── public
      ├── favicon.ico *** Favicon icon displayed beside the title
      ├── index.html *** index file which is rendered in the view
      ├── manifest.json
      ├── robots.txt
      └── images (different logos)
  ```

## Styling
The styling rules have been placed in the respected files. CSS is used with the help of styled-components module. The files have been properly commented and styled.

## Popup for Admission and Appointment
The popups have been set using 'props' by passing them withing the files from the App.js file.
* popupAdm, setPopupAdm : function to show popup based of the Admission Form on value (boolean)
* popupApp, setPopupApp : function to show popup based of the Appointment Form on value (boolean)
