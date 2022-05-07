const NavIcon = ({ Icon, text }) => {
  return (
    <div className='text-white flex h-12 w-12 flex-col mx-2 cursor-pointer items-center'>
      <Icon className='h-6 mx-auto ' />
      <p className="text-xs font-semibold">{text}</p>
    </div>
  );
};
export default NavIcon;
