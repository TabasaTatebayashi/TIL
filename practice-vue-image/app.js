import imageBox from "./components/image-box.js";
const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const imagePath = ref("images/bg_1.webp");

        const switchImage = () => {
            imagePath.value = imagePath.value === "images/bg_1.webp"
                ? "images/btn_1.png"
                : "images/bg_1.webp";
        };

        return {
            imagePath,
            switchImage,
        };
    }
});


//コンポーネント登録
app.component("image-box", imageBox);

//Vueアプリをマウント
prompt.mount("#app");