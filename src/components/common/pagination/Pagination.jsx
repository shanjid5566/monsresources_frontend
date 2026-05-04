import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Pagination Component
 * Props:
 * - currentPage: current page number (number)
 * - totalPages: total number of pages (number)
 * - onPageChange: callback for page change (function)
 * - siblingCount: number of pages to show around current page (default: 1)
 */

const Pagination = ({ currentPage, totalPages, onPageChange, siblingCount = 1 }) => {
  // Generate pagination array with smart ellipsis
  const generatePageNumbers = () => {
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

    const showLeftEllipsis = leftSiblingIndex > 2
    const showRightEllipsis = rightSiblingIndex < totalPages - 1

    const pages = []

    // Always show first page
    pages.push(1)

    // Add left ellipsis if needed
    if (showLeftEllipsis) {
      pages.push('...')
    } else if (leftSiblingIndex > 2) {
      // Show page 2 if no ellipsis
      for (let i = 2; i < leftSiblingIndex; i++) {
        pages.push(i)
      }
    }

    // Add pages around current page
    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      if (i !== 1 && i !== totalPages) {
        pages.push(i)
      }
    }

    // Add right ellipsis if needed
    if (showRightEllipsis) {
      pages.push('...')
    } else if (rightSiblingIndex < totalPages - 1) {
      // Show pages before last if no ellipsis
      for (let i = rightSiblingIndex + 1; i < totalPages; i++) {
        pages.push(i)
      }
    }

    // Always show last page if more than 1 page
    if (totalPages > 1 && !pages.includes(totalPages)) {
      pages.push(totalPages)
    }

    return pages
  }

  const pages = generatePageNumbers()

  if (totalPages <= 1) return null

  return (
    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-4 py-2 border border-[#063D2E] text-[#063D2E] font-semibold rounded hover:bg-[#063D2E] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex flex-wrap gap-2 justify-center">
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-[#484849] font-semibold"
              >
                ...
              </span>
            )
          }

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 flex items-center justify-center rounded font-semibold cursor-pointer transition-colors ${
                currentPage === page
                  ? 'bg-[#063D2E] text-white'
                  : 'border border-[#063D2E] text-[#063D2E] hover:bg-[#f0f0f0]'
              }`}
            >
              {page}
            </button>
          )
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-4 py-2 border border-[#063D2E] text-[#063D2E] font-semibold rounded hover:bg-[#063D2E] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        Next
        <ChevronRight size={18} />
      </button>
    </div>
  )
}

export default Pagination
