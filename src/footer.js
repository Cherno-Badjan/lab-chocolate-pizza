import React from 'react';



export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <img className='van' alt='vanessa-stevenson' src={'../van-pic.png'} />
                <h5>Vanessa Stevenson</h5>
                <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                <button>SHARE RECIPE</button>
                <img alt='icon' src={'../small-logo.png'} />
            </footer>
        )
    }
}