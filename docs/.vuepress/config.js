const path=require('path')
module.exports = {
    title: "Space",
    description: "This is my blog.",
    plugins:['go-top'],
    base: '/Blog/',
    'locales': {
        '/': {
            lang: 'zh-CN',
            title: 'Hello World',
            description: '这是我的个人博客'
        }
    },
    host: 'localhost', // ip
    port: '8101', //端口号 默认为8080
    themeConfig: {
        logo:'/images/photo.png',
// 导航栏配置
        nav: [
            {text: '主页', link: '/'},
            {text: 'About', link: '/guide/'},
            {
                text: '项目经历',
                items: [
                    { text: 'project01', link: '/guide/project/project01' },
                    { text: 'project02', link: '/guide/project/project02' }
                ]
            },
            {text: 'Github', link: 'https://github.com/jacksontao'},
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'English', link: '/language/japanese' }
                ]
            }
        ],sidebar:[
            {
                title:"安装教程",
                collapse:false,
                children:[
                    {title:'Git安装',path:'/guide/install/Git安装'},
                    {title:'Vuepress安装',path:'/guide/install/Vuepress安装'},

                ]
            },
            {
                title:"项目经历",
                collapse:false,
                children:[
                    {title:'project01',path:'/guide/project/project01'},
                    {title:'Vuepress安装',path:'/guide/install/Vuepress安装'},

                ]
            }
        ]


    },

}