interface Project {
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    demoUrl?: string;
    progress?: number;
    detailUrl?: string;
}

export const projects: Project[] = [
    {
        title: 'screenshot_batch_OCR',
        description: '一款基于本地TesseractOCR的截图批量转Markdown文本的工具',
        techStack: ['知识管理', 'Obsidian', 'python'],
        githubUrl: 'https://github.com/gloria-reshui/screenshot_batch_OCR',
        progress: 100,
        detailUrl: 'https://separated-mall-901.notion.site/screenshot_batch_OCR-1a7184f627a980ecb03bdab2317ee78a'
    },

    {
        title:'yuejingyueli_Application',
        description:'一款基于月经周期展开的月历设计',
        techStack:['girl', 'health'],
        progress: 20,
        detailUrl: 'https://separated-mall-901.notion.site/182184f627a980d49086e98152af3537?pvs=74'
    },
    
    {
        title:'Reading&Gaming',
        description:'正在预备卡牌设计和女性专题+碎片化阅读的新一期【意识重构】读书会',
        techStack:['girl', '知识管理'],
        progress: 80,
        detailUrl: 'https://separated-mall-901.notion.site/Reading-Gaming-1a7184f627a980f5b64af53e83328ce5?pvs=4'
    },
    
    {
        title:'chat_within_MCP',
        description:'由MCP协议设计的用于和AI聊天的工具',
        techStack:[ '知识管理'],
        progress: 0,
        detailUrl: 'https://separated-mall-901.notion.site/chat_within_MCP-1a7184f627a98065bfc6e44985447d98?pvs=73'
        
    },

    {
        title:'PhilSci Research',
        description:'科哲学术研究',
        techStack:['philosophy', 'science'],
        progress: 10,
        detailUrl: 'https://separated-mall-901.notion.site/PhilSci-research-1aa184f627a98010bd92f18ad760b8cf?pvs=4'
    },

    {
        title:'sth. about death',
        description:'关于死亡的一些思考',
        techStack:['philosophy','death'],
        progress: 10,
        detailUrl:'https://separated-mall-901.notion.site/Death-believer-fe2d3fa9ce2b47599adc370e36bfbb08?pvs=4'
    },

    {
        title:'Lovely Journal for yourself',
        description:'客制化高端手账（摆摊项目）: writing for yourself',
        techStack:['data visualization','letters for yourself'],
        progress: 50,
        detailUrl:['https://separated-mall-901.notion.site/Lovely-Journal-for-yourself-1aa184f627a980688154d6bdaf4dadc0?pvs=4']
    }

    // 在这里添加更多项目
];