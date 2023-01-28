/* External dependencies */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import { config } from 'ace-builds';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-terminal';

import jsWorkerUrl from 'ace-builds/src-noconflict/worker-javascript';
config.setModuleUrl('ace/mode/javascript_worker', jsWorkerUrl);

/* Local dependencies */
import styles from '../../../styles/scss/ide.module.scss';

type EditorProps = {
  userCode: string;
  setUserCode: Dispatch<SetStateAction<string>>;
};

export default function Editor({ userCode, setUserCode }: EditorProps) {
  return (
    <AceEditor
      mode="python"
      theme="terminal"
      onChange={setUserCode}
      name="UNIQUE_ID_OF_DIV"
      value={userCode}
      editorProps={{ $blockScrolling: true }}
      style={{ width: '100%', height: '100%' }}
      className={styles.ace_editor}
    />
  );
}
