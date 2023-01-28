/* External dependencies */
import React from 'react';
import AceEditor from 'react-ace';
import { config } from 'ace-builds';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-terminal';

import jsWorkerUrl from 'ace-builds/src-noconflict/worker-javascript';
config.setModuleUrl('ace/mode/javascript_worker', jsWorkerUrl);

/* Local dependencies */
import styles from '../../../styles/scss/ide.module.scss';

type EditorProps = {
  code: string;
};

export default function Editor({ code }: EditorProps) {
  function onChange(newValue: any) {
    console.log('change', newValue); // TODO: add function when redux will be ready
  }

  return (
    <AceEditor
      mode="python"
      theme="terminal"
      onChange={(val) => onChange(val)}
      name="UNIQUE_ID_OF_DIV"
      value={code || ''}
      editorProps={{ $blockScrolling: true }}
      style={{ width: '100%', height: '100%' }}
      className={styles.ace_editor}
    />
  );
}
