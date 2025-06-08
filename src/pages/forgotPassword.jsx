import React from 'react';
import RequestPasswordRecoveryForm from '../features/auth/RequestPasswordRecoveryForm';

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f0f9f9]">
      <RequestPasswordRecoveryForm />
    </div>
  );
};

export default ForgotPassword;
