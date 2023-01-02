import classNames from 'classnames';

const Button = ({ title, onclick, type = 'primary', className }) => {
  const buttonStyle = { primary: 'bg-white text-black' };

  return (
    <div
      className={classNames('px-4 py-2 rounded cursor-pointer', buttonStyle[type], className)}
      onClick={onclick}
    >
      {title}
    </div>
  );
};

export default Button;
