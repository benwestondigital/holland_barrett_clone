const EmptyBasket = () => {
  return (
    <div className='bg-[#eeeeef] h-96 p-6'>
    <div className='p-2 container'>
      <h2 className='font-semibold text-3xl pt-12 pl-12'>Your basket</h2>
      <div className='bg-white p-12 m-8 flex items-center justify-center'>
        <p className='text-xl'>You have no products in your basket</p>
      </div>
    </div>
  </div>
  )
}
export default EmptyBasket