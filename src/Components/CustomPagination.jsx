export default function CustomPagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  console.log("Total Pages:", Math.floor(totalPages * 0.75));
  console.log("Total Pages:", Math.floor(totalPages * 0.25));

  if (totalPages <= 1) return null;
  let pages = [];
  if (totalPages <= 7) {
    pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else if (currentPage > Math.floor(totalPages * 0.75)) {
    pages = [
      1,
      2,
      currentPage - 1,
      currentPage,
      currentPage !== totalPages && totalPages,
    ];
  } else if (currentPage <= Math.ceil(totalPages * 0.25)) {
    pages = [1, 2, 3, 4, 5, "...", totalPages];
  } else {
    pages = [
      1,
      2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  }

  return (
    <div className="flex justify-center items-center mt-10 pb-10 gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-3 py-1 rounded-md ${
          currentPage === 1
            ? "dark:text-white text-gray-600 cursor-not-allowed"
            : " text-white"
        }`}
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page === "..." ? currentPage + 4 : page)}
          className={`px-3 py-1 rounded-md ${
            currentPage === page
              ? "bg-primaryBlue text-white"
              : " dark:text-white text-black"
          }`}
        >
          {page}
        </button>
      ))}{" "}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages
            ? "dark:text-white text-gray-600 cursor-not-allowed"
            : " text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
}
