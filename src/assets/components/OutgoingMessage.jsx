import React from 'react';

const OutgoingMessage = ({ message, time }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            margin: '10px 0'
        }}>
            <div style={{
                background: '#0078fe',
                color: '#fff',
                padding: '10px 16px',
                borderRadius: '16px 16px 4px 16px',
                maxWidth: '60%',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
                <div style={{ wordBreak: 'break-word', textAlign: 'left' }}>
                    {message}
                </div>
            </div>
            <div style={{
                fontSize: '0.75rem',
                color: '#888',
                marginTop: '8px',
                marginBottom: '8px', 
                textAlign: 'right',
                maxWidth: '60%'
            }}>
                {time}
            </div>
        </div>
    );
};

export default OutgoingMessage;