import React from 'react'
import styles from './Sendings.module.css'

 function Sendings() {
return (
                      <div class="customer-form-container">
                        <div class="customer-form">
                        <div class="customer-form-title">
                            Подпишитесь на нашу рассылку
                        </div>
                        <div class="customer-form-subtitle">
                            Чтобы первыми узнавать о новинках и трендах, оставьте нам свою почту. На неё мы также отправим промокод на скидку 5% на первый заказ!
                        </div>
                        <form  class="forms">
                            <input class="name" type="text" name="name" value="" placeholder="Ваше имя" required><br>
                            <input class="email" type="text" name="email" value="" placeholder="Ваш Email"><br>
                            <input class="send" type="button" value="Отправить">
                        </form>
                        </div>
                    </div>
)
                    
  
}

export default Sendings;