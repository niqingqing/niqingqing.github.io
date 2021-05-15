let arrayDesign = [{
    url: 'https://www.58pic.com/',
    img: 'qiantu.jpg',
    title: '千图网',
    content: '矢量图素材、背景图片素材、矢量图库、psd素材、字体模板、设计素材、PPT模板、...'
}, {
    url: 'http://www.51yuansu.com/',
    img: 'mi.jpg',
    title: '觅元素',
    content: '装饰素材 节日素材 艺术字体 图标 图片网 简笔画 中国风 熊猫办公 斗破苍穹漫画 ...'
}];
let html = '';
for (let i = 0; i < arrayDesign.length; i++) {
    html += '  <div class="col-md-3">\n' +
        '                        <a href= "'+arrayDesign[i].url+'"'+'target="_blank">\n' +
        '                            <div class="card card1">\n' +
        '                                <div class="card-header">\n' +
        '                                    <div class="card-title">\n' +
        '                                        <div class="icon"><img src="assets/img/'+arrayDesign[i].img+'"></div>\n' +
        '                                        <p class="icon-text">'+arrayDesign[i].title+'</p>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <div class="card-body card-body-con">\n' +
        '                                    <ol class="activity-feed">\n' +
        '                                        <li class="feed-item feed-item-info">\n' +
        '                                            <time class="date" datetime="9-25">\n' +arrayDesign[i].content+
        '                                            </time>\n' +
        '                                        </li>\n' +
        '                                    </ol>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </a>\n' +
        '                    </div>'
    $('#material').html(html);
}