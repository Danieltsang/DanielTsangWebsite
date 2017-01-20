import React, { Component } from 'react';
import './side-by-side-section.css';

class SideBySideSection extends Component {
    render () {
        let styles = {
            flexDirection: this.props.orientation
        };
        return (
            <div className="SideBySideSection">
                <h2>{this.props.title}</h2>
                <div className="SideBySideSection-content" style={styles}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

SideBySideSection.propTypes = {
    children: React.PropTypes.any.isRequired,
    title: React.PropTypes.string.isRequired,
    orientation: React.PropTypes.oneOf(['row', 'column'])
};

SideBySideSection.defaultProps = {
    orientation: 'column'
};

export default SideBySideSection;