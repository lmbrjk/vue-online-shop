import { mapActions, mapGetters } from "vuex";

export default {
    props: ["sorting"],
    computed: {
        ...mapGetters(["PRODUCTS", "PRODUCTS_BY_PRICE", "PRODUCTS_BY_RATING"])
    },
    methods: {
        ...mapActions(["GET_PRODUCTS"])
    },
    watch:{
        sorting(){
            if(this.sorting == "forPrice"){
                this.PRODUCTS_BY_PRICE
            }
            else if(this.sorting == "forRating"){
                this.PRODUCTS_BY_RATING
            }
        }
    },
    async mounted(){
        // this.category - номер категории товара, взятый из 
        // компонента определенной категории. Он подставляется в параметр гет-запроса для
        // вывода товаров определенной категории
        await this.GET_PRODUCTS(this.category);

        if(this.sorting == "forPrice"){
            this.PRODUCTS_BY_PRICE
        }
        else if(this.sorting == "forRating"){
            this.PRODUCTS_BY_RATING
        }
        
        // this.loading - отключаем лоадер при начале загрузки товаров
        this.loading = false;
    }
}