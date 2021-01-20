<template>
    <form
        v-on:submit.prevent="sendForm"

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
            Отправить
        </button>
    </form>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"

export default {
    data(){
        return {
            name: "",
            phone: "",
            address: "",
            products: []
        }
    },
    computed: {
        ...mapGetters(["CART"]),
        ...mapMutations(["CLEAR_CART"]),
    },
    methods: {
        async sendForm(){
            
            if(this.name == "" || this.phone == "" || this.address == ""){
                return console.log("no");
            }

            this.CART.forEach( item => {
                let i = item.id;
                this.products.push(i);
            });

            let sendingObj = {
                name: this.name,
                phone: this.phone,
                address: this.address,
                products: this.products
            };

            try {
                let url = 'https://jsonplaceholder.typicode.com/posts';
                
                await fetch(url, {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    redirect: 'follow',
                    referrer: 'no-referrer',
                    body: JSON.stringify(sendingObj)
                });

            } catch(e){
                console.log(e)
            } 

            this.CLEAR_CART;
            
            this.$emit("send");

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