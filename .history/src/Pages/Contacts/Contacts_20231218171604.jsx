import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Contacts.module.css';

export default function Contacts() {
  return (
    <div className={styles.container}>
      <div className={styles.top_part}>
        <h2 className={styles.title}>Контакты</h2>
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
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>Отдел маркетинга и рекламы</div>
            <div className={styles.text}>
              Вопросы, связанные с рекламными активностями SigmaEllegance и партнерскими
              предложениями.
            </div>
            <br />
            <Link>Написать письмо</Link>
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>HR-служба</div>
            <div className={styles.text}>
              Если Вам интересна работа в магазинах SigmaEllegance, отправьте ваше резюме или
              заполните анкету на сайте.
            </div>
            <br />
            <Link>Написать письмо</Link>
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>Отдел развития и аренды</div>
            <div className={styles.text}>Предложения по аренде новых торговых площадей.</div>
            <br />
            <Link>Написать письмо</Link>
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>Пресс-служба</div>
            <div className={styles.text}>
              Любые вопросы относительно интервью у руководителей, участия в конференциях и
              семинарах, съёмках в магазинах.
            </div>
            <span className={styles.phoneNumber}>+375 (029) 228-33-50</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom_part}>
        <h2 className={styles.title}>Реквизиты</h2>
        <div className={styles.paragraphs}></div>
      </div>
    </div>
  );
}
