let arrayDesign = [{
    url: 'https://huaban.com/home/',
    img: 'flower.png',
    title: '花瓣网',
    content: '花瓣网, 设计师寻找灵感的天堂!图片素材领导者,帮你采集、发现网络上你喜欢的事物。'
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
    $('#works').html(html);
}