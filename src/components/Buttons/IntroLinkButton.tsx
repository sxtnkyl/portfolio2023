import { Button, Link, LinkProps } from '@mui/material';
import { ReactNode } from 'react';

interface IntroLinkButtonProps extends LinkProps {
  children?: ReactNode;
}

export const IntroLinkButton = ({
  children,
  ...rest
}: IntroLinkButtonProps) => {
  return (
    <Link rel="noopener noreferrer" target="_blank" {...rest}>
      <Button variant="contained" color="secondary">
        {children}
      </Button>
    </Link>
  );
};
