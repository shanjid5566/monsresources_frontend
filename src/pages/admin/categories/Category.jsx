import React, { useState } from 'react';
import CategoryList from './components/CategoryList';
import WorkTypeList from './components/WorkTypeList';
import AddCategoryModal from './modals/AddCategoryModal';
import AddWorkTypeModal from './modals/AddWorkTypeModal';

const Category = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showWorkTypeModal, setShowWorkTypeModal] = useState(false);
  const [categories, setCategories] = useState([
    { id: 1, name: 'Engineering' },
    { id: 2, name: 'Design' },
    { id: 3, name: 'Product' },
    { id: 4, name: 'Marketing' },
    { id: 5, name: 'Operation' },
  ]);
  const [workTypes, setWorkTypes] = useState([
    { id: 1, name: 'Full-Time' },
    { id: 2, name: 'Remote' },
    { id: 3, name: 'Contract' },
  ]);

  const handleAddCategory = (categoryName) => {
    const newCategory = {
      id: categories.length + 1,
      name: categoryName,
    };
    setCategories([...categories, newCategory]);
    setShowCategoryModal(false);
  };

  const handleAddWorkType = (workTypeName) => {
    const newWorkType = {
      id: workTypes.length + 1,
      name: workTypeName,
    };
    setWorkTypes([...workTypes, newWorkType]);
    setShowWorkTypeModal(false);
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  const handleDeleteWorkType = (id) => {
    setWorkTypes(workTypes.filter((type) => type.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* Categories Section */}
      <div>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0C0C0C] mb-2">
              Powerful Settings Control for Complete Job Management
            </h1>
            <p className="text-gray-600">
              Customize work categories, job-type from your admin settings panel.
            </p>
          </div>
        </div>

        {/* Work Category Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#1A1B1C]">Work Category</h2>
            <button
              onClick={() => setShowCategoryModal(true)}
              className="px-4 py-2 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors cursor-pointer"
            >
              Add Category
            </button>
          </div>
          <CategoryList 
            categories={categories} 
            onDelete={handleDeleteCategory}
          />
        </div>
      </div>

      {/* Work Type Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#1A1B1C]">Work type</h2>
          <button
            onClick={() => setShowWorkTypeModal(true)}
            className="px-4 py-2 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors cursor-pointer"
          >
            Add Work Type
          </button>
        </div>
        <WorkTypeList 
          workTypes={workTypes} 
          onDelete={handleDeleteWorkType}
        />
      </div>

      {/* Modals */}
      {showCategoryModal && (
        <AddCategoryModal
          onClose={() => setShowCategoryModal(false)}
          onAdd={handleAddCategory}
        />
      )}

      {showWorkTypeModal && (
        <AddWorkTypeModal
          onClose={() => setShowWorkTypeModal(false)}
          onAdd={handleAddWorkType}
        />
      )}
    </div>
  );
};

export default Category;
