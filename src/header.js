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
                <button><img alt='icons' src={fbLogo} /></button>
                <button><img alt='icons' src={twitLogo} /></button>
                <button><img alt='icons' src={gooLogo} /></button>
                <button><img alt='icons' src={instLogo} /></button>
                <button><img alt='icons' src={flickLogo} /></button>
                <button><img alt='icons' src={pintLogo} /></button>
                <button><img alt='icons' src={rssLogo} /></button>
                <button><img alt='icons' src={mailLogo} /></button>
                <h1>Delicious</h1>
                <h3>THE BEST FOOD BLOG ON THE WEB</h3>

            </header>
        );
    }
}