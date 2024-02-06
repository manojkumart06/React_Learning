const heading = document.createElement('h3');
heading.textContent = 'adding this content from js to HTML';
heading.className = 'h3-header';
document.getElementById('root').append(heading);