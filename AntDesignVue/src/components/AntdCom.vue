<template>
  <div>
      {{ $route.params.id }}
      <a-menu>
        <a-menu-item>菜单项</a-menu-item>
        <a-sub-menu title="子菜单">
          <a-menu-item>子菜单项</a-menu-item>
        </a-sub-menu>
      </a-menu>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      msg: "hello"
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
  mounted(){
      console.log(this.$router.query.id)
  }
};
</script>
