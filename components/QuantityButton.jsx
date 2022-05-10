const QuantityButton = ({ decreaseQuantity, increaseQuantity, quantity }) => {
  return (
    <div className='m-2 grid grid-cols-2 gap-x-1 pt-2'>
      <label htmlFor='quantity' className='text-xl font-semibold text-black'>
        Quantity:
      </label>
      <div className='border rounded-lg w-11/12 flex items-center justify-between bg-white px-2'>
        <button
          className='text-lg h-8 text-hbgreen'
          onClick={e => decreaseQuantity(e)}
          data-test='decrease-button'
        >
          -
        </button>
        <input
          type='number'
          id='quantity'
          className='w-14 h-8 no-spin border-0 text-center'
          value={quantity}
          readOnly
        />
        <button
          className='text-lg h-8 text-hbgreen'
          onClick={e => increaseQuantity(e)}
          data-test='increase-button'
        >
          +
        </button>
      </div>
    </div>
  );
};
export default QuantityButton;
