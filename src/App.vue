<template>
  <v-app>
    <div class="d-flex justify-lg-space-between full-height">
      <v-navigation-drawer
        class="col-3"
        permanent
      >
        <bar-filter></bar-filter>
      </v-navigation-drawer>
      <div class="main col-9">
        <v-container fluid>
          <div class="d-flex justify-space-between flex-wrap" v-if="products.length">
            <card-product
              v-for="product of products"
              :key="product.id"
              :name="product.name"
              :image="require('./assets/products/' + product.image )"
              :price="Math.floor(product.price)"
              :text="product.description"
            ></card-product>
          </div>
          <div v-else> Нет результатов</div>
        </v-container>
      </div>
    </div>
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        <new-product></new-product>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import NewProduct from './components/NewProduct'
import Filter from './components/Filter'
import Card from './components/Card'

export default {
  components: {
    newProduct: NewProduct,
    barFilter: Filter,
    cardProduct: Card
  },
  data () {
    return {
      drawer: true
    }
  },
  computed: {
    products () {
      return this.$store.getters.products
    }
  }
}
</script>
<style lang="scss">
  html {
    overflow: hidden;
  }
  .full-height{
    height: calc(100vh - 299px);
  }
  .main {
    overflow-y: scroll;
    overflow-x: hidden;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
  }
  input[type='number'] {
    -moz-appearance: textfield !important;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
  }
  input[type='number'],
  input[type="number"]:hover,
  input[type="number"]:focus {
    appearance: none !important;
    -moz-appearance: textfield !important;
  }
  .v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{
    height: 119px;
  }
</style>
