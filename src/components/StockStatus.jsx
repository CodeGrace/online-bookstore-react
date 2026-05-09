
// StockStatus.jsx
const StockStatus = ({ stock }) => {
  let statusContent;

  if (stock === 0) {
    statusContent = (
      <span className="text-red-600 font-semibold">Out of Stock</span>
    );
  } else if (stock < 5) {
    statusContent = (
      <span className="text-orange-500 font-semibold">
        Only {stock} left
      </span>
    );
  } else {
    statusContent = (
      <span className="text-green-600 font-semibold">In Stock ({stock})</span>
    );
  }

  return statusContent;
};

export default StockStatus;