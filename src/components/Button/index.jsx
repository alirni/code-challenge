import classNames from 'classnames';

const Button = ({ title, onclick, type = 'primary', className, disabled = false }) => {
  const buttonStyle = {
    primary: 'bg-primary-default text-black hover:bg-primary-dark',
    secondary: 'bg-secondary-default text-black hover:bg-secondary-dark',
    important: 'bg-important-default text-black hover:bg-important-dark',
    disabled: 'bg-white text-gray-500 cursor-not-allowed',
  };

  return (
    <div
      className={classNames(
        'px-6 py-2 rounded cursor-pointer text-center',
        buttonStyle[disabled ? 'disabled' : type],
        className
      )}
      onClick={!disabled ? onclick : () => {}}
    >
      {title}
    </div>
  );
};

export default Button;
