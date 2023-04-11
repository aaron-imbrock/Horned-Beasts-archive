import React from 'react';


const imgs = [
    'https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp',
    'https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp',
    'https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp'
]

// The Main component needs to pass title, imageUrl, and description into 
// each HornedBeast component. 

// For the purpose of this lab, you can pass whatever title, url and description 
// that you want into each HornedBeast component.

// - The HornedBeast component needs to contain 
// an `<h2>` that displays the title of the animal, 
// an `<img>` element with src, alt and title attributes, 
// and a `<p>` that displays the description.

class Main extends React.Component {
    render() {
        return (
            <>
                <HornedBeast title={'Big Rhino'} src={imgs[0]} alt={'Grey Rhino'} description={'Rhino running'} />
                <HornedBeast title={'Blue Pelicon'} src={imgs[1]} alt={'Blue Pelicon'} description={'Blue Pelicon running'} />
                <HornedBeast title={'Pink Flamingo'} src={imgs[2]} alt={'Pink Flamingo'} description={'Pink Flamingo running'} />
            </>
        )
    }
}

class HornedBeast extends React.Component {
    render() {
        return (
        <>
            <h2>{this.props.title}</h2>
            <img src={this.props.image} alt={this.props.alt} title={this.props.title} width="200"></img>
            <p>{this.props.description}</p>
        </>
        )
    }
}
export default Main;