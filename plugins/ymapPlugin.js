import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
        apiKey: '6660c9bb-8c84-4c0b-bf6d-10df05ac574f',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
    } // настройки плагина

Vue.use(YmapPlugin, settings);