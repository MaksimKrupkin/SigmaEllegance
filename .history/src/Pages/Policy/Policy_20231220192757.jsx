import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Policy.module.css';

export default function Policy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container_wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Политика конфиденциальности</h1>
        <p className={styles.paragraph}>
          Настоящая Политика конфиденциальности персональных данных (далее – Политика
          конфиденциальности) действует в отношении всей информации, которую Интернет-магазин
          «SigmaEllegance», расположенный на доменном имени https://sigmaellegance.com может
          получить о Пользователе во время использования сайта Интернет-магазина, программ и
          продуктов Интернет-магазина.
        </p>
        <h2 className={styles.subtitle}>1. Определение терминов</h2>
        <p className={styles.paragraph}>
          1.1 В настоящей Политике конфиденциальности используются следующие термины:
        </p>
        <p className={styles.paragraph}>
          1.1.1. «Администрация сайта Интернет-магазина (далее – Администрация сайта) » –
          уполномоченные сотрудники на управления сайтом, действующие от имени Эльдар Тагиев,
          которые организуют и (или) осуществляет обработку персональных данных, а также определяет
          цели обработки персональных данных, состав персональных данных, подлежащих обработке,
          действия (операции), совершаемые с персональными данными.
        </p>
        <p className={styles.paragraph}>
          1.1.2. «Персональные данные» — любая информация, относящаяся к прямо или косвенно
          определенному, или определяемому физическому лицу (субъекту персональных данных).
        </p>
        <p className={styles.paragraph}>
          1.1.3. «Обработка персональных данных» - любое действие (операция) или совокупность
          действий (операций), совершаемых с использованием средств автоматизации или без
          использования таких средств с персональными данными, включая сбор, запись, систематизацию,
          накопление, хранение, уточнение (обновление, изменение), извлечение, использование,
          передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление,
          уничтожение персональных данных.
        </p>
        <p className={styles.paragraph}>
          1.1.4. «Конфиденциальность персональных данных» — обязательное для соблюдения Оператором
          или иным получившим доступ к персональным данным лицом требование не допускать их
          распространения без согласия субъекта персональных данных или наличия иного законного
          основания.
        </p>
        <p className={styles.paragraph}>
          1.1.5. «Пользователь сайта Интернет-магазина (далее Пользователь)» — лицо, имеющее доступ
          к Сайту, посредством сети Интернет и использующее Сайт интернет-магазина.
        </p>
        <p className={styles.paragraph}>
          1.1.6. «Cookies» — небольшой фрагмент данных, отправленный веб-сервером и хранимый на
          компьютере пользователя, который веб-клиент или веб-браузер каждый раз пересылает
          веб-серверу в HTTP-запросе при попытке открыть страницу соответствующего сайта.
        </p>
        <p className={styles.paragraph}>
          1.1.7. «IP-адрес» — уникальный сетевой адрес узла в компьютерной сети, построенной по
          протоколу IP.
        </p>
        <h2 className={styles.subtitle}>2. Общие положения</h2>
        <p className={styles.paragraph}>
          1. Использование Пользователем сайта Интернет-магазина означает согласие с настоящей
          Политикой конфиденциальности и условиями обработки персональных данных Пользователя.
        </p>
        <p className={styles.paragraph}>
          2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен
          прекратить использование сайта Интернет-магазина.
        </p>
        <p className={styles.paragraph}>
          2.3. Настоящая Политика конфиденциальности применяется только к сайту Интернет-магазина
          «SigmaEllegance». Интернет-магазин не контролирует и не несет ответственность за сайты
          третьих лиц, на которые Пользователь может перейти по ссылкам, доступным на сайте
          Интернет-магазина.
        </p>
        <p className={styles.paragraph}>
          2.4. Администрация сайта не проверяет достоверность персональных данных, предоставляемых
          Пользователем сайта Интернет-магазина.
        </p>
        <h2 className={styles.subtitle}>3. предметы политики конфиденциальности</h2>
        <p className={styles.paragraph}>
          3.1. Настоящая Политика конфиденциальности устанавливает обязательства Администрации сайта
          интернет-магазина по неразглашению и обеспечению режима защиты конфиденциальности
          персональных данных, которые Пользователь предоставляет по запросу Администрации сайта при
          регистрации на сайте интернет-магазина или при оформлении заказа для приобретения Товара.
        </p>
        <p className={styles.paragraph}>
          3.2. Персональные данные, разрешённые к обработке в рамках настоящей Политики
          конфиденциальности, предоставляются Пользователем путём заполнения регистрационной формы
          на Сайте интернет-магазина «SigmaEllegance» в разделе ОФОРМЛЕНИЕ ЗАКАЗА и включают в себя
          следующую информацию:
        </p>
        <p className={styles.paragraph}>.2.1. фамилию, имя, отчество Пользователя;</p>
        <p className={styles.paragraph}>3.2.2. контактный телефон Пользователя;</p>
        <p className={styles.paragraph}>3.2.3. адрес электронной почты (Email);</p>
        <p className={styles.paragraph}>3.2.4. адрес доставки Товара;</p>
        <p className={styles.paragraph}>3.2.5. место жительство Пользователя.</p>
        <p className={styles.paragraph}>
          3.3. Интернет-магазин защищает Данные, которые автоматически передаются в процессе
          просмотра рекламных блоков и при посещении страниц, на которых установлен статистический
          скрипт системы ("пиксель"): IP адрес; информация из cookies; информация о браузере (или
          иной программе, которая осуществляет доступ к показу рекламы); время доступа; адрес
          страницы, на которой расположен рекламный блок; реферер (адрес предыдущей страницы).
        </p>
        <p className={styles.paragraph}>
          3.3.1. Отключение cookies может повлечь невозможность доступа к частям сайта
          Интернет-магазина, требующим авторизации.
        </p>
        <p className={styles.paragraph}>
          3.3.2. Интернет-магазин осуществляет сбор статистики об IP-адресах своих посетителей.
          Данная информация используется с целью выявления и решения технических проблем, для
          контроля законности проводимых финансовых платежей.
        </p>
        <p className={styles.paragraph}>
          3.4. Любая иная персональная информация неоговоренная выше (история покупок, используемые
          браузеры и операционные системы и т.д.) подлежит надежному хранению и нераспространению.
        </p>
        <h2 className={styles.subtitle}>4. ЦЕЛИ СБОРА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ ПОЛЬЗОВАТЕЛЯ</h2>
        <p className={styles.paragraph}>
          4.1. Персональные данные Пользователя Администрация сайта интернет-магазина может
          использовать в целях:
        </p>
        <p className={styles.paragraph}>
          4.1.1. Идентификации Пользователя, зарегистрированного на сайте Интернет-магазина, для
          оформления заказа и (или) заключения Договора купли-продажи товара дистанционным способом
          с «SigmaEllegance».
        </p>
        <p className={styles.paragraph}>
          4.1.2. Предоставления Пользователю доступа к персонализированным ресурсам Сайта
          интернет-магазина.
        </p>
        <p className={styles.paragraph}>
          4.1.3. Установления с Пользователем обратной связи, включая направление уведомлений,
          запросов, касающихся использования Сайта интернет-магазина, оказания услуг, обработка
          запросов и заявок от Пользователя.
        </p>
        <p className={styles.paragraph}>
          4.1.4. Определения места нахождения Пользователя для обеспечения безопасности,
          предотвращения мошенничества.
        </p>
        <p className={styles.paragraph}>
          4.1.5. Подтверждения достоверности и полноты персональных данных, предоставленных
          Пользователем.
        </p>
        <p className={styles.paragraph}>
          4.1.6. Создания учетной записи для совершения покупок, если Пользователь дал согласие на
          создание учетной записи.
        </p>
        <p className={styles.paragraph}>
          4.1.7. Уведомления Пользователя Сайта интернет-магазина о состоянии Заказа.
        </p>
        <p className={styles.paragraph}>
          4.1.8. Обработки и получения платежей, подтверждения налога или налоговых льгот,
          оспаривания платежа, определения права на получение кредитной линии Пользователем.
        </p>
        <p className={styles.paragraph}>
          4.1.9. Предоставления Пользователю эффективной клиентской и технической поддержки при
          возникновении проблем, связанных с использованием Сайта интернет-магазина.
        </p>
        <p className={styles.paragraph}>
          4.1.10. Предоставления Пользователю с его согласия, обновлений продукции, специальных
          предложений, информации о ценах, новостной рассылки и иных сведений от имени
          Интернет-магазина или от имени партнеров Интернет-магазина.
        </p>
        <p className={styles.paragraph}>
          4.1.11. Осуществления рекламной деятельности с согласия Пользователя.
        </p>
        <p className={styles.paragraph}>
          4.1.12. Предоставления доступа Пользователю на сайты или сервисы партнеров
          Интернет-магазина с целью получения продуктов, обновлений и услуг.
        </p>
        <span>Обновлено 01.05.2023</span>
        <Link>Скачать документ «Политика конфиденциальности. Оферта» </Link>
      </div>
    </div>
  );
}
