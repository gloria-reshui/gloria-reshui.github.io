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
        title:'reading&gaming',
        description:'由卡牌游戏和阅读游戏组成的女性向读书会设计',
        techStack:['girl', '知识管理'],
        progress: 30,
        detailUrl: 'https://separated-mall-901.notion.site/Reading-Gaming-1a7184f627a980f5b64af53e83328ce5?pvs=74'
    },
    
    {
        title:'chat_within_MCP',
        description:'由MCP协议设计的用于和AI聊天的工具',
        techStack:[ '知识管理'],
        progress: 0,
        detailUrl: 'https://separated-mall-901.notion.site/chat_within_MCP-1a7184f627a98065bfc6e44985447d98?pvs=73'
        
    }
    // 在这里添加更多项目
];