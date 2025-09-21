import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="alert alert-danger m-4" role="alert">
      {message}
    </div>
  );
};

export default ErrorMessage;