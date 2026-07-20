import Link from 'next/link';
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, forwardRef } from 'react';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold text-base leading-none transition-colors duration-150 min-h-[48px] px-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practice-gold disabled:opacity-50 disabled:pointer-events-none motion-reduce:transition-none';

const variants = {
  primary: 'bg-practice-teal text-white hover:bg-practice-teal-dark',
  secondary:
    'bg-white text-practice-teal border-2 border-practice-teal hover:bg-practice-teal-light',
  ghost: 'text-practice-teal hover:bg-practice-teal-light',
  onDark: 'bg-white text-practice-teal-dark hover:bg-practice-gold-light',
};

type Variant = keyof typeof variants;

type CommonProps = {
  variant?: Variant;
  fullWidthMobile?: boolean;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  function Button({ variant = 'primary', fullWidthMobile, className = '', ...props }, ref) {
    const classes = `${base} ${variants[variant]} ${fullWidthMobile ? 'w-full sm:w-auto' : ''} ${className}`;

    if ('href' in props && props.href) {
      const { href, ...rest } = props;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...rest}
        />
      );
    }

    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...buttonProps} />
    );
  }
);
