import React from 'react';
import logo from './fb-icon.png';

export default class Header extends React.Component {
    render() {
        return (
        <header>
            <img alt='icons' src={logo}/>
            <h1>Delicious</h1>
            <h3>THE BEST FOOD BLOG ON THE WEB</h3>
            <img alt='icons' src={logo}/>
            <img alt='icons' src={logo}/>
            <img alt='icons' src={logo}/>
            <img alt='icons' src={logo}/>
            <img alt='icons' src={logo}/>
            <img alt='icons' src={logo}/>
            <img alt='icons' src={logo}/>
            
        </header>
        );
    }
}