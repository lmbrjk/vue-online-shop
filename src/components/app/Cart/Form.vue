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

export default {
    data(){
        return {
            name: "",
            phone: "",
            address: "",
        }
    },
    methods: {
        async sendForm(){
            if(this.name == "" || this.phone == "" || this.address == ""){
                return console.log("no");
            }

            console.log("yes");

            // let sendingObj = {
            //     sunInv: this.sumValue,
            //     multValue: this.multValue
            // };
           
            // let url = 'https://jsonplaceholder.typicode.com/posts';

            // return new Promise( (resolve, reject) => {
                
            //     let request = new XMLHttpRequest();
            
            //     request.open('POST', url);
            //     request.setRequestHeader('Content-Type', 'application/json');

            //     request.onreadystatechange = function(){
            //         if(!request.status == 200 && request.readyState == 4){
            //             reject(this.error);
                    
            //         } else { 
            //             resolve(request);
            //         }
            //     };

            //     request.send(JSON.stringify(sendingObj));
                
            // })
            // .then( (data) => {
            //     console.log(data);

            // })
            // .catch( (error) => console.log(error));
            
            
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