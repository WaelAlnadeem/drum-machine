import React, { Component } from 'react';
import DrumPad from './DrumPad';
import VolumeControl from './VolumeControl';
import './App.css';

const data = [
    { id: 'snare', keycode: 81, letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
    { id: 'bass 1', keycode: 87, letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
    { id: 'bongo', keycode: 69, letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
    { id: 'tom tom', keycode: 65, letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
    { id: 'bass 3', keycode: 83, letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
    { id: 'shotgun', keycode: 68, letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
    { id: 'high hat', keycode: 90, letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
    { id: 'drum hit', keycode: 88, letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
    { id: 'laser', keycode: 67, letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav' },
];


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: '',
            volume: 0.5,
            volumeInput: 50,
            power: false
        }
    }

    handleDisplay = (display) => this.setState({ display })

    togglePower = () => {
        const message = this.state.power ? '' : 'Welcome';
        this.setState({
            power: !this.state.power,
            display: message
        });
        setTimeout(() => {
            this.setState({ display: '' });
        }, 1500);
    }

    changeVolume = (e) => {
        const volume = e.target.value / 100;
        const message = "Volume: " + e.target.value;
        this.setState({
            volume: volume,
            volumeInput: e.target.value,
            display: message
        })
    }

    render() {

        return (<div id='drum-machine'>
            <div className='container'>
                <div className="machine">
                    <div id='Drumpad'>
                        {data.map((data, i) => (
                            <DrumPad key={i}
                                id={data.id}
                                letter={data.letter}
                                src={data.src}
                                handleDisplay={this.handleDisplay}
                                power={this.state.power}
                                volume={this.state.volume}
                            />
                        ))}
                    </div>
                    <div className='volumePower'>
                        <div id='display'>
                            {this.state.display}
                        </div>
                        <VolumeControl className='volumePower'
                            volumeInput={this.state.volumeInput}
                            togglePower={this.togglePower}
                            changeVolume={this.changeVolume}
                            power={this.state.power}
                            handleDisplay={this.handleDisplay}

                        />
                    </div>

                </div>


            </div>
        </div>)
    }
}

export default App;