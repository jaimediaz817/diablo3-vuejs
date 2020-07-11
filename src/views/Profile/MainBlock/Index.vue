<template>
  <div class="grid-container">
    <div class="grid-item item-left">
      <TopHeroes v-if="hasHeroes" :heroes="topHeroes"/>
      <HeroesList v-if="hasHeroesList" :heroes="heroesList"/>
      <progressList :acts="profileData.progression"/>
    </div>
    <div class="grid-item item-right">
      <PlayerStats v-if="hasHeroesStatsData" :stats="statsData"/>
    </div>
  </div>
</template>

<script>
import TopHeroes from './TopHeroes/Index'
import HeroesList from './HeroesList/Index'
import ProgressList from './ProgressList/Index'
import PlayerStats from './PlayerStats/Index'

export default {
  name: 'MainBlock',
  components: {
    TopHeroes,
    HeroesList,
    ProgressList,
    PlayerStats
  },
  props: {
    profileData: {
      type: Object,
      required: true
    }
  },
  computed: {
    // Comprobamos que hay héroes
    hasHeroes () {
      return this.profileData.heroes.length > 0
    },
    // Devolvemos los 3 primeros
    topHeroes () {
      return this.profileData.heroes.slice(0, 3)
    },
    hasHeroesList () {
      return this.profileData.heroes.length > 3
    },
    hasHeroesStatsData () {
      return this.profileData.kills > 0 || this.profileData.paragonLevel > 0 || this.profileData.timePlayed > 0
    },
    heroesList () {
      return this.profileData.heroes.slice(3, this.profileData.heroes.length)
    },
    statsData () {
      const { paragonLevel, kills, timePlayed } = this.profileData
      return { paragonLevel, kills, timePlayed }
    }
  },
  mounted () {
    console.log('here')
  }
}
</script>

<style lang="stylus">
</style>
