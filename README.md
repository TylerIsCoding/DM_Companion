<h1 align="center">DM Companion</h1>
<img src="https://i.imgur.com/PEwDnpP.png">
<br>
<p>DM Companion is a web application that uses JWT for authentication. The application enables users to create and manage session notes, recaps, and any other information they need to store for their ongoing Dungeons and Dragons campaign. Users also have access to the DnD 5th Edition Monster Manual API, and an Encounter Tracker that gives access to an initiative tracker, a dice roller, and a health tracker app.</p>

<h2>How It's Made</h2>
<p><strong>Tech Used:</strong>React, MongoDB, Mongoose, Express.js, Node.js, HTML5, CSS3, JSX, and JavaScript</p>
<br>
<p>
This project utilizes a combination of technologies to create a dynamic and interactive application. Here's a breakdown of the tech stack and their respective roles:

- React: This is the front-end framework that delivers the components that make up the application.
- HTML5: Provides the structural elements and content for the website.
- CSS3: Handles the styling and layout of the website, ensuring an aesthetically pleasing design.
- JavaScript: Implements interactive features like the navigation bar and form validation, enhancing user experience.
- MongoDB and Mongoose: Enables the storage of documents, collections, and user data in a structured manner.
- Node.js and Express.js: Hosts the server to handle HTTP requests and responses.


A responsive design approach was adopted to ensure a seamless user experience across devices, guaranteeing that the website looks great on all screen sizes.
</p>
<br>
<h2>Optimizations</h2>
<p>Here are some ways that I could increase performance on my website:

These are some popular methods of optimization that I am considering:
- API Requests: There are a lot of redundant API calls to the server that can be done. I need to go back and pass the API call down to every component that requires it.
- Database Indexing: Analyze the database queries and identify frequently accessed fields or columns. Implement appropriate indexes on these fields to improve query performance.- Optimized all images by reducing their file size and using correct image formats
- Caching: Utilize caching mechanisms, such as Redis or Memcached, to store frequently accessed data in memory. This can reduce the load on the database and improve response times.
- Asset Bundling: Consider bundling your static assets (CSS, JavaScript) into a single file to reduce the number of HTTP requests required to load the page. This can enhance performance, particularly for larger projects with multiple assets.
- Lazy Loading: Implement lazy loading techniques for images and other non-critical assets. This way, they will only be loaded when they come into the viewport, improving initial page load times.
- Code Optimization: Review your codebase for potential performance bottlenecks, such as inefficient algorithms or unnecessary iterations. Optimize these areas to improve the overall efficiency of your application.
- GZIP Compression: Configure your server to enable GZIP compression for responses. This reduces the size of data sent over the network, resulting in faster page loading times.
- CDN Usage: Leverage content delivery networks (CDNs) to serve static assets from geographically distributed servers. This can reduce latency and improve the loading speed of your website.
- Database Query Optimization: Optimize your database queries by ensuring they are properly indexed, avoiding unnecessary joins, and utilizing query optimization techniques specific to your database technology.
- Browser Caching: Configure appropriate caching headers for static assets, allowing browsers to cache them locally. This reduces the need for repeated requests, improving performance for returning visitors.

DM Companion is still a work in progress and will be optimized before I consider it complete. This is a minimum viable product at the moment.
</p>
<br>
<h2>Lessons Learned</h2>
<p>This is the first major application that I've written with React.js. Utilizing React to deliver reusable components was a game-changer in terms of making this application.

- I used React from start to finish (the app is still a WIP... so not really 'finished') utilizing it for the entire front end.
- This uses the MVC design paradign and was great practice for utilizing the separation of concerns when it comes to code management and organization.
- The importance of performance optimization and website accessibility
- The importance of testing and debugging in the development process
- The significance of keeping up with the latest web development technologies and trends
- The benefit of using version control with Git and hosting the code on Github</p>
<br>
