/* External dependencies */
import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-terminal';

/* Local dependencies */
import styles from '../../../styles/scss/ide.module.scss';

export default function Editor() {
  function onChange(newValue: any) {
    console.log('change', newValue); // TODO: add function when redux will be ready
  }

  return (
    <AceEditor
      mode="javascript"
      theme="terminal"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      style={{ width: '100%', height: '100%' }}
      className={styles.ace_editor}
    />
  );
}
