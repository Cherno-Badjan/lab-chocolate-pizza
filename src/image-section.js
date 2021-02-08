import React from 'react';
import chocoPizza from './choco-pizza.png';
import mailIcon from './mail-icon.png';

export default class ImageSection extends React.Component {
    render() {
        return (
            <section>
                <span>
                    <h3>Chocolate Pizza</h3>
                    <h5>POSTED ON 15 DEC 2013 / DESSERTS</h5>
                    <img alt='print-logo' src={mailIcon} />
                </span>
                <img alt='cake' src={chocoPizza} />
            </section>
        )
    }
}