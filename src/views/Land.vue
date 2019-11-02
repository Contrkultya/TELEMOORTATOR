<template>
    <div id="land">
                <section>
                    <v-layout align-center="" class="" column wrap >
                        <v-flex xs12>
                            <v-container grid-list-xl >
                                <v-layout justify-space-around row wrap >
                                    <v-flex md4 xs12>
                                        <h1 class="mb-4">Хотите иметь возможность попасть в любую точку мира в любой момент?</h1>
                                        У вас есть такая возможность! С помошью сервиса teleport вы сможете оказаться
                                        именно там, где вам нужно.
                                        <h1 class="mb-4 mt-4">Как это работает?</h1>
                                        Нужно посмотреть на определенное место в городе? Узнать как пройти в
                                        определенное место? Оставьте свою заявку на teleport. Исполнители могут их выполнять.
                                        Результатом работы является прямая трансляция или видеозапись того, что требовалось в заявке.
                                        <v-btn x-large color="success" dark class="mt-4" to = "/sign-Up">Создать аккаунт</v-btn>
                                    </v-flex>
                                    <v-flex mr4 xs5  class="d-flex" justify="space-around">
                                        <v-flex>
                                        <v-img :src="require('../assets/pic1.jpg')" />
                                        <v-img :src="require('../assets/pic2.png')" class="mt-4"  />
                                        </v-flex>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-flex>
                    </v-layout>
                </section>


    </div>

</template>

<script>
    export default {
        name: "Land"
    }
</script>

<style scoped>

</style>
