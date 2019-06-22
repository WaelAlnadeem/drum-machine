import React, { Component } from 'react';

class VolumeControl extends Component {

    render() {
        const style = this.props.power ? { background: "#0ad82c" } : { background: "red", boxShadow: "none" };
        return (
            <div >
                <div>
                    <p>Power</p>
                    <button style={style} onClick={this.props.togglePower}></button>
                </div>
                <div>
                    <p>Volume</p>
                    <input value={this.props.volumeInput}
                        type="range"
                        min="1"
                        max="100"
                        onChange={this.props.changeVolume}>
                    </input>
                </div>

            </div>
        )
    }
}
export default VolumeControl;