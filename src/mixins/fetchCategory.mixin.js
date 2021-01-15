export default {
    async mounted(){
        // this.category - номер категории товара, взятый из 
        // компонента определенной категории. Он подставляется в параметр гет-запроса для
        // вывода товаров определенной категории
        this.products = await this.$store.dispatch("fetchProducts", this.category);
        
        // this.loading - отключаем лоадер при начале загрузки товаров
        this.loading = false;
    }
}