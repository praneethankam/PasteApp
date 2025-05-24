import React from 'react';
import { useSearchParams } from 'react-router';
import { useSelector } from 'react-redux';

const Viewpaste = () => {
  const [searchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteid');
  const pastes = useSelector((state) => state.paste.pastes);
  const paste = pastes.find((item) => item._id === pasteId);

return (
  <div className="bg-gray-800 flex-grow flex flex-col items-center justify-center p-6">
    <div className="text-2xl font-semibold text-white mb-6">View Paste</div>

    <div className="w-full max-w-2xl bg-gray-700 rounded-2xl shadow-xl p-6 space-y-4">
      
      <input
        type="text"
        value={paste?.title || ''}
        disabled
        className="w-full bg-gray-600 text-white p-3 rounded-md font-medium placeholder-gray-400 border border-gray-500 focus:outline-none cursor-not-allowed"
      />

      <textarea
        value={paste?.value || ''}
        disabled
        className="w-full h-[400px] bg-gray-600 text-white p-4 rounded-md resize-none border border-gray-500 focus:outline-none cursor-not-allowed"
      />
    </div>
  </div>
);

};

export default Viewpaste;
