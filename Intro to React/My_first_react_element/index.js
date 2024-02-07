/*VANILLA JAVASCRIPT */

// const heading = document.createElement('h3');
// heading.textContent = 'adding this content from js to HTML';
// heading.className = 'h3-header';
// document.getElementById('root').append(heading);

/**REACT */

// const reactHeading = React.createElement('h2',{className : 'h2-head',children : 'Creating heading using react'});
// console.log('react Element',reactHeading);
// ReactDOM.createRoot(document.getElementById('root')).render(reactHeading);

    // Create the heading element
    const reactHeading = React.createElement('h2', { className: 'h2-head', children: 'Creating heading using React' });

    // Create the image element
    const reactImg = React.createElement("img", {
      src: "https://media.licdn.com/dms/image/D5612AQFSPUPv4Gcv_A/article-cover_image-shrink_720_1280/0/1690548047583?e=2147483647&v=beta&t=Mx7u9dxwvUM_PjIzw0GfD9Tkzl4yC2Xoh6xZdO3SRXM",
      className: "dummy-img"
    });


    /*****************JSX + REACT FRAGMENT ********************/

    const JSXprint = <React.Fragment>
                    <h1>About React Features</h1>
                    <ul>
                        <li><strong>JSX(JavaScript Syntax Extension):---</strong>
                        JSX is a combination of HTML and JavaScript. You can embed JavaScript objects inside the HTML elements. JSX is not supported by the browsers, as a result, Babel compiler transcompile the code into JavaScript code. JSX makes codes easy and understandable. It is easy to learn if you know HTML and JavaScript
                        </li><br></br>
                        <li><strong>Virtual DOM:---</strong>
                        DOM stands for Document Object Model. It is the most important part of the web as it divides into modules and executes the code. Usually, JavaScript Frameworks updates the whole DOM at once, which makes the web application slow. But react uses virtual DOM which is an exact copy of real DOM. Whenever there is a modification in the web application, the whole virtual DOM is updated first and finds the difference between real DOM and Virtual DOM.
                        </li><br></br>
                        <li><strong>Performance:--</strong>
                        As we discussed earlier, react uses virtual DOM and updates only the modified parts. So , this makes the DOM to run faster. DOM executes in memory so we can create separate components which makes the DOM run faster.
                        </li><br></br>
                        <li><strong>Component Based:</strong>
                        React.js divides the web page into multiple components as it is component-based. Each component is a part of the UI design which has its own logic and design as shown in the below image. So the component logic which is written in JavaScript makes it easy and run faster and can be reusable.
                        </li><br></br>
                        <li><strong>React helps in creating SINGLE PAGE APPLICATION efficiently</strong>
                        </li>
                    </ul>
                    </React.Fragment>

    // Combine both elements using React.Fragment to render them together
    const container = React.createElement(React.Fragment, null, reactHeading, reactImg, JSXprint);
    console.log('container is ',container);

    // Create a root instance
    const root = ReactDOM.createRoot(document.getElementById('root'));

    // Render the combined elements
    root.render(container);


/************** REACT COMPONENTS ****************/

function App(){
    return (<>
            <h1>Functional Component</h1>
            <p>Above heading done using functional component in React</p>
            <Arrowapp/>
            </>
    )
}

const Arrowapp = () => (
    <h2>This done using arrow function</h2>
)

ReactDOM.createRoot(document.getElementById('component')).render(<App/>);
