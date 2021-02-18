<template>
  <v-col
    cols="6"
  >
    <v-card
      class=" mb-3"
      max-width="380px"
      min-width="300px"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-avatar
          tile
          size="100"
          color="white"
        >
          <v-img
            :src="image"
            contain
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">
            {{name}}
          </v-list-item-title>
          <div class="overline mb-2">
            {{price}} {{currency}}
          </div>
          <v-list-item-subtitle>{{text}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ['name', 'image', 'price', 'text'],
  computed: {
    currency () {
      return this.$store.getters.currency
    }
  }
}
</script>

<style scoped lang="scss">
  .v-application .headline{
    font-size: 1.2rem !important;
    font-weight: 500;
  }

</style>
