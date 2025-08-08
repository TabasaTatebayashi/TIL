// コンポーネント定義ファイル
export default {
  props: {
    imgPath: String
  },
  template: `
    <div>
      <img :src="imgPath" alt="コンポーネント画像" style="max-width: 300px;">
    </div>
  `
};
