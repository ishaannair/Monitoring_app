<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]

<h3 align="center">SeaForms Monitoring App</h3>

  <p align="center">
    The monitoring app used to complement and monitor the SeaForms platform system.
    <br />
    <br />
    <a href="https://github.com/ishaannair/Monitoring_app/issues">Report Bug</a>
    ·
    <a href="https://github.com/ishaannair/Monitoring_app/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This monitoring website will display data from various sensors as part of the SeaForms system and will display it in an easy-to-read manner. The app will also allow for monthly report generation using the data.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* Ant Design: [Antd-url]
* React.js: [React-url]
* jsPDF: [jsPDF-url]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This project runs using reactjs
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ishaannair/Monitoring_app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Install Python packages
   ``` sh
   cd .\Server\
   pip install -r requirements.txt

4. Run the server
   ```sh
   cd .\Server\
   python .\manage.py runserver
   ```
5. In a separate terminal, run the frontend
   ```sh
   cd .\Client\
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

* Once the server is up and running, select the Insights Page to view the various graphs.
* Select the category tabs to view the different graphs.
* Click the "Generate Monthly Report" button to download a PDF of the recent values.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

If you have any suggestions that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Ishaan Nair
Clement Vimal Ravindran

Project Link: [https://github.com/ishaannair/Monitoring_app](https://github.com/ishaannair/Monitoring_app)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Images from:

* freepik: [https://www.freepik.com/]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/lanvoine/meteor-project/graphs/contributors
[linkedin-url]: https://linkedin.com/in/lanvoine
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Antd-url]: https://ant.design/
[jsPDF-url]: https://www.npmjs.com/package/jspdf