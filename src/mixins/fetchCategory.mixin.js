import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["PRODUCTS"])
    },
    methods: {
        ...mapActions(["GET_PRODUCTS"])
    },
    async mounted(){
        // this.category - номер категории товара, взятый из 
        // компонента определенной категории. Он подставляется в параметр гет-запроса для
        // вывода товаров определенной категории
        await this.GET_PRODUCTS(this.category);

        // this.loading - отключаем лоадер при начале загрузки товаров
        this.loading = false;
    }
}