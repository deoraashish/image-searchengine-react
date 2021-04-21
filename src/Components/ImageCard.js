import React from 'react';


class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = { spans : 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans());
    }

    setSpans = () => {
        const imageHeight = this.imageRef.current.clientHeight;

        const spans = Math.ceil(imageHeight/10 + 1);

        this.setState({spans});

    }

    render() {
        let {descrtiption, urls} = this.props.image;

        return (
            <img style={{gridRowEnd: `span ${this.state.spans}`}} ref={this.imageRef} alt={descrtiption} src={urls.regular} />
        );
    }
}

export default ImageCard;