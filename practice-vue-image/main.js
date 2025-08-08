const ImageList = {
  template: `
    <div>
      <h2>画像一覧</h2>
      <div class="gallery">
        <div v-for="(img, index) in images" :key="index" class="image-box">
          <img :src="img" :alt="'画像' + (index + 1)" />
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      images: [
        'bg_1.webp',
        'btn_1.png',
      ]
    }
  }
}

// Vueアプリを作ってコンポーネントを登録
const app = Vue.createApp({})
app.component('image-list', ImageList)
app.mount('#app')
