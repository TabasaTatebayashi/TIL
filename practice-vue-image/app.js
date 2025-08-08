const {createApp, ref } = Vue;

createApp({
    setup(){
        const message = ref("Vueで画像を表示してみよう!");
        const imagePath = ref("images/bg_1.webp");

        const switchImage = () => {
            imagePath.value =
                imagePath.value === "images/bg_1.webp"
                    ? "images/btn_1.png"
                    : "images/bg_1.webp";
        };

        return {
            message,
            imagePath,
            switchImage,
        };
    },
}).mount("#app");