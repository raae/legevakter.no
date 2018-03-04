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

    <blockquote class="twitter-tweet" data-lang="en">
      <p lang="en" dir="ltr">
        🏥 [<a href="https://t.co/fvDhn5VkP0">https://t.co/fvDhn5VkP0</a> ]
        Played a little with the api, seems easy enough.{" "}
        <a href="https://t.co/HSirq5g5tO">https://t.co/HSirq5g5tO</a> gives me
        the default first 10 emergency rooms, adding{" "}
        <a href="https://twitter.com/search?q=%24top&amp;src=ctag&amp;ref_src=twsrc%5Etfw">
          $top
        </a>=100 gives me the max of 100 emergency rooms.{" "}
        <a href="https://twitter.com/hashtag/HelseNorge?src=hash&amp;ref_src=twsrc%5Etfw">
          #HelseNorge
        </a>{" "}
        <a href="https://twitter.com/hashtag/OpenData?src=hash&amp;ref_src=twsrc%5Etfw">
          #OpenData
        </a>{" "}
        <a href="https://twitter.com/hashtag/JAMStack?src=hash&amp;ref_src=twsrc%5Etfw">
          #JAMStack
        </a>
      </p>&mdash; Benedicte Raae (@raae){" "}
      <a href="https://twitter.com/raae/status/970271302480166912?ref_src=twsrc%5Etfw">
        March 4, 2018
      </a>
    </blockquote>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    />

    <blockquote class="twitter-tweet" data-lang="en">
      <p lang="en" dir="ltr">
        🏥 [<a href="https://t.co/fvDhn5VkP0">https://t.co/fvDhn5VkP0</a>]
        Getting the next 100 not as easy at it seems adding{" "}
        <a href="https://twitter.com/search?q=%24skip&amp;src=ctag&amp;ref_src=twsrc%5Etfw">
          $skip
        </a>{" "}
        as described in the documentation is resulting in 500 Internal Server
        Error.{" "}
        <a href="https://twitter.com/hashtag/HelseNorge?src=hash&amp;ref_src=twsrc%5Etfw">
          #HelseNorge
        </a>{" "}
        <a href="https://twitter.com/hashtag/OpenData?src=hash&amp;ref_src=twsrc%5Etfw">
          #OpenData
        </a>{" "}
        <a href="https://twitter.com/hashtag/JAMStack?src=hash&amp;ref_src=twsrc%5Etfw">
          #JAMStack
        </a>
      </p>&mdash; Benedicte Raae (@raae){" "}
      <a href="https://twitter.com/raae/status/970272048886018048?ref_src=twsrc%5Etfw">
        March 4, 2018
      </a>
    </blockquote>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    />

    <blockquote class="twitter-tweet" data-lang="en">
      <p lang="en" dir="ltr">
        🏥 [<a href="https://t.co/fvDhn5VkP0">https://t.co/fvDhn5VkP0</a>] I can
        get around this by asking per county as no county will have more than a
        100 emergency rooms. The param for Finmark would be:{" "}
        <a href="https://twitter.com/search?q=%24filter&amp;src=ctag&amp;ref_src=twsrc%5Etfw">
          $filter
        </a>=substringof(&#39;20&#39;,CountyCode).{" "}
        <a href="https://twitter.com/hashtag/HelseNorge?src=hash&amp;ref_src=twsrc%5Etfw">
          #HelseNorge
        </a>{" "}
        <a href="https://twitter.com/hashtag/OpenData?src=hash&amp;ref_src=twsrc%5Etfw">
          #OpenData
        </a>{" "}
        <a href="https://twitter.com/hashtag/JAMStack?src=hash&amp;ref_src=twsrc%5Etfw">
          #JAMStack
        </a>
      </p>&mdash; Benedicte Raae (@raae){" "}
      <a href="https://twitter.com/raae/status/970272614072619009?ref_src=twsrc%5Etfw">
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
