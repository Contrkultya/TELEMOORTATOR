<template>
    <div>
    <v-card class="mx-auto" v-for="item in getTasks">
        <div class="header">
            <p>HARD</p>
        </div>
        <v-card-title>{{item.info}}</v-card-title>
        <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
        <v-card-actions>
            <v-btn text></v-btn>
            <v-btn color="purple" text>Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                    tasks.
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
    </div>
</template>

<script>
    export default {
        name: "tasks",
        data() {
            return {
                show: false
            }
        },
        computed:{
            getTasks(){
                return this.$store.getters.getTasks;
            }
        }
    }
</script>

<style scoped>
    .mx-auto{
        max-width: 97%;
        margin-top: 20px;
    }
    .mx-auto .header{
        background-color: forestgreen;
        height: 70px;
    }
    .mx-auto .header p{
        color: white;
        font-family: Helvetica,serif;
        font-weight: bold;
        font-size: 20pt;
        padding-top: 15px;
        padding-left: 20px;
    }
</style>