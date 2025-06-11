// src/components/common/PrimaryButton.jsx
import { Button } from '@mui/material';

const PrimaryButton = ({ children, variant = 'contained', size = 'medium', ...props }) => (
  <div className="flex justify-center mt-4">
    <Button
      variant={variant}
      size={size}
      color="primary"
      className="rounded-xl px-5 py-2 text-white font-semibold shadow-sm hover:bg-primary-dark transition duration-300"
      {...props}
    >
      {children}
    </Button>
  </div>
);

export default PrimaryButton;