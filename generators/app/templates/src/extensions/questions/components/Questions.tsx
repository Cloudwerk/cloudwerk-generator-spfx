import * as React from 'react';
import { FormDisplayMode } from '@microsoft/sp-core-library';
import { FormCustomizerContext } from '@microsoft/sp-listview-extensibility';

import styles from './Questions.module.scss';

export interface IQuestionsProps {
  context: FormCustomizerContext;
  displayMode: FormDisplayMode;
  onSave: () => void;
  onClose: () => void;
}


const Questions: React.FC<IQuestionsProps> = (props) => {
  return (
    <div className={styles.questions} />
  );
}
export default Questions;
