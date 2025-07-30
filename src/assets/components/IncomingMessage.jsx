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
            <div style={{ ...bubbleStyle, textAlign: 'left' }}>
                {sender && (
                    <div style={{ fontWeight: 'bold', fontSize: '0.75rem', color: '#555'}}>
                        {sender}
                    </div>
                )}
                <div>
                    {text}
                </div>
            </div>
            {time && (
                <span style={{ fontSize: '0.6875rem', color: '#bbb', marginBottom: 6 }}>
                    {time}
                </span>
            )}
        </div>
    );
}

export default IncomingMessage;