import React, { Component } from 'react';

import './content-section.css';

class ContentSection extends Component {
    render () {
        let styles = {
            flexDirection: this.props.orientation
        };
        let inView = this.props.titleInView ? "in-view" : "";
        return (
            <div className="ContentSection">
                <h2 className={"ContentSection-title " + inView}>{this.props.title}</h2>
                <div className="ContentSection-content" style={styles}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ContentSection.propTypes = {
    children: React.PropTypes.any.isRequired,
    title: React.PropTypes.string.isRequired,
    titleInView: React.PropTypes.bool,
    orientation: React.PropTypes.oneOf(['row', 'column'])
};

ContentSection.defaultProps = {
    titleInView: true,
    orientation: 'column'
};

export default ContentSection;