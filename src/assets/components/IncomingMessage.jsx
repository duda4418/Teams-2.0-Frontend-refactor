import React from 'react';

const bubbleStyle = {
    maxWidth: '70%',
    margin: '8px 0',
    padding: '12px 16px',
    background: '#f1f0f0',
    borderRadius: '18px 18px 18px 4px',
    alignSelf: 'flex-start',
    color: '#222',
    fontSize: '16px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    wordBreak: 'break-word',
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
};

function IncomingMessage({ text, sender, time }) {
    return (
        <div style={containerStyle}>
            {sender && (
                <span style={{ fontSize: '12px', color: '#888', marginBottom: 2 }}>
                    {sender}
                </span>
            )}
            <div style={{ ...bubbleStyle, textAlign: 'left' }}>
                {text}
            </div>
            {time && (
                <span style={{ fontSize: '11px', color: '#bbb', marginTop: 2 }}>
                    {time}
                </span>
            )}
        </div>
    );
}

export default IncomingMessage;