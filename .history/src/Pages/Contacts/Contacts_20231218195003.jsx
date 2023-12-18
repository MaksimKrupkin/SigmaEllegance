import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Contacts.module.css';
import MapComponent from './MapComponent';
import Sendings from '../../Components/Sendings/Sendings';

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
              <Link className={styles.link}> воспользуйтесь формой обратной связи.</Link>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>Отдел маркетинга и рекламы</div>
            <div className={styles.text}>
              Вопросы, связанные с рекламными активностями SigmaEllegance и партнерскими
              предложениями.
            </div>
            <br />
            <Link className={styles.link}>Написать письмо</Link>
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>HR-служба</div>
            <div className={styles.text}>
              Если Вам интересна{' '}
              <Link className={styles.link}>работа в магазинах SigmaEllegance</Link>, отправьте ваше
              резюме или заполните <Link className={styles.link}>анкету на сайте</Link>.
            </div>
            <br />
            <Link className={styles.link}>Написать письмо</Link>
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>Пресс-служба</div>
            <div className={styles.text}>
              Любые вопросы относительно интервью у руководителей, участия в конференциях и
              семинарах, съёмках в магазинах.
            </div>
            <span className={styles.phoneNumber}>+375 (029) 228-33-50</span>
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>Отдел развития и аренды</div>
            <div className={styles.text}>Предложения по аренде новых торговых площадей.</div>
            <br />
            <Link className={styles.link}>Написать письмо</Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom_part}>
        <div className={styles.bottom_part_container}>
          <h2 className={styles.title}>Реквизиты</h2>
          <div className={styles.bottomPart_wrapper}>
            <div className={styles.leftPart}>
              <p className={styles.leftPart_subtitle}>ООО «Максибизнес»</p>

              <p>Юридический и Фактический адрес:</p>
              <p>
                Республика Беларусь, Минск, Центральный район, Проспект Победителей 9, 3 этаж,
                помещение IX, комната 7
              </p>
              <table className={styles.table}>
                <tr>
                  <td className={styles.first_row}>Телефон</td>
                  <td className={styles.second_row}>+375 (029) 312-60-15</td>
                </tr>
                <tr>
                  <td className={styles.first_row}>Индекс:</td>
                  <td className={styles.second_row}>228193</td>
                </tr>
                <tr>
                  <td className={styles.first_row}>ОГРН:</td>
                  <td className={styles.second_row}>1346740134310</td>
                </tr>
                <tr>
                  <td className={styles.first_row}>ИНН:</td>
                  <td className={styles.second_row}>7398272591</td>
                </tr>
              </table>
            </div>
            <div className={styles.rightPart}>
              <MapComponent /> {/* Использование компонента MapComponent */}
            </div>
          </div>
        </div>
      </div>
      <Sendings />
    </div>
  );
}
