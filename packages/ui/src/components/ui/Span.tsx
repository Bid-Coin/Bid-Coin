type SpanProps = {
  content: string;
  classNames?: string;
};

export const Span = ({ classNames, content }: SpanProps) => {
  return <span className={classNames}>{content}</span>;
};
