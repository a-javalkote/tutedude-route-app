import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About This App</h2>
      <p>This app demonstrates basic concepts in React including:</p>
      <ul>
        <li><strong>Routing:</strong> Using React Router to navigate between pages.</li>
        <li><strong>Form Validation:</strong> Validating user inputs like email and password.</li>
        <li><strong>React Bootstrap:</strong> Styling components with Bootstrap for a responsive UI.</li>
        <li><strong>Lazy Loading:</strong> The Form and About pages are loaded lazily using <code>React.lazy</code> and <code>Suspense</code>, which helps in improving the app's performance by splitting the bundle and loading components only when needed.</li>
      </ul>
      <p>Lazy loading is especially useful in large applications to reduce initial load time by deferring the loading of non-critical components.</p>
    </div>
  );
};

export default About;
