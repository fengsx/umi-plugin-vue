import React from 'react';
import { VueWrapper } from 'vuera';
import NameBlock from './NameBlock.vue';
import styles from './index.css';

export default function IndexPage() {
  return (
    <div className={styles.normal}>
      <VueWrapper
        component={NameBlock}
        name={{ value: 'Apple' }}
        btn-text="A Button"
        on={{ 'btn-click': (detail: string) => alert(detail) }}
      />
    </div>
  );
}
