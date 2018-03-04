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
    <blockquote class="twitter-tweet" data-lang="en">
      <p lang="en" dir="ltr">
        🏥 Looks like{" "}
        <a href="https://t.co/sDm7NeMipJ">https://t.co/sDm7NeMipJ</a> (norwegian
        health data) is active again, maybe time to have second go at{" "}
        <a href="https://t.co/fvDhn5VkP0">https://t.co/fvDhn5VkP0</a>{" "}
        (emergencyrooms(dot).no)?!? Would be a great project for looking at{" "}
        <a href="https://twitter.com/gatsbyjs?ref_src=twsrc%5Etfw">@gatsbyjs</a>{" "}
        and getting to play with my fav{" "}
        <a href="https://twitter.com/Netlify?ref_src=twsrc%5Etfw">@Netlify</a>{" "}
        :D
      </p>&mdash; Benedicte Raae (@raae){" "}
      <a href="https://twitter.com/raae/status/970260227751899136?ref_src=twsrc%5Etfw">
        March 4, 2018
      </a>
    </blockquote>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    />
  </div>
);

export default IndexPage;
