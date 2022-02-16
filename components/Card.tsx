import { ReactElement, ReactNode } from 'react';
import Image from 'next/image';

interface Props {
  children: {
    media?: string;
    title: string;
    content?: ReactNode;
    tags?: ReactNode;
    url?: string;
  };
}

function Card({ children: { media, title, content, tags, url } }: Props): ReactElement {
  return (
    <div className="max-w-full rounded overflow-hidden shadow-lg">
      {media && <Image layout="fill" className="w-full" src={media} alt="Image house" />}
      <div className="px-6 py-4">
        {url ? (
          <div className="font-bold text-xl mb-2">
            <a target="_blank" href={url}>
              {title}
            </a>
          </div>
        ) : (
          <div className="font-bold text-xl mb-2">{title}</div>
        )}
        {content && <p className="text-gray-700 text-base">{content}</p>}
      </div>
      {tags && <div className="px-6 pt-4 pb-2">{tags}</div>}
    </div>
  );
}

export default Card;
