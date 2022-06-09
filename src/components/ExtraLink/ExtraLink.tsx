import Link, { type LinkProps } from 'next/link';
import { ComponentProps, PropsWithChildren } from 'react';

type ATagProps = Omit<ComponentProps<'a'>, 'href'>;
export type ExtraLinkProps = LinkProps & ATagProps;

const ExtraLink = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref = true,
  prefetch,
  locale,
  ...aTagProps
}: PropsWithChildren<ExtraLinkProps>) => {
  const linkProps = { href, as, replace, scroll, shallow, passHref, prefetch, locale };

  return (
    <Link {...linkProps}>
      <a {...aTagProps}>{children}</a>
    </Link>
  );
};

export default ExtraLink;
