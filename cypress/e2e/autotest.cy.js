import * as data from "../helpers/dafault_data.json"
import * as value from "../helpers/value_avatars.json"
import * as valueE from "../helpers/value_avatars_in_payments.json"
import * as nameE from "../helpers/name_of_avatars.json"
import * as name from "../helpers/names_of_avatars_in_payments.json"
import * as valueEE from "../helpers/value_avatars_3.json"
import * as kodi from "../helpers/nomera_dly_vvoda.json"

describe('Покупа тренера покемонов', () => {

  it('Авторизация', () => {
    cy.visit('/');
    cy.get('.content').should('be.visible');
    cy.get('.login__content').should('be.visible');
    cy.get('.auth__title').should('be.visible');
    cy.get('.auth__title').contains('Битва покемонов');
    cy.get('p.auth__text').should('be.visible');
    cy.get('p.auth__text').contains('Вход через соцсеть');
    cy.get('.auth__social').should('be.visible');
    cy.get('.auth__social').trigger('mouseover');
    cy.get('.auth__social').click;
    //  На странице ВК почему то не смог выбрать селектор, обидно
    cy.visit('/');
    cy.get('.content').should('be.visible');
    cy.get('.login__content').should('be.visible');
    cy.get('.auth__title').should('be.visible');
    cy.get('.auth__title').contains('Битва покемонов');
    cy.get('p.auth__text').should('be.visible');
    cy.get('p.auth__text').contains('Вход через соцсеть');
    cy.get('.auth__social').should('be.visible');
    cy.get('.auth__social').trigger('mouseover');
    cy.get(':nth-child(1) > .auth__input').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('.auth__restore').should('be.visible');
    cy.get('.auth__restore').trigger('mouseover');
    cy.get('.auth__restore').click;
    cy.visit('/');
    cy.get('.auth__button').should('be.visible');
    cy.get('.auth__button').trigger('mouseover');
    cy.get('.auth__button').should('have.css', 'color', 'rgb(255, 255, 255)');
    cy.get('.auth__form > .auth__text').should('be.visible');
    cy.get('.auth__form > .auth__text').trigger('mouseover');
    cy.get('.auth__form > .auth__text').contains('Зарегистрироваться');
    cy.get('.auth__form > .auth__text').click;
    cy.get('.content').should('be.visible');
    cy.get('.auth__form > .auth__text').click;
    cy.visit('https://pokemonbattle-stage.ru/registration')
    cy.get('.auth__title').should('be.visible');
    cy.get('.auth__title').contains('Битва покемонов');
    cy.get('.auth__title-h2').should('be.visible');
    cy.get('.auth__title-h2').contains('Регистрация');
    cy.get('p.auth__text').should('be.visible');
    cy.get('.auth__social').should('be.visible');
    cy.get('.auth__socials').should('be.visible');
    cy.get('.auth__form').should('be.visible');
    // тут наверное надо автотесты на валидацию писать, но если честно лень немного) да и я афигел как представил обьем написания)
    cy.get('.auth__form > :nth-child(1) > .auth__input').should('be.visible');
    cy.get('.auth__form > :nth-child(1) > .auth__input').click;
    cy.get('.auth__form > :nth-child(1) > .auth__input').type('123qwe')
    cy.get('.auth__form > :nth-child(2) > .auth__input').should('be.visible');
    cy.get('.auth__form > :nth-child(2) > .auth__input').click;
    cy.get('.auth__form > :nth-child(2) > .auth__input').type('123qwe')
    cy.get('#password').should('be.visible');
    cy.get('#password').click;
    cy.get('#password').type('123qwe');
    cy.get('#confirm-password').should('be.visible');
    cy.get('#confirm-password').click;
    cy.get('#confirm-password').type('123qwe');
    cy.get('.auth__button').should('be.visible');
    cy.get('.auth__button').trigger('mouseover');
    cy.get('.auth__button').click;
    cy.get('.auth__form > .auth__text').should('be.visible');
    cy.get('.auth__form > .auth__text').trigger('mouseover');
    cy.get('.auth__form > .auth__text').click;
    cy.get('.status_url > img').should('be.visible');
    cy.get('.footer__logo > div').should('be.visible');
    cy.get('.footer__studio').should('be.visible');
    cy.get('.footer__logo > div').contains('Версия 3.3.1');
    cy.visit('/');
    cy.get('.footer__logo > div').should('be.visible');
    cy.get('.footer__studio').should('be.visible');
    cy.get('.footer__logo > div').contains('Версия 3.3.1');
    cy.get(':nth-child(1) > .auth__input').type(data.login);
    cy.get('#password').type(data.password);
    cy.get('#password').type('{enter}')
    cy.visit('/');
  })

  it('Главное меню', function () {
    cy.visit('/');
    cy.get(':nth-child(1) > .auth__input').type(data.login);
    cy.get('#password').type(data.password);
    cy.get('#password').type('{enter}')
    cy.get('.gradient').should('be.visible');
    cy.get('.header__img').should('be.visible');
    cy.get('.header__img').trigger('mouseover')
    cy.get('.header__btn_active').should('be.visible');
    cy.get('.header__btn_active').trigger('mouseover')
    cy.get('.k_header_button_trainers').should('be.visible');
    cy.get('.k_header_button_trainers').trigger('mouseover')
    cy.get('.header__btns > :nth-child(4)').should('be.visible');
    cy.get('.header__btns > :nth-child(4)').trigger('mouseover')
    cy.get(':nth-child(4) > .header__btn-img').should('be.visible');
    cy.get('.header__container > .header__id').should('be.visible');
    cy.get('.header__id-texts > :nth-child(1)').should('be.visible');
    cy.get('.header__id-texts > :nth-child(1)').contains('ID')
    cy.get('.header__id-text_type_profile').should('be.visible');
    cy.get('.header__id-text_type_profile').contains('159')
    cy.get('.header__id-img > .k_main_photo').should('be.visible');
    cy.get('.top_menu_exit').should('be.visible');
    cy.get('.filter-wrapper').should('be.visible');
    cy.get('#search-input').should('be.visible');
    cy.get('#search-input').click;
    cy.get('.pokemon__filter-btn').should('be.visible');
    cy.get('.top_menu_exit').click;
    cy.get('.header__btns > :nth-child(4)').click
  })

  it('Верстка и другие проверки на меню покупки аватара', function () {
    cy.visit('/');
    cy.get(':nth-child(1) > .auth__input').type(data.login);
    cy.get('#password').type(data.password);
    cy.get('#password').type('{enter}')
    cy.visit('https://pokemonbattle-stage.ru/shop');
    cy.get('.header__img').should('be.visible');
    cy.get('.header__btns > [href="/"]').should('be.visible');
    cy.get('.header__btns > [href="/"]').contains('Покемоны')
    cy.get('[href="/"] > .header__btn-img').should('be.visible');
    cy.get('.k_header_button_trainers > .header__btn-img').should('be.visible');
    cy.get('.k_header_button_trainers').should('be.visible');
    cy.get('.k_header_button_trainers').contains('Тренеры');
    cy.get('.header__btns > :nth-child(4)').should('be.visible');
    cy.get('.header__btns > :nth-child(4)').contains('Магазин');
    cy.get(':nth-child(4) > .header__btn-img').should('be.visible');
    cy.get('.header__container > .header__id').should('be.visible');
    cy.get('.header__id-texts > :nth-child(1)').should('be.visible');
    cy.get('.header__id-texts > :nth-child(1)').contains('ID');
    cy.get('.header__id-text_type_profile').should('be.visible');
    cy.get('.header__id-text_type_profile').contains('159');
    cy.get('.header__id-img > .k_main_photo').should('be.visible');
    cy.get('.top_menu_exit').should('be.visible');
    cy.get('.pokemon__title').should('be.visible');
    cy.get('.pokemon__title').contains('Магазин');
    cy.get('.status_url > img').should('be.visible');
    cy.get('.footer__logo > div').should('be.visible');
    cy.get('.footer__studio').should('be.visible');
  })











  it('Покупка аватара №1', function () {
    cy.visit('/');
    cy.get(':nth-child(1) > .auth__input').type(data.login);
    cy.get('#password').type(data.password);
    cy.get('#password').type('{enter}')
    cy.visit('https://pokemonbattle-stage.ru/shop');
    cy.get('.shop__list > :nth-child(1)').should('be.visible');
    cy.get(':nth-child(1) > .shop__img').should('be.visible');
    cy.get(':nth-child(1) > .shop__title').should('be.visible');
    cy.get(':nth-child(1) > .shop__title').contains(nameE[1])
    cy.get(':nth-child(1) > .shop__price').should('be.visible');
    cy.get(':nth-child(1) > .shop__price').contains(value[1]);
    cy.get(':nth-child(1) > .shop__button').should('be.visible');
    cy.visit('https://pokemonbattle-stage.ru/payment/1');
    cy.get('.payment__info-button-v2').should('be.visible');
    cy.get('.payment__info-button-v2').click();
    cy.get('.pay__main-v2').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueE[1])
    cy.get('.payment__subblock > :nth-child(1)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(1)').contains('Магазин')
    cy.get('.payment__subblock > :nth-child(3)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(3)').contains('Номер заказа')
    cy.get('.payment__subblock > :nth-child(5)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(5)').contains('Описание')
    cy.get('.payment__subblock > .payment__shopname > a').should('be.visible');
    cy.get('.payment__subblock > .payment__shopname > a').contains('pokemonbattle-stage.ru')
    cy.get('.payment__subblock > :nth-child(4)').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').contains(name[1])
    cy.get('.pay__pay-header-v2').should('be.visible');
    cy.get('.pay__pay-header-v2').contains('Карта')
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type(kodi.karta)
    cy.get(':nth-child(1) > .pay_base-input-v2').should('be.visible');
    cy.get(':nth-child(1) > .pay_base-input-v2').click
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1228')
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').click
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VADIMIRKA')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('{enter}')//56456 
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__form-defolt').should('be.visible');
    cy.get('.payment__fielheader').should('be.visible');
    cy.get('#cardnumber').should('be.visible');
    cy.get('#cardnumber').click;
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__span-defolt').should('be.visible');
    cy.get('.payment__defolt-decline').should('be.visible');
    cy.get('.payment__submit-button').should('be.visible');
    cy.get('.payment__submit-button').type('{enter}');
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueEE[1])
  })

  it('Покупка аватара №2', function () {
    cy.visit('/');
    cy.get(':nth-child(1) > .auth__input').type(data.login);
    cy.get('#password').type(data.password);
    cy.get('#password').type('{enter}')
    cy.visit('https://pokemonbattle-stage.ru/shop');
    cy.get('.shop__list > :nth-child(2)').should('be.visible');//
    cy.get(':nth-child(2) > .shop__img').should('be.visible');//
    cy.get(':nth-child(2) > .shop__title').should('be.visible');//
    cy.get(':nth-child(2) > .shop__title').contains(nameE[2])//
    cy.get(':nth-child(2) > .shop__price').should('be.visible');//
    cy.get(':nth-child(2) > .shop__price').contains(value[2]);//
    cy.get(':nth-child(2) > .shop__button').should('be.visible');//
    cy.visit('https://pokemonbattle-stage.ru/payment/2');//
    cy.get('.payment__info-button-v2').should('be.visible');
    cy.get('.payment__info-button-v2').click();
    cy.get('.pay__main-v2').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueE[2])//
    cy.get('.payment__subblock > :nth-child(1)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(1)').contains('Магазин')
    cy.get('.payment__subblock > :nth-child(3)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(3)').contains('Номер заказа')
    cy.get('.payment__subblock > :nth-child(5)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(5)').contains('Описание')
    cy.get('.payment__subblock > .payment__shopname > a').should('be.visible');
    cy.get('.payment__subblock > .payment__shopname > a').contains('pokemonbattle-stage.ru')
    cy.get('.payment__subblock > :nth-child(4)').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').contains(name[2])
    cy.get('.pay__pay-header-v2').should('be.visible');
    cy.get('.pay__pay-header-v2').contains('Карта')
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type(kodi.karta)
    cy.get(':nth-child(1) > .pay_base-input-v2').should('be.visible');
    cy.get(':nth-child(1) > .pay_base-input-v2').click
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1228')
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').click
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VADIMIRKA')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('{enter}')//56456 
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__form-defolt').should('be.visible');
    cy.get('.payment__fielheader').should('be.visible');
    cy.get('#cardnumber').should('be.visible');
    cy.get('#cardnumber').click;
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__span-defolt').should('be.visible');
    cy.get('.payment__defolt-decline').should('be.visible');
    cy.get('.payment__submit-button').should('be.visible');
    cy.get('.payment__submit-button').type('{enter}');
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueEE[2])
  })

  it('Покупка аватара №3', function () {
    cy.visit('/');
    cy.get(':nth-child(1) > .auth__input').type(data.login);
    cy.get('#password').type(data.password);
    cy.get('#password').type('{enter}')
    cy.visit('https://pokemonbattle-stage.ru/shop');
    cy.get('.shop__list > :nth-child(3)').should('be.visible');//
    cy.get(':nth-child(3) > .shop__img').should('be.visible');//
    cy.get(':nth-child(3) > .shop__title').should('be.visible');//
    cy.get(':nth-child(3) > .shop__title').contains(nameE[3])//
    cy.get(':nth-child(3) > .shop__price').should('be.visible');//
    cy.get(':nth-child(3) > .shop__price').contains(value[3]);//
    cy.get(':nth-child(3) > .shop__button').should('be.visible');//
    cy.visit('https://pokemonbattle-stage.ru/payment/3');//
    cy.get('.payment__info-button-v2').should('be.visible');
    cy.get('.payment__info-button-v2').click();
    cy.get('.pay__main-v2').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueE[3])//
    cy.get('.payment__subblock > :nth-child(1)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(1)').contains('Магазин')
    cy.get('.payment__subblock > :nth-child(3)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(3)').contains('Номер заказа')
    cy.get('.payment__subblock > :nth-child(5)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(5)').contains('Описание')
    cy.get('.payment__subblock > .payment__shopname > a').should('be.visible');
    cy.get('.payment__subblock > .payment__shopname > a').contains('pokemonbattle-stage.ru')
    cy.get('.payment__subblock > :nth-child(4)').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').contains(name[3])//
    cy.get('.pay__pay-header-v2').should('be.visible');
    cy.get('.pay__pay-header-v2').contains('Карта')
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type(kodi.karta)
    cy.get(':nth-child(1) > .pay_base-input-v2').should('be.visible');
    cy.get(':nth-child(1) > .pay_base-input-v2').click
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1228')
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').click
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VADIMIRKA')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('{enter}')//56456 
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__form-defolt').should('be.visible');
    cy.get('.payment__fielheader').should('be.visible');
    cy.get('#cardnumber').should('be.visible');
    cy.get('#cardnumber').click;
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__span-defolt').should('be.visible');
    cy.get('.payment__defolt-decline').should('be.visible');
    cy.get('.payment__submit-button').should('be.visible');
    cy.get('.payment__submit-button').type('{enter}');
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueEE[3])//
  })

  it('Покупка аватара №4', function () {
    cy.visit('/');
    cy.get(':nth-child(1) > .auth__input').type(data.login);
    cy.get('#password').type(data.password);
    cy.get('#password').type('{enter}')
    cy.visit('https://pokemonbattle-stage.ru/shop');
    cy.get('.shop__list > :nth-child(4)').should('be.visible');//
    cy.get(':nth-child(4) > .shop__img').should('be.visible');//
    cy.get(':nth-child(4) > .shop__title').should('be.visible');//
    cy.get(':nth-child(4) > .shop__title').contains(nameE[4])//
    cy.get(':nth-child(4) > .shop__price').should('be.visible');//
    cy.get(':nth-child(4) > .shop__price').contains(value[4]);//
    cy.get(':nth-child(4) > .shop__button').should('be.visible');//
    cy.visit('https://pokemonbattle-stage.ru/payment/4');//
    cy.get('.payment__info-button-v2').should('be.visible');
    cy.get('.payment__info-button-v2').click();
    cy.get('.pay__main-v2').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueE[4])//
    cy.get('.payment__subblock > :nth-child(1)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(1)').contains('Магазин')
    cy.get('.payment__subblock > :nth-child(3)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(3)').contains('Номер заказа')
    cy.get('.payment__subblock > :nth-child(5)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(5)').contains('Описание')
    cy.get('.payment__subblock > .payment__shopname > a').should('be.visible');
    cy.get('.payment__subblock > .payment__shopname > a').contains('pokemonbattle-stage.ru')
    cy.get('.payment__subblock > :nth-child(4)').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').contains(name[4])//
    cy.get('.pay__pay-header-v2').should('be.visible');
    cy.get('.pay__pay-header-v2').contains('Карта')
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type(kodi.karta)
    cy.get(':nth-child(1) > .pay_base-input-v2').should('be.visible');
    cy.get(':nth-child(1) > .pay_base-input-v2').click
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1228')
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').click
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VADIMIRKA')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('{enter}')//56456 
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__form-defolt').should('be.visible');
    cy.get('.payment__fielheader').should('be.visible');
    cy.get('#cardnumber').should('be.visible');
    cy.get('#cardnumber').click;
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__span-defolt').should('be.visible');
    cy.get('.payment__defolt-decline').should('be.visible');
    cy.get('.payment__submit-button').should('be.visible');
    cy.get('.payment__submit-button').type('{enter}');
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueEE[4])//
  })

  it('Покупка аватара №6', function () {
    cy.visit('/');
    cy.get(':nth-child(1) > .auth__input').type(data.login);
    cy.get('#password').type(data.password);
    cy.get('#password').type('{enter}')
    cy.visit('https://pokemonbattle-stage.ru/shop');
    cy.get('.shop__list > :nth-child(6)').should('be.visible');//
    cy.get(':nth-child(6) > .shop__img').should('be.visible');//
    cy.get(':nth-child(6) > .shop__title').should('be.visible');//
    cy.get(':nth-child(6) > .shop__title').contains(nameE[6])//
    cy.get(':nth-child(6) > .shop__price').should('be.visible');//
    cy.get(':nth-child(6) > .shop__price').contains(value[6]);//
    cy.get(':nth-child(6) > .shop__button').should('be.visible');//
    cy.visit('https://pokemonbattle-stage.ru/payment/6');//
    cy.get('.payment__info-button-v2').should('be.visible');
    cy.get('.payment__info-button-v2').click();
    cy.get('.pay__main-v2').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueE[6])//
    cy.get('.payment__subblock > :nth-child(1)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(1)').contains('Магазин')
    cy.get('.payment__subblock > :nth-child(3)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(3)').contains('Номер заказа')
    cy.get('.payment__subblock > :nth-child(5)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(5)').contains('Описание')
    cy.get('.payment__subblock > .payment__shopname > a').should('be.visible');
    cy.get('.payment__subblock > .payment__shopname > a').contains('pokemonbattle-stage.ru')
    cy.get('.payment__subblock > :nth-child(4)').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').contains(name[6])//
    cy.get('.pay__pay-header-v2').should('be.visible');
    cy.get('.pay__pay-header-v2').contains('Карта')
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type(kodi.karta)
    cy.get(':nth-child(1) > .pay_base-input-v2').should('be.visible');
    cy.get(':nth-child(1) > .pay_base-input-v2').click
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1228')
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').click
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VADIMIRKA')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('{enter}')//56456 
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__form-defolt').should('be.visible');
    cy.get('.payment__fielheader').should('be.visible');
    cy.get('#cardnumber').should('be.visible');
    cy.get('#cardnumber').click;
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__span-defolt').should('be.visible');
    cy.get('.payment__defolt-decline').should('be.visible');
    cy.get('.payment__submit-button').should('be.visible');
    cy.get('.payment__submit-button').type('{enter}');
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueEE[6])//
  })

  it('Покупка аватара №7', function () {
    cy.visit('/');
    cy.get(':nth-child(1) > .auth__input').type(data.login);
    cy.get('#password').type(data.password);
    cy.get('#password').type('{enter}')
    cy.visit('https://pokemonbattle-stage.ru/shop');
    cy.get('.shop__list > :nth-child(7)').should('be.visible');//
    cy.get(':nth-child(7) > .shop__img').should('be.visible');//
    cy.get(':nth-child(7) > .shop__title').should('be.visible');//
    cy.get(':nth-child(7) > .shop__title').contains(nameE[7])//
    cy.get(':nth-child(7) > .shop__price').should('be.visible');//
    cy.get(':nth-child(7) > .shop__price').contains(value[7]);//
    cy.get(':nth-child(7) > .shop__button').should('be.visible');//
    cy.visit('https://pokemonbattle-stage.ru/payment/7');//
    cy.get('.payment__info-button-v2').should('be.visible');
    cy.get('.payment__info-button-v2').click();
    cy.get('.pay__main-v2').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueE[7])//
    cy.get('.payment__subblock > :nth-child(1)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(1)').contains('Магазин')
    cy.get('.payment__subblock > :nth-child(3)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(3)').contains('Номер заказа')
    cy.get('.payment__subblock > :nth-child(5)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(5)').contains('Описание')
    cy.get('.payment__subblock > .payment__shopname > a').should('be.visible');
    cy.get('.payment__subblock > .payment__shopname > a').contains('pokemonbattle-stage.ru')
    cy.get('.payment__subblock > :nth-child(4)').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').contains(name[7])//
    cy.get('.pay__pay-header-v2').should('be.visible');
    cy.get('.pay__pay-header-v2').contains('Карта')
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type(kodi.karta)
    cy.get(':nth-child(1) > .pay_base-input-v2').should('be.visible');
    cy.get(':nth-child(1) > .pay_base-input-v2').click
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1228')
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').click
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VADIMIRKA')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('{enter}')//56456 
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__form-defolt').should('be.visible');
    cy.get('.payment__fielheader').should('be.visible');
    cy.get('#cardnumber').should('be.visible');
    cy.get('#cardnumber').click;
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__span-defolt').should('be.visible');
    cy.get('.payment__defolt-decline').should('be.visible');
    cy.get('.payment__submit-button').should('be.visible');
    cy.get('.payment__submit-button').type('{enter}');
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueEE[7])//
  })

  it('Покупка аватара №8', function () {
    cy.visit('/');
    cy.get(':nth-child(1) > .auth__input').type(data.login);
    cy.get('#password').type(data.password);
    cy.get('#password').type('{enter}')
    cy.visit('https://pokemonbattle-stage.ru/shop');
    cy.get('.shop__list > :nth-child(8)').should('be.visible');//
    cy.get(':nth-child(8) > .shop__img').should('be.visible');//
    cy.get(':nth-child(8) > .shop__title').should('be.visible');//
    cy.get(':nth-child(8) > .shop__title').contains(nameE[8])//
    cy.get(':nth-child(8) > .shop__price').should('be.visible');//
    cy.get(':nth-child(8) > .shop__price').contains(value[8]);//
    cy.get(':nth-child(8) > .shop__button').should('be.visible');//
    cy.visit('https://pokemonbattle-stage.ru/payment/8');//
    cy.get('.payment__info-button-v2').should('be.visible');
    cy.get('.payment__info-button-v2').click();
    cy.get('.pay__main-v2').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueE[8])//
    cy.get('.payment__subblock > :nth-child(1)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(1)').contains('Магазин')
    cy.get('.payment__subblock > :nth-child(3)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(3)').contains('Номер заказа')
    cy.get('.payment__subblock > :nth-child(5)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(5)').contains('Описание')
    cy.get('.payment__subblock > .payment__shopname > a').should('be.visible');
    cy.get('.payment__subblock > .payment__shopname > a').contains('pokemonbattle-stage.ru')
    cy.get('.payment__subblock > :nth-child(4)').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').contains(name[8])//
    cy.get('.pay__pay-header-v2').should('be.visible');
    cy.get('.pay__pay-header-v2').contains('Карта')
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type(kodi.karta)
    cy.get(':nth-child(1) > .pay_base-input-v2').should('be.visible');
    cy.get(':nth-child(1) > .pay_base-input-v2').click
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1228')
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').click
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VADIMIRKA')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('{enter}')//56456 
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__form-defolt').should('be.visible');
    cy.get('.payment__fielheader').should('be.visible');
    cy.get('#cardnumber').should('be.visible');
    cy.get('#cardnumber').click;
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__span-defolt').should('be.visible');
    cy.get('.payment__defolt-decline').should('be.visible');
    cy.get('.payment__submit-button').should('be.visible');
    cy.get('.payment__submit-button').type('{enter}');
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueEE[8])//
  })

  it('Покупка аватара №9', function () {
    cy.visit('/');
    cy.get(':nth-child(1) > .auth__input').type(data.login);
    cy.get('#password').type(data.password);
    cy.get('#password').type('{enter}')
    cy.visit('https://pokemonbattle-stage.ru/shop');
    cy.get('.shop__list > :nth-child(9)').should('be.visible');//
    cy.get(':nth-child(9) > .shop__img').should('be.visible');//
    cy.get(':nth-child(9) > .shop__title').should('be.visible');//
    cy.get(':nth-child(9) > .shop__title').contains(nameE[9])//
    cy.get(':nth-child(9) > .shop__price').should('be.visible');//
    cy.get(':nth-child(9) > .shop__price').contains(value[9]);//
    cy.get(':nth-child(9) > .shop__button').should('be.visible');//
    cy.visit('https://pokemonbattle-stage.ru/payment/9');//
    cy.get('.payment__info-button-v2').should('be.visible');
    cy.get('.payment__info-button-v2').click();
    cy.get('.pay__main-v2').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueE[9])//
    cy.get('.payment__subblock > :nth-child(1)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(1)').contains('Магазин')
    cy.get('.payment__subblock > :nth-child(3)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(3)').contains('Номер заказа')
    cy.get('.payment__subblock > :nth-child(5)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(5)').contains('Описание')
    cy.get('.payment__subblock > .payment__shopname > a').should('be.visible');
    cy.get('.payment__subblock > .payment__shopname > a').contains('pokemonbattle-stage.ru')
    cy.get('.payment__subblock > :nth-child(4)').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').contains(name[9])//
    cy.get('.pay__pay-header-v2').should('be.visible');
    cy.get('.pay__pay-header-v2').contains('Карта')
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type(kodi.karta)
    cy.get(':nth-child(1) > .pay_base-input-v2').should('be.visible');
    cy.get(':nth-child(1) > .pay_base-input-v2').click
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1228')
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').click
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VADIMIRKA')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('{enter}')//56456 
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__form-defolt').should('be.visible');
    cy.get('.payment__fielheader').should('be.visible');
    cy.get('#cardnumber').should('be.visible');
    cy.get('#cardnumber').click;
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__span-defolt').should('be.visible');
    cy.get('.payment__defolt-decline').should('be.visible');
    cy.get('.payment__submit-button').should('be.visible');
    cy.get('.payment__submit-button').type('{enter}');
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueEE[9])//
  })

  it('Покупка аватара №10', function () {
    cy.visit('/');
    cy.get(':nth-child(1) > .auth__input').type(data.login);
    cy.get('#password').type(data.password);
    cy.get('#password').type('{enter}')
    cy.visit('https://pokemonbattle-stage.ru/shop');
    cy.get('.shop__list > :nth-child(10)').should('be.visible');//
    cy.get(':nth-child(10) > .shop__img').should('be.visible');//
    cy.get(':nth-child(10) > .shop__title').should('be.visible');//
    cy.get(':nth-child(10) > .shop__title').contains(nameE[10])//
    cy.get(':nth-child(10) > .shop__price').should('be.visible');//
    cy.get(':nth-child(10) > .shop__price').contains(value[10]);//
    cy.get(':nth-child(10) > .shop__button').should('be.visible');//
    cy.visit('https://pokemonbattle-stage.ru/payment/10');//
    cy.get('.payment__info-button-v2').should('be.visible');
    cy.get('.payment__info-button-v2').click();
    cy.get('.pay__main-v2').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueE[10])//
    cy.get('.payment__subblock > :nth-child(1)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(1)').contains('Магазин')
    cy.get('.payment__subblock > :nth-child(3)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(3)').contains('Номер заказа')
    cy.get('.payment__subblock > :nth-child(5)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(5)').contains('Описание')
    cy.get('.payment__subblock > .payment__shopname > a').should('be.visible');
    cy.get('.payment__subblock > .payment__shopname > a').contains('pokemonbattle-stage.ru')
    cy.get('.payment__subblock > :nth-child(4)').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').contains(name[10])//
    cy.get('.pay__pay-header-v2').should('be.visible');
    cy.get('.pay__pay-header-v2').contains('Карта')
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type(kodi.karta)
    cy.get(':nth-child(1) > .pay_base-input-v2').should('be.visible');
    cy.get(':nth-child(1) > .pay_base-input-v2').click
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1228')
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').click
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VADIMIRKA')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('{enter}')//56456 
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__form-defolt').should('be.visible');
    cy.get('.payment__fielheader').should('be.visible');
    cy.get('#cardnumber').should('be.visible');
    cy.get('#cardnumber').click;
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__span-defolt').should('be.visible');
    cy.get('.payment__defolt-decline').should('be.visible');
    cy.get('.payment__submit-button').should('be.visible');
    cy.get('.payment__submit-button').type('{enter}');
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueEE[10])//
  })

  it('Покупка аватара №11', function () {
    cy.visit('/');
    cy.get(':nth-child(1) > .auth__input').type(data.login);
    cy.get('#password').type(data.password);
    cy.get('#password').type('{enter}')
    cy.visit('https://pokemonbattle-stage.ru/shop');
    cy.get('.shop__list > :nth-child(11)').should('be.visible');//
    cy.get(':nth-child(11) > .shop__img').should('be.visible');//
    cy.get(':nth-child(11) > .shop__title').should('be.visible');//
    cy.get(':nth-child(11) > .shop__title').contains(nameE[11])//
    cy.get(':nth-child(11) > .shop__price').should('be.visible');//
    cy.get(':nth-child(11) > .shop__price').contains(value[11]);//
    cy.get(':nth-child(11) > .shop__button').should('be.visible');//
    cy.visit('https://pokemonbattle-stage.ru/payment/11');//
    cy.get('.payment__info-button-v2').should('be.visible');
    cy.get('.payment__info-button-v2').click();
    cy.get('.pay__main-v2').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueE[11])//
    cy.get('.payment__subblock > :nth-child(1)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(1)').contains('Магазин')
    cy.get('.payment__subblock > :nth-child(3)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(3)').contains('Номер заказа')
    cy.get('.payment__subblock > :nth-child(5)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(5)').contains('Описание')
    cy.get('.payment__subblock > .payment__shopname > a').should('be.visible');
    cy.get('.payment__subblock > .payment__shopname > a').contains('pokemonbattle-stage.ru')
    cy.get('.payment__subblock > :nth-child(4)').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').contains(name[11])//
    cy.get('.pay__pay-header-v2').should('be.visible');
    cy.get('.pay__pay-header-v2').contains('Карта')
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type(kodi.karta)
    cy.get(':nth-child(1) > .pay_base-input-v2').should('be.visible');
    cy.get(':nth-child(1) > .pay_base-input-v2').click
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1228')
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').click
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VADIMIRKA')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('{enter}')//56456 
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__form-defolt').should('be.visible');
    cy.get('.payment__fielheader').should('be.visible');
    cy.get('#cardnumber').should('be.visible');
    cy.get('#cardnumber').click;
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__span-defolt').should('be.visible');
    cy.get('.payment__defolt-decline').should('be.visible');
    cy.get('.payment__submit-button').should('be.visible');
    cy.get('.payment__submit-button').type('{enter}');
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueEE[11])//
  })

  it('Покупка аватара №12', function () {
    cy.visit('/');
    cy.get(':nth-child(1) > .auth__input').type(data.login);
    cy.get('#password').type(data.password);
    cy.get('#password').type('{enter}')
    cy.visit('https://pokemonbattle-stage.ru/shop');
    cy.get('.shop__list > :nth-child(12)').should('be.visible');//
    cy.get(':nth-child(12) > .shop__img').should('be.visible');//
    cy.get(':nth-child(12) > .shop__title').should('be.visible');//
    cy.get(':nth-child(12) > .shop__title').contains(nameE[12])//
    cy.get(':nth-child(12) > .shop__price').should('be.visible');//
    cy.get(':nth-child(12) > .shop__price').contains(value[12]);//
    cy.get(':nth-child(12) > .shop__button').should('be.visible');//
    cy.visit('https://pokemonbattle-stage.ru/payment/12');//
    cy.get('.payment__info-button-v2').should('be.visible');
    cy.get('.payment__info-button-v2').click();
    cy.get('.pay__main-v2').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueE[12])//
    cy.get('.payment__subblock > :nth-child(1)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(1)').contains('Магазин')
    cy.get('.payment__subblock > :nth-child(3)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(3)').contains('Номер заказа')
    cy.get('.payment__subblock > :nth-child(5)').should('be.visible');
    cy.get('.payment__subblock > :nth-child(5)').contains('Описание')
    cy.get('.payment__subblock > .payment__shopname > a').should('be.visible');
    cy.get('.payment__subblock > .payment__shopname > a').contains('pokemonbattle-stage.ru')
    cy.get('.payment__subblock > :nth-child(4)').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').should('be.visible');
    cy.get('.payment__subblock > .k_info_pr').contains(name[12])//
    cy.get('.pay__pay-header-v2').should('be.visible');
    cy.get('.pay__pay-header-v2').contains('Карта')
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type(kodi.karta)
    cy.get(':nth-child(1) > .pay_base-input-v2').should('be.visible');
    cy.get(':nth-child(1) > .pay_base-input-v2').click
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1228')
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').should('be.visible');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').click
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').should('be.visible');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').click
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('VADIMIRKA')
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('{enter}')//56456 
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__form-defolt').should('be.visible');
    cy.get('.payment__fielheader').should('be.visible');
    cy.get('#cardnumber').should('be.visible');
    cy.get('#cardnumber').click;
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__span-defolt').should('be.visible');
    cy.get('.payment__defolt-decline').should('be.visible');
    cy.get('.payment__submit-button').should('be.visible');
    cy.get('.payment__submit-button').type('{enter}');
    cy.get('.payment__logo-img').should('be.visible');
    cy.get('.payment__bigtext').should('be.visible');
    cy.get('.payment__info-text-new').should('be.visible');
    cy.get('.payment__info-text-new').contains(valueEE[12])//
  })
})