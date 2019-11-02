import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        users: [
        {avatar_url:"https://firebasestorage.googleapis.com/v0/b/telemoortation.appspot.com/o/igor.png?alt=media&token=ebee1142-d8d2-4a54-9225-87f0950ce216" , birth_date: {seconds: 915130800, nanoseconds: 0}, fio:"Крупкин Игорь Андреевич",is_admin: false , login:"your_submissive", nick_name:"your_submissive", phone:"89829152150", rate:0 },
        {avatar_url:"https://firebasestorage.googleapis.com/v0/b/telemoortation.appspot.com/o/igor.png?alt=media&token=ebee1142-d8d2-4a54-9225-87f0950ce216" , birth_date: {seconds: 915130800, nanoseconds: 0}, fio:"Костерин Сергей Олегович",is_admin: false , login:"contrcultya", nick_name:"contrcultya", phone:"89829152153", rate:100 },
        {avatar_url:"https://firebasestorage.googleapis.com/v0/b/telemoortation.appspot.com/o/igor.png?alt=media&token=ebee1142-d8d2-4a54-9225-87f0950ce216" , birth_date: {seconds: 915130800, nanoseconds: 0}, fio:"Екимова Анастасия Витальевна",is_admin: false , login:"mamayuavtelevisore", nick_name:"mamayuavtelevisore", phone:"89829152158", rate:12 }
    ],
        works: [
            {info: "Заснять текущее состояние фаблаба" , location:"[]", master:"contrcultya", price:700, slave:"your_submissive", status:1, submit_time:{seconds: 915130800, nanoseconds: 0}, time_done:{seconds: 915130800, nanoseconds: 0}, time_limit:{seconds: 915130800, nanoseconds: 0}, type:0, video_url:"", },
            {info: "Покажи кофемашину в коридоре" , location:"[]", master:"contrcultya", price:700, slave:"your_submissive", status:1, submit_time:{seconds: 915130800, nanoseconds: 0}, time_done:{seconds: 915130800, nanoseconds: 0}, time_limit:{seconds: 915130800, nanoseconds: 0}, type:0, video_url:"", },
            {info: "Покажи соседний кабинет" , location:"[]", master:"contrcultya", price:700, slave:"your_submissive", status:1, submit_time:{seconds: 915130800, nanoseconds: 0}, time_done:{seconds: 915130800, nanoseconds: 0}, time_limit:{seconds: 915130800, nanoseconds: 0}, type:0, video_url:"", },
            {info: "Хочу увидеть лестницу" , location:"[]", master:"contrcultya", price:700, slave:"your_submissive", status:1, submit_time:{seconds: 915130800, nanoseconds: 0}, time_done:{seconds: 915130800, nanoseconds: 0}, time_limit:{seconds: 915130800, nanoseconds: 0}, type:0, video_url:"", },
            {info: "Покажи ассортимент Магнита" , location:"[]", master:"contrcultya", price:700, slave:"your_submissive", status:1, submit_time:{seconds: 915130800, nanoseconds: 0}, time_done:{seconds: 915130800, nanoseconds: 0}, time_limit:{seconds: 915130800, nanoseconds: 0}, type:0, video_url:"", },
        ],
    },
    getters:{},
    mutations:{},
    actions:{},
})