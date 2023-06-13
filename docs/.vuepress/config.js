
module.exports = {
    //     head: [
    //         ['style', {}, `
    //   / {
    //     background-image: url('/images/spiderman.png');
    //     background-size: cover;
    //     background-position: center center;
    //     background-repeat: no-repeat;
    //   }
    // `]
    //     ],

    title: "Space",
    description: "This is my blog.",
    plugins:[
        ['go-top'],
        ['@vssue/vuepress-plugin-vssue',{
            platform: 'github-v4', //v3的platform是github，v4的是github-v4
            locale: 'zh', //语言
            owner: 'jacksontao', //github账户名
            repo: 'Blog', //github一个项目的名称
            clientId: '1038fcb0a2531328545a',//注册的Client ID
            clientSecret: '984a24ff72985e37a1bd63e0b7541ceac4b7f75f',//注册的Client Secret
            autoCreateIssue:true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。

        }],
        // 主页背景

        ],
    base: '/Blog/',
    'locales': {
        '/': {
            lang: 'zh-CN',
            title: 'Hello World',
            description: '这是我的个人博客'
        }
    },
    // 代码快样式
    prismjs: {
        style: 'solarizedlight'
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
            // {
            //     text: 'Languages',
            //     items: [
            //         { text: 'Chinese', link: '/language/chinese' },
            //         { text: 'English', link: '/language/japanese' }
            //     ]
            // }
        ],
        // 侧边栏配置
        sidebar:[
            {
                title:"安装教程",
                collapse:false,
                children:[
                    // {title:'Git安装',path:'/guide/install/Git安装'},
                    // {title:'Vuepress安装',path:'/guide/install/Vuepress安装'},

                ]
            },
            {
                title:"项目经历",
                collapse:false,
                children:[
                    {title:'Project01',path:'/guide/project/project01'},
                    {title:'Project02',path:'/guide/project/project02'},

                ]
            },{
                title:"小工具",
                collapse:false,
                children:[
                    {title:'Word转PDF',path:'/guide/tool/word-to-pdf'},

                ]
            }
        ]


    },

}