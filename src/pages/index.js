import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div>
    <h1>Hello peeps</h1>
    <p>
      Once apon a time I created an iPhone app called "Legevakter i Norge"
      (Emergency Rooms in Norway).
    </p>
    <p>
      Then the API was shut down, life came in the way and more importantly;
      maintaining an iPhone app is a painful thing.
    </p>
    <p>
      Today (March 4th, 2018) I found the API was back up! So the plan is to
      slowly build it back up, but this time as an easy to maintain web/JAMStack
      app.
    </p>
    <h2>JAMStack plan</h2>
    <p>Gatsby deployed on Netlify with Mapbox for the map feature.</p>
    <h2>Journal</h2>
    <p>
      I tweet as I code, resulting in a
      <a href="https://twitter.com/i/moments/970276387901886465">
        journal you can find on Twitter.
      </a>
    </p>
  </div>
);

export default IndexPage;
