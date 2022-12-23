<template>
  <div class="hello">
    <p>메세지 : {{ message }}</p>
    <input type="text" v-model="message" placeholder="메세지 입력하기">

    <br>
    <br>
    <span>여러 줄 메세지 : </span>
    <p style="white-space: pre-line;">{{ message2 }}</p>
    <textarea v-model="message2" placeholder="여러 줄을 입력해 보아요."></textarea>
  </div>

  <!-- CHECKBOX -->
  <div>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
  </div>
  <div>
    <div>체크된 이름 : {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="잭" v-model="checkedNames">
    <label for="jack">잭</label>

    <input type="checkbox" id="john" value="존" v-model="checkedNames">
    <label for="john">존</label>

    <input type="checkbox" id="mike" value="마이크" v-model="checkedNames">
    <label for="mike">마이크</label>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      message: '',
      message2: '',
      checked: false,
      checkedNames: []
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
