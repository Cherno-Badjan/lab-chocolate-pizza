import React from 'react';
import logo from './logo.png';
import fbLogo from './fb-icon.png';
import twitLogo from './twit-icon.png';
import gooLogo from './gp-icon.png';
import instLogo from './insta-icon.png';
import flickLogo from './flic-icon.png';
import pintLogo from './pint-icon.png';
import rssLogo from './rss-icon.png';
import mailLogo from './mail-icon.png';



export default class Header extends React.Component {
    render() {
        return (
            <header>
                <img alt='icons' src={logo} />
                <img alt='icons' src={fbLogo} />
                <img alt='icons' src={twitLogo} />
                <img alt='icons' src={gooLogo} />
                <img alt='icons' src={instLogo} />
                <img alt='icons' src={flickLogo} />
                <img alt='icons' src={pintLogo} />
                <img alt='icons' src={rssLogo} />
                <img alt='icons' src={mailLogo} />
                <h1>Delicious</h1>
                <h3>THE BEST FOOD BLOG ON THE WEB</h3>

            </header>
        );
    }
}