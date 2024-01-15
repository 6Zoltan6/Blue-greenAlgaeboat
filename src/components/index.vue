<template>
    <div class="box1">
        <div class="box2">
            <div class="left">
                <button class="left-buttom">已有账号，直接登录</button>
            </div>
            <div class="right">
                <h2 style="margin:10%">注册账号</h2>
                <div style="height: 50%;width: 100%;margin: 0; display: flex;flex-direction: column;align-items: center;">
                    <form id="login">
                        <input type="text" name="User" placeholder="User">
                        <input type=" text" name="Password" placeholder="Password">
                    </form>
                </div>
                <button form="login" style="bottom:10%;">点击注册</button>
            </div>
        </div>
        <img id="backgroud" src="../../public/R-C.jpg">
    </div>
</template>
<script setup>

</script>
<style>
.box1 {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}

.box2 {
    margin: 0;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    height: 50%;
    width: 40%;
    background-color: rgba(250, 235, 215, 0.3);
    border-radius: 10px;
    /* 设置角的弧度 */
    box-shadow: -1px 8px 6px rgba(0, 0, 0, 0.3);
    /* 添加阴影效果 */
}

button:active {
    transform: scale(0.9);
    /* 点击时缩小按钮 */
}

button {
    background: linear-gradient(to right, #ff8800, #ff2072);
    /* 使用线性渐变 */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 20%;
    cursor: pointer;
    border-radius: 20px;
}

input {
    margin: 7%;
    width: 80%;
    height: 25%;
    border-radius: 3px;
    border: none;
}

input:focus {
    outline: none;
}

.left {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
}



.right {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgb(185, 215, 234);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 50%;
    height: 100%;
}

#backgroud {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
}
</style>