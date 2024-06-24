---
layout: home

hero:
  name: "Rust App"
  text: "Документация"
  tagline: Подробно рассказываем про функционал сервиса, даём полезные советы
  actions:
    - theme: brand
      text: Работа с сервисом
      link: /ru/getting-started/getting-started

features:
  - icon: 🛠️
    title: Информация об игроке
    details: Где играет, с кем играет, как давно играет, что делает?
  - icon: 🛠️
    title: Проверка на читы / макросы
    details: Следите за жалобами на игрока и вызывайте его на проверку не заходя в игру
  - icon:  🛠️
    title: Управляйте модераторами
    details: Следите за статистикой, подсчитывайте ЗП, отслеживайте действия
---

## Команда разработчиков

<script setup>
import { VPTeamMembers } from 'vitepress/theme';
import { withBase, useData } from 'vitepress';

const members = [
  {
    avatar: '/assets/founders/hougan.jpg',
    name: 'Hougan',
    title: 'CTO',
  },
  {
    avatar: '/assets/founders/olkuts.jpg',
    name: 'Olkuts',
    title: 'Software Engineer',
  },
  {
    avatar: '/assets/founders/xacku.jpg',
    name: 'Xacku',
    title: 'СEO',
  },
];


const shuffled = members
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
</script>

<VPTeamMembers size="small" :members="shuffled" />