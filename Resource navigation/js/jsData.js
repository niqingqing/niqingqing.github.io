let arrayDesign = [{
    url: 'https://www.iconfont.cn/',
    img: 'alibaba.ico',
    title: '阿里巴巴矢量图标库',
    content: ' 提供矢量图标下载、在线存储、格式转换等功能，图标格式：SVG，AI，PNG。'
}, {
    url: 'https://www.easyicon.net/',
    img: 'easyicon.ico',
    title: 'Easyicon',
    content: '可上传PNG图标转换为Micrisoft或MacOs图标，图标格式：SVG，PNG，ICNS，ICO。'
}, {
    url: 'https://www.iconsdb.com/',
    img: 'icons.png',
    title: '扁平化APP图标库-iconsDB',
    content: '可自定义尺寸和颜色，大部分支持商用，图标格式：PSD，AI，EPS，PNG，ICO。'
},{
    url: 'https://www.flaticon.com/',
    img: 'Flaticon.ico',
    title: '最大的免费图标库-Flaticon',
    content:'图标格式：PNG，SVG，EPS，PSD及BASE 64五种格式。'
},{
    url:'http://www.icontuku.com/',
    img:'iconpng.ico',
    title:'爱看图标网-IconPng',
    content:' 手绘、应用、立体、扁平等,图标格式：ICO，GIF，JPG，PNG，ICNS。'
},{
    url:'https://www.icondeposit.com/',
    img:'IconDeposit.gif',
    title:'图标设计综合网站-IconDeposit',
    content:'图标格式：SVG，PSD，PNG。'
},{
    url:'https://icons8.cn/',
    img:'icons8.png',
    title:'社区爱-icons8',
    content:'图标格式：PNG，SVG，PDF，EPS等。'
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
    $('#design').html(html);
}