const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


// vue.config.js
// cli 3부터는 이 파일을 만들어준다.
module.exports = {
  css: {
    loaderOptions: {
      scss: {
	    	// 이 옵션에 변수를 모아둔 파일을 연결한다.
        data: `
          @import "@/assets/scss/main.scss";
        `,
      },
    },
  },
};