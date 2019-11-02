<template>

    <div class="tasks">
        <v-card class="mx-auto">
        <div class="header">
            <p>Сложно</p>
        </div>
        <v-card-title>Обыграть Моора в  нарды</v-card-title>
        <v-card-subtitle>Форэк майн</v-card-subtitle>
    </v-card>
        <v-card class="mx-auto">
            <div class="header">
                <p>Сложно</p>
            </div>
            <v-card-title>Обыграть Моора в  нарды</v-card-title>
            <v-card-subtitle>Форэк майн</v-card-subtitle>
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