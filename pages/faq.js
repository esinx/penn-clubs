import PropTypes from 'prop-types'

import renderPage from '../renderPage.js'
import { Container } from '../components/common/Container'
import { Line } from '../components/common/Line'
import { SNOW } from '../constants/colors.js'

const Question = ({ title, children }) => (
  <p>
    <b className="is-size-5">{title}</b>
    <br />
    {children}
    <br />
    <br />
  </p>
)

Question.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const FAQ = () => (
  <Container background={SNOW}>
    <h1 className="is-size-2" style={{ paddingBottom: '2rem' }}>
      Frequently Asked Questions
    </h1>
    <p>
      <Question title="What is Penn Clubs?">
        Penn Clubs is meant to be your central source of information about
        student organizations at the University of Pennsylvania. Keep
        discovering new clubs throughout the year, not just at the SAC Fair.
      </Question>
      <Question title="Why is this a beta?">
        This is the public beta version of Penn Clubs, which means we’re still
        working out some kinks and (more importantly) adding useful features.
        Please be patient as we improve the site! The reason we decided to roll
        out a beta is so that you can use Penn Clubs to find and join clubs this
        fall.
        <br />
        We’re so excited to let everyone at Penn contribute to the development
        of Penn Clubs! Your feedback is incredibly important to us. Have any
        questions or comments? Find any bugs?{' '}
        <a href="https://airtable.com/shrCsYFWxCwfwE7cf">
          Please let us know on our feedback form.
        </a>
      </Question>
      <Line />
      <Question title="Why do I have to log in?">
        Logging in allows us to create an account for you on Penn Clubs. This
        gives you access to many useful and upcoming features! When you click
        the heart button on a club, it will be saved to your Favorites list. You
        can use this to keep track of clubs you’re interested in, or a part of.
        You can also be invited to join club Member lists. Finally, you'll need
        to log in if you want to use your administrator permissions to edit a
        club page.
      </Question>
      <Question title="How do I use this site?">
        The #1 way to use this site is to browse clubs at Penn! You can:
        <ul
          style={{
            listStyleType: 'disc',
            marginLeft: '2rem',
            marginTop: '0.5rem',
          }}
        >
          <li>
            Search for clubs by name, and use filters like Type (tags that
            describe the club), Size (number of members), and Applications (if
            applications are required to join)
          </li>
          <li>Add clubs to your Favorites list to keep track of them</li>
          <li>
            Browse information that clubs post: description, how to join, member
            testimonials
          </li>
        </ul>
        <br />
        If you run a club, make sure your club has a page on Penn Clubs! This
        lets other students find out about your organization and how to get
        involved.
      </Question>
      <Question title="How do I edit an organization’s profile?">
        You’ll need to have administrator permission for that organization.
        We’ve invited people as administrators based on information submitted by
        clubs to SAC during Spring 2019.
        <ul
          style={{
            listStyleType: 'disc',
            marginLeft: '2rem',
            marginTop: '0.5rem',
          }}
        >
          <li>
            If you did not receive administrator permission and you believe you
            should have, let us know at{' '}
            <a href="mailto:contact@pennclubs.com">contact@pennclubs.com</a> and
            we’ll work with you to verify your request.
          </li>
          <li>
            If your club did not submit this information to SAC, we’ve been
            contacting clubs by their listed email to ask for the names of
            people who need administrator permission. You can also email us at{' '}
            <a href="mailto:contact@pennclubs.com">contact@pennclubs.com</a> and
            we’ll work with you to verify your request.
          </li>
        </ul>
        <br />
        Note that there are 2 levels of administrators: Officers and Owners.
        Officers are able to edit the page, invite other members, and grant
        administrator permissions. In addition to those abilities, Owners are
        able to deactivate or delete the club page.
      </Question>
      <Question title="Why I can’t find an organization on Penn Clubs?">
        Sorry about that! We’re in the process of making Penn Clubs as
        comprehensive as possible, creating the first complete directory of
        student organizations at Penn. Please fill out the{' '}
        <a href="https://airtable.com/shrCsYFWxCwfwE7cf">feedback form</a> as a
        “Missing Club” and tell us more about what’s missing. If you’re in
        charge of this club, please enter your email so that we can give you
        administrator permission to edit the club page that we’ll create for
        you.
      </Question>
      <Question title="I have another question!">
        <a href="https://airtable.com/shrCsYFWxCwfwE7cf">
          Please let us know on our feedback form :)
        </a>
      </Question>
      <Line />
      <Question title="Special Thanks">
        Thank you to the organizations below for their support in launching Penn
        Clubs! We're excited to continue building this valuable resource
        together.
        <br />
        <div>
          {[
            {
              name: 'Student Activities Council',
              image: '/static/img/collaborators/sac.png',
              url: 'https://sacfunded.net/',
            },
            {
              name: 'Undergraduate Assembly',
              image: '/static/img/collaborators/ua.png',
              url: 'https://pennua.org/',
            },
          ].map(({ name, url, image }) => (
            <a href={url} target="_blank" key={name}>
              <img
                style={{ maxWidth: 100, verticalAlign: 'middle', margin: 10 }}
                src={image}
                alt={name}
                title={name}
              />
            </a>
          ))}
        </div>
      </Question>
    </p>
  </Container>
)

export default renderPage(FAQ)
