import React from 'react';

type ErrorMessageProps = {
    message: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {


    return (
        <div id="error-message-container">
            <div id="error-message">{message}</div>
        </div>
    )
    
}

export default ErrorMessage;