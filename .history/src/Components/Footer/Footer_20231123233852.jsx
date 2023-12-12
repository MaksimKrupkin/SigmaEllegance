import React from 'react'
import icon1 from '../../assets/img/pint.svg'
import icon2 from '../../assets/img/TT.svg'
import icon3 from '../../assets/img/TG.svg'
import icon4 from '../../assets/img/IG.svg'
import icon5 from '../../assets/img/VK.svg'

export default function Footer() {
  return (
    <footer class="footer">               
                        <div class="column-1">
                            <div class="column-title">О компании</div>
                            <div class="column-item"> Магазины</div>
                            <div class="column-item">Контакты</div>
                            <div class="column-item">О нас</div>
                            <div class="column-item">Политика</div>
                            <div class="column-item">Обратная связь</div>
                        </div>
                        <div class="column-2">
                            <div class="column-title">Поддержка</div>
                            <div class="column-item"> Оплата товара</div>
                            <div class="column-item">Бонусная программа</div>
                            <div class="column-item">Где мой заказ?</div>
                            <div class="column-item">Доставка товара</div>
                            <div class="column-item">Обмен и возврат</div>
                            <div class="column-item">Подарочный сертификат</div>
                            <div class="column-item">Помощь портного</div>
                        </div>
                        <div class="column-3">
                            <div class="column-title">Магазин</div>
                            <div class="column-item"> Коллекции</div>
                            <div class="column-item">Смокинги</div>
                            <div class="column-item">Пиджаки</div>
                            <div class="column-item">Брюки & Штаны</div>
                            <div class="column-item">Рубашки</div>
                            <div class="column-item">Все товары</div>
                        </div>
                        <div class="footer-form">
                            <div class="footer-form-title">
                                Узнавайте первыми
                            </div>
                            <form action="text">
                                <input class="footer-form-email" type="text" placeholder="Ваш Email"/>
                            </form>
                            <div class="footer-button">
                                <div class="footer-link">Подписаться</div>
                            </div>
                            <div class="policy">Подписываясь на рассылку, вы соглашаетесь с условиями <a href="" class="policy-link">оферты</a>  и <a class="policy-link">политики конфиденциальности</a> </div>
                        </div>
                        <div class="footer-border">
                            <img src="/img/Border.svg" alt="">
                        </div>
                        <div class="sigma-corp">© SigmaEllegance, 2023</div>
                        <div class="made-by">made by @krupkinmaxim</div>
                        <div class="social-networks">
                            <img class="pintrest" src={icon1} alt=""/>
                            <img class="tik-tok" src={icon2} alt=""/>
                            <img class="telegram" src={icon3} alt=""/>
                            <img class="instagram" src={icon4} alt=""/>
                            <img class="vk" src={icon5} alt=""/>
                        </div>
                </footer>
  )
}
