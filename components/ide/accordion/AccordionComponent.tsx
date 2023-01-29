/* External dependencies */
import { Trans } from 'next-i18next';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

/* Local dependencies */
import styles from '../../../styles/scss/accordion.module.scss';

interface AccordionComponentProps {
  items?: any;
}

export default function AccordionComponent({ items }: AccordionComponentProps) {
  return (
    <Accordion allowZeroExpanded className={styles.accordion}>
      {items.map((item: any, index: number) => (
        <AccordionItem key={index}>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion__button}>
              <Trans>{item.heading}</Trans>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{item.children}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
