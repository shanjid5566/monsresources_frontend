import React from 'react';
import { Trash2 } from 'lucide-react';

const CategoryList = ({ categories, onDelete }) => {
  return (
    <div className="bg-[#FDF9EE] rounded-lg p-6 border border-[#E8E3D6]">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#D3C085] rounded-full hover:bg-[#f9f9f9] transition-colors group"
          >
            <span className="text-sm font-medium text-[#1A1B1C]">
              {category.name}
            </span>
            <button
              onClick={() => onDelete(category.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-1 hover:bg-[#FFEBEE] rounded-full"
              title="Delete category"
            >
              <Trash2 size={14} className="text-[#C62828]" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
