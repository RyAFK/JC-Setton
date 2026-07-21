import Link from 'next/link';
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, forwardRef } from 'react';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full text-center font-semibold text-base leading-tight transition duration-150 min-h-[48px] px-6 py-3 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practice-focus disabled:opacity-50 disabled:pointer-events-none motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100';

const variants = {
  primary: 'bg-practice-blue text-white hover:bg-practice-blue-dark',
  secondary:
    'bg-white text-practice-blue border-2 border-practice-blue hover:bg-practice-blue-tint',
  ghost: 'text-practice-blue hover:bg-practice-blue-tint',
  onDark: 'bg-white text-practice-blue-dark hover:bg-practice-accent-tint',
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
