export default function ({
  currentPage,
  setCurrentPage,
}: {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="join">
      <button
        className="join-item btn"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        «
      </button>
      <button className="join-item btn">Page {currentPage}</button>
      <button
        className="join-item btn"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        »
      </button>
    </div>
  );
}
