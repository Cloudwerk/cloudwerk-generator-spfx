import * as React from 'react';
import { FormDisplayMode } from '@microsoft/sp-core-library';
import { FormCustomizerContext } from '@microsoft/sp-listview-extensibility';

import styles from './Answers.module.scss';

export interface IAnswersProps {
  context: FormCustomizerContext;
  displayMode: FormDisplayMode;
  onSave: () => void;
  onClose: () => void;
}

const Answers: React.FC<IAnswersProps> = (props) => {


  return (
    <div className={styles.answers} />
  );
}
export default Answers;
