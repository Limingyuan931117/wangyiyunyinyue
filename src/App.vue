<template>
  <div id="app" @dblclick="handleClick">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view /> -->
    {{message}}
    <input type="text" />
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { getDetail } from "@/api";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  message = "1231321";
  handleClick = () => {
    console.log(this.message);
  };
  created() {
    console.log("1");
    getDetail().then(res => {
      console.log(res);
    });
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
