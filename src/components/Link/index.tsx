import NextLink, { LinkProps } from "next/link";

interface Props extends LinkProps {
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

const Link: React.FC<Props> = ({
  href,
  as,
  className,
  locale,
  children,
  disabled,
  ...rest
}: Props) => {
  const isString = (x: any) => {
    return Object.prototype.toString.call(x) === "[object String]";
  };

  if (isString(href)) {
    href = href as string;
    const internal = /^\/(?!\/)/.test(href);
    if (!internal) {
      return (
        <a
          href={!disabled ? href : ""}
          className={className}
          target={"_blank"}
          rel={"noopener noreferrer"}
          {...rest}
        >
          {children}
        </a>
      );
    }
  }

  return (
    <NextLink href={!disabled ? href : ""} as={as} locale={locale}>
      <a className={className} {...rest}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
