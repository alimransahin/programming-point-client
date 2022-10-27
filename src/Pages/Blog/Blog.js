import React from 'react';

const Blog = () => {
    return (
        <div>
            <h4>
                What is Cors?
            </h4>
            <p>
                <b>Ans: </b> Cross-Origin Resource Sharing- CORS is an HTTP-header based mechanism that allows a server to indicate any origins  other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request
            </p>

            <br></br>
            <br></br>
            <h4>
                Why You are using firebase? What other options do you have to implement authentication?
            </h4>
            <p>
                <b>Ans: </b>Firebase is a web app development platform created by Google. It lets you develop the whole app on the front-end without any server-side code. At the same time, it does let you set up some server-side logic via Firebase Functions if you need to react to certain events  so you can send emails or push notifications or process the data after it is written.
                Its easy to start a project with Firebase or add a Firebase to your project. It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you dont have to send requests to get new data, you only need to subscribe once.
                The same applies for file storage. Quick setup authentication via the major providers like Google, Twitter, Facebook, GitHub. Https by default - secure http traffic without setting up certificates. Any static html/javascript content can be hosted.
            </p>
            <p>
                There are more other options do you have to implement authentication. Like
            </p>
            <ul>
                <li>Back4App</li>
                <li>Backendless</li>
                <li>Kuzzle</li>
                <li>Pubnub</li>
                <li>Kumulos</li>
                <li>Appwrite</li>
                <li>Deployd</li>
                <li>NHost</li>
                <li>AWS Amplify</li>
                <li>Heroku</li>
            </ul>
            <br></br>
            <br></br>
            <h4>
                How does the private router work?
            </h4>
            <p>
                <b>Ans: </b>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated
            </p>
            <br></br>
            <br></br>
            <h4>
                What is Node? How does Node work??
            </h4>
            <p>
                <b>Ans: </b>Node.js is an open source server environment. It is free. it runs on various platforms like Windows, Linux, Unix, Mac OS X, etc. it uses JavaScript on the server <br></br>
                Node.js can generate dynamic page content. It can create, open, read, write, delete, and close files on the server. Node.js can collect form data
                It can add, delete, modify data in your database
            </p>
        </div>
    );
};

export default Blog;