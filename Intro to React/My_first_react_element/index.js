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
      src: "https://files.codingninjas.in/coding-ninjas-24647.png",
      className: "dummy-img"
    });

    // Combine both elements using React.Fragment to render them together
    const container = React.createElement(React.Fragment, null, reactHeading, reactImg);
    console.log('container is ',container);

    // Create a root instance
    const root = ReactDOM.createRoot(document.getElementById('root'));

    // Render the combined elements
    root.render(container);