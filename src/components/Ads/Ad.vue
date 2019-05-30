<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img :src="ad.imageSrc" height="150px"> </v-img>
          <v-card-text>
            <h1 class="text--primary">{{ ad.title }}</h1>
            <p>{{ ad.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <editAdModal :ad="ad" v-if="isOwner"></editAdModal>
            <app-buy-modal :ad="ad"></app-buy-modal>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import editAdModal from "./EditAdModal";
export default {
    components: { editAdModal },
    props: ["id"],
    computed: {
        ad() {
            const id = this.id;
            return this.$store.getters.adById(id);
        },
        isOwner() {
            return this.ad.ownerId === this.$store.getters.user.id;
        }
    }
};
</script>
