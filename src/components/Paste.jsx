import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { removefrompastes } from '../redux/pasteSlice';
import { Link } from 'react-router-dom';

const Paste = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const pastes = useSelector((state) => state.paste.pastes);

  const filterdata = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(search.toLowerCase())
  );

  function handledelete(pasteId) {
    dispatch(removefrompastes(pasteId));
  }

  function handleCopy(value) {
    navigator.clipboard.writeText(value);
    toast.success('Copied to clipboard');
  }

  function handleShare(value) {
    if (navigator.share) {
      navigator
        .share({
          title: 'Shared Paste',
          text: value,
        })
        .then(() => console.log('Shared successfully!'))
        .catch(() => toast.error('Share failed'));
    } else {
      toast.error('Sharing is not supported in your browser');
    }
  }

  return (
    <div className="flex-grow flex flex-col items-center bg-blue-950  p-4 text-white">
      <input
        className="bg-gray-700 text-white p-2 h-10 w-3/5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="search"
        placeholder="Search pastes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex flex-col space-y-4 mt-8 w-3/5">
        {filterdata.length > 0 ? (
          filterdata.map((paste) => (
            <div
              key={paste._id}
              className="bg-gray-800 border border-gray-600 rounded-xl p-4 space-y-3 shadow-md"
            >
              <div className="text-xl font-semibold">{paste.title}</div>
              <pre className="bg-gray-900 p-3 rounded max-h-28 overflow-hidden text-sm whitespace-pre-wrap break-words">
                {paste.value}
              </pre>
              <div className="flex flex-wrap justify-between gap-2 text-sm">
                <button
                  onClick={() => handleCopy(paste.value)}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-md"
                >
                  Copy
                </button>
                <button
                  onClick={() => handledelete(paste._id)}
                  className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded-md"
                >
                  Delete
                </button>
                <Link
                  to={`/pastes/id?pasteid=${paste._id}`}
                  className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded-md text-center"
                >
                  View
                </Link>
                <button
                  onClick={() => handleShare(paste.value)}
                  className="bg-yellow-500 hover:bg-yellow-600 px-4 py-1 rounded-md"
                >
                  Share
                </button>
                <Link
                  to={`/?pasteId=${paste._id}`}
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-1 rounded-md text-center"
                >
                  Edit
                </Link>
              </div>
              <div className="text-right text-xs text-gray-400">
                {new Date(paste.CreatedAt).toLocaleString()}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-300">No Pastes Found</div>
        )}
      </div>
    </div>
  );
};

export default Paste;
