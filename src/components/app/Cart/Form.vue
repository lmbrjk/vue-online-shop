<template>
    <form
        class="form"
    >
        <div class="prod-in-cart__text">Оформить заказ</div>
        <input
            v-model="name"

            class="form__input"
            type="text"
            placeholder="Ваше имя"
        />
        <input
            v-model="phone"

            class="form__input"
            type="tel"
            placeholder="Телефон"
        />
        <input 
            v-model="address"

            class="form__input"
            type="text"
            placeholder="Адрес"
        />
        <button
            class="button button_black cursor"
            type="submit"
        >
            Перейти к выбору
        </button>
    </form>
</template>

<script>

export default {
    data(){
        return {
            name: "",
            phone: "",
            address: "",
        }
    }
}
</script>

<style lang="scss">
.form {

    &__input {
        margin-bottom: 16px;
        padding: 14px;
        width: 100%;
        height: 50px;
        border: none;
        background: #F8F8F8;
        border-radius: 8px;
    }
}
</style>