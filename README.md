<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPLv3 License][license-shield]][license-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[forks-shield]: https://img.shields.io/github/forks/MaximilianHeidenreich/Brief?style=flat-square
[forks-url]: https://github.com/MaximilianHeidenreich/Brief/network
[stars-shield]: https://img.shields.io/github/stars/MaximilianHeidenreich/Brief?style=flat-square
[stars-url]: https://github.com/MaximilianHeidenreich/Brief/stargazers
[issues-shield]: https://img.shields.io/github/issues/MaximilianHeidenreich/Brief?style=flat-square
[issues-url]: https://github.com/MaximilianHeidenreich/Brief/issues
[license-shield]: https://img.shields.io/github/license/MaximilianHeidenreich/Brief?style=flat-square
[license-url]: https://github.com/MaximilianHeidenreich/Brief/blob/master/LICENSE

<!-- PROJECT HEADER -->
<br />
<p align="center">
  <a href="https://github.com/MaximilianHeidenreich/Brief">
    <img width="300" src="https://github.com/MaximilianHeidenreich/Brief/blob/dbe448fbc8272ec96fdde3dad738cede3ae46d4b/static/brief_banner.png?raw=true" alt="Project Logo" >
  </a>

  <p align="center">
    <small>
        \ ˈbrēf \ - <em>short in duration, extent or length</em>
        <br />
        Brief - <em>schriftliche, in einem Umschlag übersandte Mitteilung</em>
    </small>
    <br />
    <br />
    <a href="#"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/MaximilianHeidenreich/Brief/issues">Report Bug</a>
    ·
    <a href="https://github.com/MaximilianHeidenreich/Brief/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Features](#features)
- [Usage](#usage)
  - [Web](#web)
  - [API](#api)
- [Contributing](#contributing)
- [Contact](#contact)
- [Licenses](#licenses)

<!-- ABOUT THE PROJECT -->
## About The Project

I created this project because I needed it for my [JNet]() and [EnderSync]() projects. 
Everything else I found online might have worked but would result in too much boilerplate code or
just had an API that was pretty big.
I just wanted a simple EventLoop without* any other dependencies which could process my events.

### Features

- [x] Core
    - [x] Create a "Brief"
    - [x] View a "Brief"
    - [x] Share using the native [Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
    - [x] Copy URL to clipboard
- [x] API
    - [x] /encode Endpoint to encode arbitrary messages

<br>

<!-- USAGE -->
## Usage

### Web

> It's pretty simple. Enter a message and share the url with someone else.

### API

Send a `POST` request to `/encode` with the following JSON body:
```json
{
    "message": "your message goes here!"
}
```

You will receive the following response if everything went well (Status `400` if not):
```json
{
    "data": "base64 encoded message data"
}
```

<br />

<!-- CONTRIBUTING -->
## Contributing

Feel free to contribute to this project if you find something that is missing or can be optimized.
If you do so, please follow the following steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Maximilian Heidenreich - github@maximilian-heidenreich.de

Project Link: [https://github.com/MaximilianHeidenreich/Brief](https://github.com/MaximilianHeidenreich/JEventLoop)

Project Banner: [https://github.com/MaximilianHeidenreich/Brief/blob/master/static/brief_banner.png](https://github.com/MaximilianHeidenreich/Brief/blob/master/static/brief_banner.png)

<a href="https://www.buymeacoffee.com/maximili"><img width="180" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=maximili&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"></a>

<br />

<!-- LICENSE -->
## Licenses

The project uses Twemoji for its favicon and banner image.

“[Twemoji](https://twemoji.twitter.com)” by [Twitter OSS](https://twitter.com/TwitterOSS) is licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). 
