import React from "react";


const Paragraph = ({children, color}) => {
    return ( 
        <p style={{ color: color  }}>
            {children.toUpperCase()}
        </p>
    )
}

Paragraph.defaultProps = {
    color: 'red'
}

export default Paragraph