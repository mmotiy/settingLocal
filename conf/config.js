;+function (window, undefined) {
    const config = [{
        name: '演员',
        class: 'weui-cells__title'
    }, {
        class: 'weui-cells',
        children: [
            {
                draggable: true,
                name: '人物',
                code:"man",
                input_component: false,
                out_component: true,
                config: [
                    {}
                ],
                documentation: {
                    title: '人物',
                    content: [
                        {name: '无', content: '无'}
                    ]
                }
            }
        ]
    }, {
        name: '场景',
        class: 'weui-cells__title'
    }, {
        class: 'weui-cells',
        children: [
            {
                draggable: true,
                name: '聊天场景',
                code:'chat',
                input_component: false,
                out_component: true,
                config: [
                    {}
                ],
                documentation: {
                    title: '聊天场景',
                    content: [
                        {name: '无', content: '无'}
                    ]
                }
            }, {
                draggable: true,
                name: '幕布场景',
                code:'stage',
                input_component: false,
                out_component: true,
                config: [
                    {}
                ],
                documentation: {
                    title: '幕布场景',
                    content: [
                        {name: '详情', content: '幕布场景说明手册'}
                    ]
                }
            }
        ]
    }, {
        name: '控制',
        class: 'weui-cells__title'

    }, {
        class: 'weui-cells',
        children: [{
            draggable: true,
            name: 'switch',
            code:"switch",
            input_component: true,
            out_component: true,
            config: [
                {}
            ],
            documentation: {
                title: 'switch',
                content: [
                    {name: 'switch', content: '使用手册'}
                ]
            }
        }, {
            draggable: true,
            name: 'delay',
            code:"delay",
            input_component: true,
            out_component: true,
            config: [
                {}
            ],
            documentation: {
                title: 'delay',
                content: [
                    {name: 'delay', content: '使用手册'}
                ]
            }
        }, {
            draggable: true,
            name: 'function',
            code:'function',
            input_component: true,
            out_component: true,
            config: [
                {}
            ],
            documentation: {
                title: 'function',
                content: [
                    {name: 'function', content: '使用手册'}
                ]
            }
        }, {
            draggable: true,
            name: 'select',
            code:'select',
            input_component: true,
            out_component: true,
            config: [
                {}
            ],
            documentation: {
                title: 'function',
                content: [
                    {name: 'function', content: '使用手册'}
                ]
            }
        }, {
            draggable: true,
            name: 'input',
            code:'input',
            input_component: true,
            out_component: true,
            config: [
                {}
            ],
            documentation: {
                title: 'function',
                content: [
                    {name: 'function', content: '使用手册'}
                ]
            }
        }]
    }]
    window.localStorage.setItem("toolview", JSON.stringify(config))
}(window, undefined);