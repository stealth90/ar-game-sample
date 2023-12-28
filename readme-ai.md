<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>AR-GAME-SAMPLE</h1>
<h3>◦ Gamify your coding journey with AR!</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=plastic&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=plastic&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/Sass-CC6699.svg?style=plastic&logo=Sass&logoColor=white" alt="Sass" />

<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=plastic&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=plastic&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/Webpack-8DD6F9.svg?style=plastic&logo=Webpack&logoColor=black" alt="Webpack" />
</p>

<img src="https://img.shields.io/github/last-commit/stealth90/ar-game-sample?style=plastic&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/stealth90/ar-game-sample?style=plastic&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/stealth90/ar-game-sample?style=plastic&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running ar-game-sample local](#-running-ar-game-sample-local)
    - [🚀 Build and start ar-game-sample on local server](#-build-and-start-ar-game-sample-on-local)
- [📄 License](#-license)

---


## 📍 Overview

The ar-game-sample repository provides a codebase for building augmented reality (AR) games. It includes necessary files and dependencies to create interactive AR experiences using web technologies. With this repository, developers can quickly start building AR games and integrate them into web applications, offering users a unique and immersive gaming experience.

---

## 📦 Features

|    | Feature            | Description                                                                                                                                                                                             |
|----|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The codebase follows a common architecture pattern for React applications, with components organized in the `src/` directory. The main component is `App.tsx`, which serves as the entry point for the application.                                                          |
| 📄 | **Documentation**  | No specific information is provided about the documentation quality and comprehensiveness.                                                                                                              |
| 🔗 | **Dependencies**   | The repository includes a `package.json` file, which lists the project's dependencies. However, the specific dependencies are not mentioned in the given repository details. It is advised to review the `package.json` file for a complete list of dependencies. |
| 🧩 | **Modularity**     | The system seems to be organized into smaller, interchangeable components under the `src/` directory. Each file represents a specific component or utility function, enabling more modular development and ease of maintenance.                                           |
| 🧪 | **Testing**        | The presence of `setupTests.ts` indicates that the codebase might use Jest as the testing framework. However, no specific information is provided about the testing strategies or tools used. Further investigation is required for a comprehensive understanding of the testing approach.              |
| ⚡️  | **Performance**    | No specific information is available regarding performance considerations. Further analysis and profiling are needed to determine how well the system performs in terms of speed, efficiency, and resource usage.                                                               |
| 🔐 | **Security**       | The security measures and practices implemented in the codebase are not explicitly mentioned in the given repository details. It is advisable to review the code and any security-related dependencies to assess the system's security measures.                                 |
| 🔀 | **Version Control**| The repository uses Git for version control. However, further information about version control strategies and tools used is not provided in the repository details.                                                                           |
| 🔌 | **Integrations**   | No specific information is given about the system's integrations with other systems or services. It requires further exploration of the codebase and any relevant documentation to determine the nature of the integrations.                                                 |
| 📶 | **Scalability**    | No specific information is provided regarding the system's ability to handle growth. Further investigation is required to assess the codebase's scalability considerations and whether it can efficiently handle increased usage and data volume.                           |

---


## 📂 Repository Structure

```sh
└── ar-game-sample/
    ├── package.json
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── src/
    │   ├── App.tsx
    │   ├── index.scss
    │   ├── index.tsx
    │   ├── react-app-env.d.ts
    │   ├── reportWebVitals.ts
    │   └── setupTests.ts
    ├── tsconfig.json
    └── yarn.lock

```

---


## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                 | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---                                                                                  | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [yarn.lock](https://github.com/stealth90/ar-game-sample/blob/main/yarn.lock)         | The code represents a directory tree structure of a sample AR game project. It includes files like package.json, index.html, manifest.json, and more. It also shows the dependencies used in the project, such as "@aashutoshrathi/word-wrap" version 1.2.6, "@adobe/css-tools" version 4.3.2, and "@alloc/quick-lru" version 5.2.0, among others. The yarn.lock file is an autogenerated file that should not be edited directly.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [package.json](https://github.com/stealth90/ar-game-sample/blob/main/package.json)   | This code represents a basic directory structure for an augmented reality (AR) game sample project. The project has the following core functionalities:1. Dependencies: The dependencies section lists all the required packages and libraries that the project relies on, such as React, TypeScript, Sass, and React Router Dom.2. Scripts: The scripts section provides commands to run various tasks, including starting the development server, building the project, running tests, and ejecting from Create React App.3. EslintConfig: The eslintConfig section specifies the configuration for ESLint, a popular JavaScript linter, with rules specifically tailored for React applications created with Create React App.4. Browserslist: The browserslist section provides target browser configurations for production and development environments, ensuring compatibility with a wide range of browsers.Overall, this code sets up the necessary dependencies and configurations for building a react-based AR game. |
| [tsconfig.json](https://github.com/stealth90/ar-game-sample/blob/main/tsconfig.json) | This code is a TypeScript configuration file (tsconfig.json) that sets the compiler options for a React project. It specifies the target environment, enables JavaScript files, allows synthetic default imports, enforces strict type checking, and allows for JSX syntax. It also includes the "src" folder as the location to find the TypeScript source files for compilation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

</details>

<details closed><summary>Public</summary>

| File                                                                                        | Summary                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                         | ---                                                                                                                                                                                                                                                                                                                             |
| [index.html](https://github.com/stealth90/ar-game-sample/blob/main/public/index.html)       | The code above represents the index.html file, which is a static web page template for an Augmented Reality (AR) game sample created using create-react-app. It includes necessary meta tags, links to icons and manifests, a title, a noscript tag for JavaScript support, and a div element for rendering the React app.      |
| [manifest.json](https://github.com/stealth90/ar-game-sample/blob/main/public/manifest.json) | The code above represents the manifest.json file for an AR game sample. It includes essential information such as the short name and full name of the game, as well as the icons that will be used for different sizes. Additionally, it specifies the start URL, display type, theme color, and background color for the game. |
| [robots.txt](https://github.com/stealth90/ar-game-sample/blob/main/public/robots.txt)       | The code represents a standard "robots.txt" file found in the "public" directory of an AR game sample project. The file uses the "Disallow" directive to instruct web crawlers to not access or index any content in the root directory ("/") or any subdirectories.                                                            |

</details>

<details closed><summary>Src</summary>

| File                                                                                               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---                                                                                                | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [index.tsx](https://github.com/stealth90/ar-game-sample/blob/main/src/index.tsx)                   | The code sets up the main entry point of a React application. It imports the necessary dependencies, such as React and ReactDOM, and initializes the rendering of the App component onto the DOM. It also includes the index.scss file for styling. Additionally, it uses React's StrictMode for enhanced debugging capabilities and calls the reportWebVitals function to measure performance.                                                                                                                                                                                                                               |
| [App.tsx](https://github.com/stealth90/ar-game-sample/blob/main/src/App.tsx)                       | The code is a simple React component called "App.tsx" that renders a div with the class name "App". The component imports a CSS file called "App.css" to style the div.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [index.scss](https://github.com/stealth90/ar-game-sample/blob/main/src/index.scss)                 | The code in `src/index.scss` defines the styling for the application. The `body` element is being given a `margin` of 0 and a `font-family` that includes a list of font families for cross-platform compatibility. The `code` element is also given a specific `font-family` for displaying code snippets. Additionally, some properties related to font smoothing are set to enhance the readability of text.                                                                                                                                                                                                               |
| [setupTests.ts](https://github.com/stealth90/ar-game-sample/blob/main/src/setupTests.ts)           | The code in the `src/setupTests.ts` file imports `@testing-library/jest-dom`, which adds custom matchers for asserting on DOM nodes in Jest tests. This allows you to make assertions like `expect(element).toHaveTextContent(/react/i)`.                                                                                                                                                                                                                                                                                                                                                                                     |
| [reportWebVitals.ts](https://github.com/stealth90/ar-game-sample/blob/main/src/reportWebVitals.ts) | The code in the `reportWebVitals.ts` file is responsible for reporting web vitals data. It imports a `ReportHandler` type from the `web-vitals` library. The `reportWebVitals` function takes an optional `onPerfEntry` parameter, which is a function for handling performance entries. If this parameter is provided and is a function, the code dynamically imports several functions from the `web-vitals` library (including `getCLS`, `getFID`, `getFCP`, `getLCP`, and `getTTFB`) and calls them with the `onPerfEntry` function. The code exports the `reportWebVitals` function as the default export of the module. |
| [react-app-env.d.ts](https://github.com/stealth90/ar-game-sample/blob/main/src/react-app-env.d.ts) | The code above is a TypeScript declaration file that references the types provided by the "react-scripts" package. It allows for the use of these types in the React app, enabling type-checking and ensuring code consistency and reliability.                                                                                                                                                                                                                                                                                                                                                                               |

</details>

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ Node v18`

### 🔧 Installation

1. Clone the ar-game-sample repository:
```sh
git clone https://github.com/stealth90/ar-game-sample
```

2. Change to the project directory:
```sh
cd ar-game-sample
```

3. Install the dependencies:
```sh
► yarn
```

### 🤖 Running ar-game-sample local

```sh
► yarn start
```

### 🚀 Build and start ar-game-sample on local server

```sh
► yarn build
```

## 📄 License


This project is protected under the [MiT](https://choosealicense.com/licenses/mit) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/mit) file.


[**Return**](#Top)

---

