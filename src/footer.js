import React from 'react';
import vanessa from './van-pic.png';
import miniLogo from './small-logo.png';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <img alt='vanessa-stevenson' src={vanessa} />
                <h5>Vanessa Stevenson</h5>
                <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                <button>SHARE RECIPE</button>
                <img alt='icon' src={miniLogo} />
            </footer>
        )
    }
}