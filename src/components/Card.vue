<template>
  <v-card
    class="col-5 mr-2 ml-2 mb-3"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{name}}
        </v-list-item-title>
        <div class="overline mb-2">
          {{price}} UAN
        </div>
        <v-list-item-subtitle>{{text}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

  </v-card>
</template>

<script>
export default {
  props: ['name', 'price', 'text']

}
</script>

<style scoped>

</style>
