import { ReactElement, ReactNode } from 'react';

interface Props {
  color?: string;
  bgColor?: string;
  size?: string;
  children: ReactNode;
}

function Tag({ color = 'text-gray-700', bgColor = 'bg-gray-200', size = 'text-sm', children }: Props): ReactElement {
  return (
    <span className={`inline-block ${bgColor} rounded-full px-3 py-1 ${size} font-semibold ${color} mr-2 mb-2`}>
      {children}
    </span>
  );
}

export default Tag;
