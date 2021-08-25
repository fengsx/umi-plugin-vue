<template>
  <div class="name-block">
    <el-input placeholder="Input name" size="small" v-model="newName" />
    <p class="name-block__username">{{ myName }}</p>
    <p class="name-block__cta">
      <button
        @click="changeName"
        class="name-block__button"
        :disabled="btnDisabled"
      >
        {{ btnText }}
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "NameBlock",
  props: {
    btnText: {
      type: String,
      default: "Change",
    },
    btnDisabled: {
      type: Boolean,
    },
    name: {
      typeof: Object,
      default: function () {
        return {
          value: "Orange",
        };
      },
    },
  },
  data() {
    console.log("this.name", this.name);
    return {
      myName: this.name.value,
      newName: "Grape",
    };
  },
  methods: {
    changeName() {
      this.myName = this.newName;
      this.$emit("btn-click", this.newName);
    },
  },
  watch: {
    name(name) {
      this.myName = name.value;
    },
  },
  mounted() {},
  created() {},
};
</script>

<style scoped>
@import "~element-ui/lib/theme-chalk/input.css";

.name-block {
  max-width: 200px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #999;
  border-radius: 10px;
  font-family: Arial, sans-serif;
  font-size: 32px;
  background: linear-gradient(to bottom, #eee 0%, #999 80%);
}

.name-block__title,
.name-block__username,
.name-block__cta {
  margin: 5px 0;
  text-align: center;
}

.name-block__username {
  margin: 20px 0;
  font-size: 45px;
}

.name-block__button {
  padding: 10px 20px;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  background-color: deepskyblue;
}
</style>
