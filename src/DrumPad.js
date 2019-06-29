import React, { Component } from 'react';

const onStyle = { transform: "scale(0.95)", boxShadow: "1px 1px 4px 4px cyan, -1px -1px 4px 4px cyan" };
const offStyle = { transform: "scale(1)", boxShadow: "none" };

class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.keyCode === this.props.letter.charCodeAt()) {
            this.handleClick()
        }
    }

    handleClick = () => {
        if (this.props.power) {
            this.audio.play()
            this.audio.currentTime = 0
            this.props.handleDisplay(this.props.id)
            this.audio.volume = this.props.volume;
            this.setState({ playing: true })
            setTimeout(() => {
                this.setState({ playing: false })
            }, 100);
        }

    }

    render() {
        const style = !this.props.power ? { background: '#be6a4c' } : this.state.playing ? onStyle : offStyle;

        return (
            <div
                className='drum-pad'
                style={style}
                id={this.props.id}
                onClick={this.handleClick}>
                <h1>{this.props.letter}</h1>
                <audio
                    ref={ref => this.audio = ref}
                    className='clip'
                    src={this.props.src}
                    id={this.props.letter}>
                </audio>
            </div>)
    }
}

export default DrumPad;