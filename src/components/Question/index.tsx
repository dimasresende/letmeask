import { ReactNode } from 'react';
import cx from 'classnames';

import './styles.scss';

type QuestionPropos = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false
}: QuestionPropos) {
  return (
    <div className={cx(
      'question',
      {answered: isAnswered}, // uso da lib classnames - coloca a classe "answered" se o valor da chave (classe) for true. Nesse caso se isAnswered
      {highlighted: isHighlighted && !isAnswered}, // uso da lib classnames - coloca a classe "highlighted" se o valor da chave (classe) for true e não tiver sido respondida (isAnswered). Nesse caso se isHighlighted

    )}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}