import { Button } from '@mui/material';

const PrimaryButton = ({ children, variant = 'contained', ...props }) => {
  return (
    <Button
      variant={variant}
      color="primary"
      className={`rounded-xl px-5 py-2 text-white font-semibold shadow-sm hover:bg-primary-dark transition duration-300`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
