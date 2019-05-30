<template>
  <v-dialog
      v-model="modal"
      max-width="400"
    >
    <v-btn flat slot="activator">Edit</v-btn>
     
     <v-card>
         <v-container>
             <v-layout row>
                 <v-flex xs12>
                     <v-card-title>
                            <v-text-field
                                name="title"
                                label="Title"
                                type="text"
                                v-model="editedTitle"
                            ></v-text-field>
                     </v-card-title>
                 </v-flex>
             </v-layout>
             <v-layout row>
                 <v-flex xs12>
                     <v-card-text>
                          <v-text-field
                                name="description"
                                label="Description"
                                type="text"
                                v-model="editedDescription"
                            ></v-text-field>
                     </v-card-text>
                 </v-flex>
             </v-layout>
             <v-layout row>
                 <v-flex xs12>
                     <v-card-actions>
                         <v-spacer></v-spacer>
                         <v-btn class="warning" @click="onCancel">Cancel</v-btn>
                         <v-btn class="success" @click="onSave">Save</v-btn>
                     </v-card-actions>
                 </v-flex>
             </v-layout>
         </v-container>
     </v-card>
    </v-dialog>
</template>
<script>
export default {
    props: ["ad"],
    data() {
        return {
            modal: false,
            editedDescription: this.ad.description,
            editedTitle: this.ad.title
        };
    },
    methods: {
        onCancel() {
            this.modal = false;
            this.editedDescription = this.ad.description;
            this.editedTitle = this.ad.editedTitle;
        },
        onSave() {
            if (this.editedDescription && this.editedTitle) {
                this.$store.dispatch("updateAd", {
                    title: this.editedTitle,
                    description: this.editedDescription,
                    id: this.ad.id
                });
                this.modal = false;
            }
        }
    }
};
</script>
