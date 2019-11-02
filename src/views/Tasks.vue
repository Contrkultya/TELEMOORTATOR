<template>
    <div class="tasks">
        <v-card class="mx-auto" v-for="item in getTasks">
            <div class="header">
                <p>Сложно</p>
            </div>
            <v-card-title>{{item.info}}</v-card-title>
            <v-card-subtitle>Форэк майн</v-card-subtitle>
            <v-spacer></v-spacer>
            <v-card-actions>
                <v-btn text>Написать</v-btn>
                <v-btn color="purple" text>Взять</v-btn>
                <v-spacer></v-spacer>
                Цена: 300 bucks
            </v-card-actions>
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
                this.$store.dispatch('worksModule/openDBChannel');
                return this.$store.getters.getTasks();
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