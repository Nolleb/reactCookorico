import React from 'react';


class Panel extends React.Component {
    render () {
        const panelStyle = {
            backgroundColor: this.props.primaryColor
        };
        return(
            <div className="panel" style={panelStyle}>
            </div>
        );
    }
}

export default Panel;