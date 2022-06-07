import { FaCodepen } from "react-icons/fa";
import svg from "../projects/face_co.svg";
import style from "../styles/about.css";

import type { LinksFunction, MetaFunction } from "remix";
import { BiCoffeeTogo } from "react-icons/bi";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: style }];
};

export const meta: MetaFunction = () => {
  return {
    title: "ShafSpecs - About Me",
    description:
      "Learn more about Abdur-Rahman Fashola aka ShafSpecs, and let's connect!",
    "twitter:description":
      "Learn more about Abdur-Rahman Fashola aka ShafSpecs, and let's connect!",
    "og:description":
      "Learn more about Abdur-Rahman Fashola aka ShafSpecs, and let's connect!",
    keywords:
      "ShafSpecs, Abdur-Rahman, Fashola, Shaf, Digital Garden, About Me, About, About Shaf",
  };
};

export default function About() {
  return (
    <div>
      <div className="links">
        <ul className="u-list">
          <li className="feather">
            <a
              href="https://github.com/ShafSpecs"
              target="_blank"
              className="a-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-link feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </li>
          <li className="feather">
            <a
              href="https://twitter.com/ShafSpecs"
              target="_blank"
              className="a-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-link feather-twitter"
              >
                <title>Twitter</title>
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </li>
          <li className="feather">
            <a
              href="https://dev.to/shafspecs"
              target="_blank"
              className="a-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 32 447.99999999999994 448"
                role="img"
                width="2500"
                height="2321"
                className="feather-github"
                fill="currentColor"
              >
                <title>DEV.to</title>
                <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z" />
              </svg>
            </a>
          </li>
          <li className="feather">
            <a
              href="https://codepen.io/ShafSpecs"
              target="_blank"
              className="a-link"
            >
              <FaCodepen className="feather-codepen" title="CodePen" />
            </a>
          </li>
          <li className="feather">
            <a
              href="https://github.com/ShafSpecs"
              target="_blank"
              className="a-link"
            >
              <BiCoffeeTogo title="Buy Me A Coffee" className="feather-bmac" />
            </a>
          </li>
          {/* <li className="feather">
            <a
              href="https://ng.linkedin.com/in/abdur-rahman-fashola-14612a215"
              target="_blank"
              className="a-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-link feather-linkedin"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li> */}
        </ul>
      </div>
      <main className="fillHeight">
        <div className="about-title">About Me</div>
        <section className="hero">
          <div className="text">
            <p>
              Hello 👋! My name is Abdur-Rahman Fashola, known to many as
              Shafspecs or simply Shaf. I'm a 16 year old high school graduate
              and I am passionate about creating things that live on the web. I
              started my journey as a developer by attending a WordPress camp in
              the summer of 2019, and in the summer of 2020, I decided to play
              around with HTML & CSS. Turns out, I had found a life-long passion
              for web development and I decided to pursue it.
              <p className="p-break">
                My main focus this days are trying to improve my skills in
                Full-Stack Web Development and Unity Game Development and also
                helping to build a better tomorrow by contributing towards
                open-sourced development.
              </p>
              <p className="p-break">
                Here are a few technologies I have been working with recently:
              </p>
              <ul className="skill-list">
                <li>Remix</li>
                <li>TypeScript</li>
                <li>JavaScript (ES6+)</li>
                <li>Next</li>
                <li>React</li>
                <li>C#/Unity</li>
                <li>SQL</li>
                <li>WordPress</li>
                <li>Node.js</li>
              </ul>
            </p>
          </div>
          <div className="portrait">
            <img src={svg} className="img" alt="Portrait" />
          </div>
        </section>
        <section className="contact">
          <div className="contact-title">
            <u>Let's Talk 🎙</u>
          </div>
          <p className="center">
            Want to reach out? Feel free to contact me via one of my available
            media outlets:
          </p>
          <div className="contact-btn">
            <a href="mailto:abbadshaf05@gmail.com" target="_blank">
              <button>
                <svg
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  xmlns="http://www.w3.org/2000/svg"
                  className="feather-mail"
                  viewBox="7.086 7.087 1277.149 924.008"
                >
                  <path
                    fill="none"
                    d="M1138.734 931.095h.283M1139.017 931.095h-.283"
                  />
                  <path
                    d="M1179.439 7.087c57.543 0 104.627 47.083 104.627 104.626v30.331l-145.36 103.833-494.873 340.894L148.96 242.419v688.676h-37.247c-57.543 0-104.627-47.082-104.627-104.625V111.742C7.086 54.198 54.17 7.115 111.713 7.115l532.12 394.525L1179.41 7.115l.029-.028z"
                    fill="#e75a4d"
                  />
                  <linearGradient
                    id="a"
                    gradientUnits="userSpaceOnUse"
                    x1="1959.712"
                    y1="737.107"
                    x2="26066.213"
                    y2="737.107"
                    gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                  >
                    <stop offset="0" stopColor="#f8f6ef" />
                    <stop offset="1" stopColor="#e7e4d6" />
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                  />
                  <path
                    fill="#e7e4d7"
                    d="M148.96 242.419v688.676h989.774V245.877L643.833 586.771z"
                  />
                  <path
                    fill="#b8b7ae"
                    d="M148.96 931.095l494.873-344.324-2.24-1.586L148.96 923.527z"
                  />
                  <path
                    fill="#b7b6ad"
                    d="M1138.734 245.877l.283 685.218-495.184-344.324z"
                  />
                  <path
                    d="M1284.066 142.044l.17 684.51c-2.494 76.082-35.461 103.238-145.219 104.514l-.283-685.219 145.36-103.833-.028.028z"
                    fill="#b2392f"
                  />
                  <linearGradient
                    id="b"
                    gradientUnits="userSpaceOnUse"
                    x1="1959.712"
                    y1="737.107"
                    x2="26066.213"
                    y2="737.107"
                    gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                  >
                    <stop offset="0" stopColor="#f8f6ef" />
                    <stop offset="1" stopColor="#e7e4d6" />
                  </linearGradient>
                  <path
                    fill="url(#b)"
                    d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                  />
                  <linearGradient
                    id="c"
                    gradientUnits="userSpaceOnUse"
                    x1="1959.712"
                    y1="737.107"
                    x2="26066.213"
                    y2="737.107"
                    gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                  >
                    <stop offset="0" stopColor="#f8f6ef" />
                    <stop offset="1" stopColor="#e7e4d6" />
                  </linearGradient>
                  <path
                    fill="url(#c)"
                    d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                  />
                  <linearGradient
                    id="d"
                    gradientUnits="userSpaceOnUse"
                    x1="1959.712"
                    y1="737.107"
                    x2="26066.213"
                    y2="737.107"
                    gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                  >
                    <stop offset="0" stopColor="#f8f6ef" />
                    <stop offset="1" stopColor="#e7e4d6" />
                  </linearGradient>
                  <path
                    fill="url(#d)"
                    d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                  />
                  <linearGradient
                    id="e"
                    gradientUnits="userSpaceOnUse"
                    x1="1959.712"
                    y1="737.107"
                    x2="26066.213"
                    y2="737.107"
                    gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                  >
                    <stop offset="0" stopColor="#f8f6ef" />
                    <stop offset="1" stopColor="#e7e4d6" />
                  </linearGradient>
                  <path
                    fill="url(#e)"
                    d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                  />
                  <linearGradient
                    id="f"
                    gradientUnits="userSpaceOnUse"
                    x1="1959.712"
                    y1="737.107"
                    x2="26066.213"
                    y2="737.107"
                    gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                  >
                    <stop offset="0" stopColor="#f8f6ef" />
                    <stop offset="1" stopColor="#e7e4d6" />
                  </linearGradient>
                  <path
                    fill="url(#f)"
                    d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                  />
                  <linearGradient
                    id="g"
                    gradientUnits="userSpaceOnUse"
                    x1="1959.712"
                    y1="737.107"
                    x2="26066.213"
                    y2="737.107"
                    gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                  >
                    <stop offset="0" stopColor="#f8f6ef" />
                    <stop offset="1" stopColor="#e7e4d6" />
                  </linearGradient>
                  <path
                    fill="url(#g)"
                    d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                  />
                  <linearGradient
                    id="h"
                    gradientUnits="userSpaceOnUse"
                    x1="1959.712"
                    y1="737.107"
                    x2="26066.213"
                    y2="737.107"
                    gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                  >
                    <stop offset="0" stopColor="#f8f6ef" />
                    <stop offset="1" stopColor="#e7e4d6" />
                  </linearGradient>
                  <path
                    fill="url(#h)"
                    d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                  />
                  <path
                    fill="#f7f5ed"
                    d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                  />
                </svg>
                &nbsp;Connect via Gmail
              </button>
            </a>
            <a
              href="https://twitter.com/shafspecs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="#008db8"
                  className="feather-mail"
                >
                  <title>Twitter</title>
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
                &nbsp; Connect via Twitter
              </button>
            </a>
          </div>
        </section>
        {/* Footer for Mobile */}
        <footer className="footer">
          <div className="mobile-div">
            <ul className="mobile-ul">
              <li className="feather">
                <a
                  href="https://github.com/ShafSpecs"
                  target="_blank"
                  className="a-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="svg-link feather-github"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </li>
              <li className="feather">
                <a
                  href="https://twitter.com/ShafSpecs"
                  target="_blank"
                  className="a-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="svg-link feather-twitter"
                  >
                    <title>Twitter</title>
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </li>
              <li className="feather">
                <a
                  href="https://dev.to/shafspecs"
                  target="_blank"
                  className="a-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 32 447.99999999999994 448"
                    role="img"
                    width="2500"
                    height="2321"
                    className="dev feather-github"
                    fill="currentColor"
                  >
                    <title>DEV.to</title>
                    <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z" />
                  </svg>
                </a>
              </li>
              <li className="feather">
                <a
                  href="https://codepen.io/ShafSpecs"
                  target="_blank"
                  className="a-link"
                >
                  <FaCodepen className="feather-github" />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
  );
}
