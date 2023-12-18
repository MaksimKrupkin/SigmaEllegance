import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Contacts.module.css';

export default function Contacts() {
  return (
    <div className={styles.container}>
      <div className={styles.top_part}>
        <h2 className={styles.tytle}>Контакты</h2>
        <div className={styles.paragraphs}>
          <div className={styles.item}>
            <div className={styles.subtitle}>служба поддержки клиентов</div>
            <div className={styles.text}>
              Работает для покупателей розничных магазинов и интернет-магазина с 1000до 2030 без
              выходных.
            </div>
            <span className={styles.phoneNumber}>+375 (029) 312-60-15</span>
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>служба контроля качества</div>
            <div className={styles.text}>
              Если у вас возникли вопросы, связанные с качеством продукции и обслуживания в
              розничных магазинах и интернет-магазине,
              <Link> воспользуйтесь формой обратной связи.</Link>
            </div>
            <span className={styles.phoneNumber}>+375 (029) 312-60-15</span>
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>служба поддержки клиентов</div>
            <div className={styles.text}>
              Работает для покупателей розничных магазинов и интернет-магазина с 1000до 2030 без
              выходных.
            </div>
            <span className={styles.phoneNumber}>+375 (029) 312-60-15</span>
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>служба поддержки клиентов</div>
            <div className={styles.text}>
              Работает для покупателей розничных магазинов и интернет-магазина с 1000до 2030 без
              выходных.
            </div>
            <span className={styles.phoneNumber}>+375 (029) 312-60-15</span>
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>служба поддержки клиентов</div>
            <div className={styles.text}>
              Работает для покупателей розничных магазинов и интернет-магазина с 1000до 2030 без
              выходных.
            </div>
            <span className={styles.phoneNumber}>+375 (029) 312-60-15</span>
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>служба поддержки клиентов</div>
            <div className={styles.text}>
              Работает для покупателей розничных магазинов и интернет-магазина с 1000до 2030 без
              выходных.
            </div>
            <span className={styles.phoneNumber}>+375 (029) 312-60-15</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom_part}>
        <h2 className={styles.tytle}>Реквизиты</h2>
        <div className={styles.paragraphs}></div>
      </div>
    </div>
  );
}
