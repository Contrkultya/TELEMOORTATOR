<template>
    <div class="tasks">
        <v-card class="mx-auto" v-for="item in getTasks">
            <div :class="getDificulty(item.type)">
                <p>{{typeDificulty(item.type)}}</p>
            </div>
            <div class="d-flex flex-no-wrap justify-space-between">
            <div>
                <v-card-title>{{item.info}}</v-card-title>
                <v-card-subtitle>{{item.desc}}</v-card-subtitle>
                <v-card-actions>
                    <v-btn large>Написать</v-btn>
                    <v-btn large color="blue lighten-4 ">Взять</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </div>
                <div>
                    <v-card-title>{{toDateTime(item.submit_time.seconds)}}<br></v-card-title>
                    <v-card-subtitle>{{item.master}}<br></v-card-subtitle>
                    <v-card-title>Цена: {{item.price}}</v-card-title>
                </div>
            </div>
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
        computed: {
            getTasks() {
                return this.$store.getters.getTasks;
            }
        },
        methods: {
            toDateTime(secs) {
                var t = new Date(1970, 0, 1);
                t.setSeconds(secs);
                var outism = "" + t.getDay() + "." + t.getMonth() + '|' + t.getHours() + ":" + t.getMinutes();
                if (t.getMinutes() == 0) {
                    outism += '0';
                }
                return outism;
            },
            getDificulty(type) {
                let colors = ['light-green accent-3', 'yellow accent-4', 'orange accent-4'];
                return colors[type] + ' header';

            },
            typeDificulty(type) {
                let difs = ['Просто', 'Средне', 'Сложно'];
                return difs[type];
            }

        }

    }

</script>

<style scoped>
    .mx-auto {
        max-width: 97%;
        margin-top: 20px;
    }

    .mx-auto .header {
        height: 70px;
    }

    .mx-auto .header p {
        color: white;
        font-family: Helvetica, serif;
        font-weight: bold;
        font-size: 20pt;
        padding-top: 15px;
        padding-left: 20px;
    }
</style>