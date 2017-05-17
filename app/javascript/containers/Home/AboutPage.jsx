import React from 'react';

const AboutPage = () => (
  <div className="row">
    <div className="col-lg-6 col-lg-offset-3 well">
      <h3 className="text-center">ABOUT</h3>
      <hr />
      <h3>What?</h3>
      <p>
        Socify is a social networking app built using Ruby on Rails. It&apos;s free &amp; completely open source. You can check the source on <a href="https://github.com/sudharti/socify">Github</a>. Also take a look at the demo deployed to <a href="http://socifyapp.herokuapp.com/">Heroku</a>.
      </p>
      <br />
      <h3>Why?</h3>
      <p>
        I am not building the next Facebook. Given that there are enough social networks already I don&spos;t want to end up launching one. Pointless! So why am I building? I want to try and learn how to develop a social network and in the process show you how easy it is done using Rails. Here is the <a href="https://medium.com/@sudharshanmuralidharaniyer/eb31da569233">Blog post</a>.
      </p>
      <br />
      <h3>How?</h3>
      <p>
        As stated above it&apos;s a Ruby on Rails application.
        Frontend is developed using Twitter Bootstrap.
        Database is SQLite for development and Postgresql for production.
      </p>
      <br />
      <a href="https://github.com/scaffeinate/socify" className="btn btn-warning">
        Star it
      </a>
      <a href="https://github.com/scaffeinate/socify" className="btn btn-primary">
        Fork it
      </a>
    </div>
  </div>
);

export default AboutPage;
