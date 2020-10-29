import { ReactElement, ReactNode } from 'react';

interface Props {
  children: {
    media?: string;
    title: string;
    content: ReactNode;
    tags?: ReactNode;
  };
}

function Card({ children: { media, title, content, tags } }: Props): ReactElement {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {media && <img className="w-full" src={media} alt="Image house" />}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      {tags && <div className="px-6 pt-4 pb-2">{tags}</div>}
    </div>
  );
}

export default Card;
