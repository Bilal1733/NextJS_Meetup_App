import Link from 'next/link';
import classes from './MainNavigation.module.css';
import { Fragment } from 'react';

function MainNavigation() {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link href="/">All Meetups</Link>
            </li>
            <li>
              <Link href="/new-meetup">Add New Meetup</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default MainNavigation;
