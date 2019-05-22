<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb3">Orders</h1>
        <v-list subheader two-line>
          <v-subheader>Hangout notifications</v-subheader>
          <v-list-tile avatar v-for="order in orders" :key="order.id">
            <v-list-tile-action>
              <v-checkbox :input-value="order.done" @change="markDone(order)" color="success"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-title-action>
              <v-btn :to="'/ad/' + order.adId" class="primary">Open</v-btn>
            </v-list-title-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: 'fdi3',
          name: 'Vlados',
          phone: '89219877232',
          adId: '123',
          done: false
        }
      ],
      markDown: false
    }
  },
  methods: {
    markDone(order) {
      order.done = true
    }
  }
}
</script>
