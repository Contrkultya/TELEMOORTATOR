<template>
    <v-container class="grey lighten-5">
        <v-row no-gutters>
            <v-col cols="12" sm="6" md="8" >
                <v-card class="mx-auto" outlined>
                    <v-list-item three-line>
                        <div class="text-center">
                            <v-img :src="require('../assets/defava.png')" max-width="125"/>
                            <v-btn x-small color="success" dark>Поменять аватар</v-btn>
                        </div>
                        <v-list-item-content class="ml-5">
                            <v-list-item-title class="headline mb-1">Username</v-list-item-title>
                            <v-list-item-subtitle>Info</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-actions>
                    </v-card-actions>
                </v-card>
                <v-card class="mx-auto mt-4 " tile>
                    <v-list :disabled="disabled" :dense="dense" :two-line="twoLine" :three-line="threeLine" :shaped="shaped" :flat="flat" :subheader="subheader" :inactive="inactive" :sub-group="subGroup" :nav="nav" :avatar="avatar" :rounded="rounded">
                        <v-subheader>Отзывы</v-subheader>
                        <v-list-item-group v-model="item" color="primary">
                            <v-list-item v-for="(item, i) in items" :key="i"
                            >
                                <v-list-item-avatar v-if="avatar">
                                    <v-img :src="item.avatar"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title v-html="item.title"></v-list-item-title>
                                    <v-list-item-subtitle v-if="twoLine || threeLine" v-html="item.subtitle"></v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </v-col>
            <v-col cols="6" md="4">
                <v-card class="pa-2 ml-4"outlined tile>
                    Рейтинг: <v-rating v-model="rating" class="d-inline-block" background-color="purple lighten-3" color="purple" small></v-rating> <br>
                    Заданий выполнено : 228 <br>
                    Заданий создано: 1337 <br>
                    <v-btn color="success" dark large>Создать задание</v-btn> <br>
                    <v-btn color="success" dark large>Мои задания</v-btn>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Account"
    }
</script>

<style scoped>

</style>