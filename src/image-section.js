import React from 'react';


export default class ImageSection extends React.Component {
    render() {
        return (
            <section>
                <span>
                    <h3>Chocolate Pizza</h3>
                    <h5>POSTED ON 15 DEC 2013 / DESSERTS</h5>
                    <img alt='print-logo' src={'../print-icon.png'} />
                </span>
                <img alt='cake' src={'../choco-pizza.png'} />
            </section>
        )
    }
}