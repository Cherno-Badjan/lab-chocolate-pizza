import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className='logo'>
                    <img alt='icons' src={'../logo.png'} />
                    <h1>Delicious</h1>
                    <p>THE BEST FOOD BLOG ON THE WEB</p>
                </div>
                <div className='social'>
                    <a href='www.facebook.com'><img alt='icons' src={'../fb-icon.png'} /></a>
                    <a href='www.twitter.com'><img alt='icons' src={'../twit-icon.png'} /></a>
                    <a href='www.google.com'><img alt='icons' src={'../gp-icon.png'} /></a>
                    <a href='www.instagram.com'><img alt='icons' src={'../insta-icon.png'} /></a>
                    <a href='www.flickr.com'><img alt='icons' src={'../flic-icon.png'} /></a>
                    <a href='www.pinterest.com'><img alt='icons' src={'../pint-icon.png'} /></a>
                    <a href='www.rss.com'><img alt='icons' src={'../rss-icon.png'} /></a>
                    <a href='www.gmail.com'><img alt='icons' src={'../mail-icon.png'} /></a>
                </div>

            </header>
        );
    }
}