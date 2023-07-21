import { Button, ButtonProps } from '@mui/material';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface NextLinkMuiButtonProps extends LinkProps {
  children?: ReactNode;
  buttonProps?: ButtonProps<'div', {}>;
}

export const NextLinkMuiButton = ({
  children,
  buttonProps,
  ...rest
}: NextLinkMuiButtonProps) => {
  return (
    <Link rel="noopener noreferrer" target="_blank" passHref {...rest}>
      <Button
        component={'div'}
        variant="contained"
        color="secondary"
        {...buttonProps}
      >
        {children}
      </Button>
    </Link>
  );
};
