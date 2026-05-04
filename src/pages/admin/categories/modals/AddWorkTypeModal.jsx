import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddWorkTypeModal = ({ onClose, onAdd }) => {
  const [workTypeName, setWorkTypeName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!workTypeName.trim()) {
      setError('Work type name is required');
      return;
    }

    onAdd(workTypeName.trim());
    setWorkTypeName('');
    setError('');
  };

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E8E3D6]">
          <h2 className="text-xl font-bold text-[#1A1B1C]">Add Work Type</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#f0f0f0] rounded-lg transition-colors cursor-pointer"
          >
            <X size={20} className="text-[#222424]" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1A1B1C] mb-2">
              Work type name
            </label>
            <input
              type="text"
              value={workTypeName}
              onChange={(e) => {
                setWorkTypeName(e.target.value);
                setError('');
              }}
              placeholder="Work type name"
              className="w-full px-4 py-2.5 border border-[#E8E3D6] rounded-lg bg-[#FDF9EE] text-[#1A1B1C] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#063D2E] focus:border-transparent"
            />
            {error && <p className="text-xs text-[#C62828] mt-1">{error}</p>}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border border-[#D3C085] text-[#1A1B1C] font-semibold rounded-lg hover:bg-[#FDF9EE] transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWorkTypeModal;
