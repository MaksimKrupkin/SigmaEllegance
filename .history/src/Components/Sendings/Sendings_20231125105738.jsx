import React from 'react';
import styles from './Sendings.module.css';

export default function Sendings() {
  return (
                    <div className={styles.customer_form_container}>
                        <div className={styles.customer_form}>
                        <div className={styles.customer_form_title}>
                            Подпишитесь на нашу рассылку
                        </div>
                        <div className={styles.customer-form-subtitle}>
                            Чтобы первыми узнавать о новинках и трендах, оставьте нам свою почту. На неё мы также отправим промокод на скидку 5% на первый заказ!
                        </div>
                        <div  className={styles.forms}>
                            <input className={styles.name} type="text" name="name" value="" placeholder="Ваше имя" required /><br>
                            <input className={styles.email} type="text" name="email" value="" placeholder="Ваш Email" /><br>
                            <input className={styles.send} type="button" value="Отправить" />
                        </div>
                        </div>
                    </div>
  );
}
