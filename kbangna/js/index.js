//banner js
// 获取元素
let img_box = document.querySelector('.img_box');
let imgs = document.querySelectorAll('img');
let sel_box = document.querySelector('.sel_box');
let lis = sel_box.querySelectorAll('li');
let left_btn = document.querySelector('.left_btn')
let right_btn = document.querySelector('.right_btn');
// 记录第几张图片
let index = 0;
let timer = null; //定时器

// 设置图片容器的大小
// imgContainerW :img_box 本身宽度为 750px
let imgContainerW = 750;
img_box.style.width = imgContainerW * imgs.length + 'px';
// 设置容器位置
img_box.style.left = 0 + 'px';

// 设置第一个小图片作为当前按钮
lis[0].className = 'cur';

// 轮播图切换
function swapImg() {
    // 修改img_box的定位 ，往左便宜 index*imgContainerW
    img_box.style.left = -index * imgContainerW + 'px';

    // 排他算法
    for (let i = 0; i < lis.length; i++) {
        lis[i].className = '';
    }
    // 修改小图标的样式
    lis[index].className = 'cur';
}
// 轮播图切换规律
function swapFormat() {
    index++; // 进入下一张照片
    // 在最后一张照片
    if (index >= 4) {
        // 当index >=4,强行等于4 ，类似防抖
        index = 4;
        img_box.style.transition = 'all, linear,1s';
        img_box.style.left = -index * imgContainerW + 'px';
        for (let i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        // 修改小图标的样式
        lis[0].className = 'cur';

        // 此处实现无缝轮播
        // 通过延时定时器，当图片过渡完，立刻切换到第一张照片
        setTimeout(function () {
            index = 0; //第一张照片
            img_box.style.transition = '';//无过渡
            swapImg();
        }, 1500);
    }else{
        // 如果是其他图片正常过渡
        img_box.style.transition = 'all, linear, 1.5s';
        swapImg();
    }
}
// 添加间隔定时器，调用函数
timer = setInterval(swapFormat, 3000);

// 点击右箭头,图片的移动方式与自动播放一样
right_btn.addEventListener('click',function(){
    swapFormat();
});
// 左箭头
left_btn.addEventListener('click',function(){
    index--;
    // 如果要切换到第四张
    if(index<0){
        index = -1
        img_box.style.transition = 'all, linear,1.5s';
        img_box.style.left = -index * imgContainerW + 'px';
        for(let i=0;i < lis.length;i++){
            lis[i].className = '';
        }
        // 修改小图标的样式
        lis[3].className = 'cur';

        // 迅速切换
        setTimeout(function(){
            index = 3;
            img_box.style.transition = '';
            swapImg();
        },1000);
    }else{
        img_box.style.transition = 'all, linear, 1.5s';
        swapImg();
    }
});

// 当鼠标在图片上，左箭头，右箭头时清楚定时器，即图片不轮播
img_box.addEventListener('mouseover',function(){
    clearInterval(timer);
});
right_btn.addEventListener('mouseover',function(){
    clearInterval(timer);
});
left_btn.addEventListener('mouseover',function(){
    clearInterval(timer);
});
// 当鼠标离开图片，左箭头，右箭头时开启定时器，即图片继续轮播
img_box.addEventListener('mouseout',function(){
    timer = setInterval(swapFormat, 3000);
});
left_btn.addEventListener('mouseout',function(){
    timer = setInterval(swapFormat, 3000);
});
right_btn.addEventListener('mouseout',function(){
    timer = setInterval(swapFormat, 3000);
});
