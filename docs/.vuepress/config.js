module.exports = {
    title: "Space",
    description: "This is my blog.",
    base: '/Blog/',
    'locales': {
        '/': {
            lang: 'zh-CN',
            title: 'Hello,我是Jackson',
            description: '这是我的个人博客'
        }
    },
    host: 'localhost', // ip
    port: '8101', //端口号 默认为8080
    themeConfig: {
        logo:'/images/photo.png',
// 导航栏配置
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about/'},
            {text: 'Github', link: 'https://github.com/jacksontao'}
        ]


    }
}