# <i><u>Travel-O-(B)log</u></i>
- This front-end-application renders list of Travel-Blogs to read from.
- Click on any one from the list to read the complete Blog.
- [View App]()

<br>

# <i><u>Overview</u></i>
- This app was built with a purpose to learn and understand the concepts of "Typescript" and "Contentstack" and its integration with "React.js".
- <b>[Contentstack](https://www.contentstack.com/)</b>  is used to store static Blog data.
- <b>[React](https://reactjs.org/)</b>  is used as a frontend library to display the static data received.
- <b>[TypeScript](https://www.typescriptlang.org/)</b>  is used for better integration with editor for error handling.

<br>

# <i><u>Prerequisite</u></i>
- Knowledge of Javascript
- Knowledge of React,React-Routing
- Contentstack Stack with ContentType  for static Blogs Data similar to [TavelBlog](https://s3kamble.github.io/webpage-rendering-data/Readme_Blog_CS_TS_Data/travel_blog.json)
- Git and Node.js installed on Local system.
<br>

# <i><u>Installation</u></i>
1. Open the terminal window,navigate to the folder where you want the git repo to be cloned and type the following command: 
```sh
  git clone https://github.com/s3kamble/Blogs-CS-TS
   ```

2. On successful clone, navigate to the currently created folder and type the following command to install all the required packages.
```sh
  npm install
   ```

3. To start the app,type the following command:
```sh
 npm start
   ```
4. You will now be able to see the home page of the application opened on your default browser.

<br>

# <i><u>Usage</u></i>
1. Before starting the app,open the folder in text-editor of your choice.
2. Rename <b>dummyContentstackConfig.js</b> to <b>contentstackConfig.js</b>
3. Open the file and enter the required keys,once you have your Contentstack stack ready with required Contentype's and Entries.
4. Save the file and start the app with the command mentioned above.

# <i><u>App Flow/Functionality</u></i>

1. <b>Home Page</b>
 <img src="https://s3kamble.github.io/webpage-rendering-data/Readme_Blog_CS_TS_Data/Home_page_blogs.png" />

 - Click on tile(name and image) of the blog to read the blog
 <br>

 2. <b>Blog Page</b>
  <img src="https://s3kamble.github.io/webpage-rendering-data/Readme_Blog_CS_TS_Data/Single_blog_page.png" />
 <br>

 3. <b>Related Links</b>
 <img src="https://s3kamble.github.io/webpage-rendering-data/Readme_Blog_CS_TS_Data/Aside_section_blogs.png" />
 - This section in the blog page ,allows you to click on any of the titles mentioned to read that particular blog
<br>

 4. <b>Header</b>
 <img src="https://s3kamble.github.io/webpage-rendering-data/Readme_Blog_CS_TS_Data/Header-Blogs.png" />
 - Clicking on Header logo,helps you navigate to home page directly
 - Header contains dummy links for "Contact" and "Feedback".
 <br>

 5.<b> Footer</b>
 <img src="https://s3kamble.github.io/webpage-rendering-data/Readme_Blog_CS_TS_Data/Footer_blogs.png" /> 
 - Clicking on Footer logo,helps you navigate to home page directly
 - Footer contains dummy links for "Plan A Trip" and "Image Gallery".These components are yet to be developed.
 <br>

 # <i><u>Directory tree</u></i>
```
 .
├── dummyContenstackConfig.js
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── components
│   │   ├── Blog
│   │   │   ├── Blog.module.css
│   │   │   └── Blog.tsx
│   │   ├── Blogs
│   │   │   ├── Blogs.module.css
│   │   │   └── Blogs.tsx
│   │   ├── Footer
│   │   │   ├── Footer.module.css
│   │   │   └── Footer.tsx
│   │   ├── Home
│   │   │   ├── Home.module.css
│   │   │   └── Home.tsx
│   │   └── Nav
│   │       ├── Nav.module.css
│   │       └── Nav.tsx
│   ├── contentstackConfig.js
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── routing
│   │   └── AppRouter.js
│   └── setupTests.ts
└── tsconfig.json
```







