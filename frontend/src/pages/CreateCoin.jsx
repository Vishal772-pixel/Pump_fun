import React from 'react';
import CreateCoinForm from '../components/CreateCoinForm';

function CreateCoin() {
  return (
    <div className="flex justify-center items-start min-h-screen w-full overflow-y-auto pt-8">
      <CreateCoinForm />
    </div>
  );
}

export default CreateCoin; 