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
          <div class="d-flex justify-center flex-wrap">
            <card-product
              v-for="product of products1"
              :key="product.id"
              :name="product.name"
              :price="product.price"
              :text="product.text"
            ></card-product>
          </div>
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
      drawer: true,
      products1: [
        {
          name: 'Phone',
          price: '9999',
          text: 'Greyhound divisely hello coldly fonwderfully',
          id: '44456546546'
        },
        {
          name: 'Phone',
          price: '9999',
          text: 'Greyhound divisely hello coldly fonwderfully',
          id: '23456546546'
        },
        {
          name: 'Phone',
          price: '9999',
          text: 'Greyhound divisely hello coldly fonwderfully',
          id: '43456546546'
        },
        {
          name: 'Phone',
          price: '9999',
          text: 'Greyhound divisely hello coldly fonwderfully',
          id: '43186546546'
        },
        {
          name: 'Phone',
          price: '9999',
          text: 'Greyhound divisely hello coldly fonwderfully',
          id: '43236546546'
        },
        {
          name: 'Phone',
          price: '9999',
          text: 'Greyhound divisely hello coldly fonwderfully',
          id: '43236541546'
        },
        {
          name: 'Phone',
          price: '9999',
          text: 'Greyhound divisely hello coldly fonwderfully',
          id: '43236546246'
        },
        {
          name: 'Phone',
          price: '9999',
          text: 'Greyhound divisely hello coldly fonwderfully',
          id: '43236546536'
        },
        {
          name: 'Phone',
          price: '9999',
          text: 'Greyhound divisely hello coldly fonwderfully',
          id: '43236546544'
        },
        {
          name: 'Phone',
          price: '9999',
          text: 'Greyhound divisely hello coldly fonwderfully',
          id: '43456534546'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  html {
    overflow: hidden;
  }
  .full-height{
    height: calc(100vh - 332px);
  }
  .main {
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
