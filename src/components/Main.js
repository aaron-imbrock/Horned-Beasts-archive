import React from 'react';
import HornedBeast from './Hornedbeast';

const imgs = [
    'https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp',
    'https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp',
    'https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp'
]


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

export default Main;    