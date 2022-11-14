export {}

let i = 0;

class Image {
    constructor(url: string, caption: string) {
        this.url = url;
        this.caption = caption;
    }
}

let list: string[] = [
    new Image('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.'),
    new Image('https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg', 'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.'),
    new Image('https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg', 'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'),
    new Image('https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.'),
    new Image('https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg', 'quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.'),
    new Image('https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg', 'aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam.'),
    new Image('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg', 'est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et.'),
    new Image('https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg', 'dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.'),
    new Image('https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_960_720.jpg', 'laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.'),
    new Image('https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_960_720.jpg', 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.'),
];

function next() {
    if (i > 8) {
        i = 0;
    } else {
        i++;
    }
    
    changeImage();
}

function previous() {
    if (i < 1) {
        i = 9;
    } else {
        i--;
    }
    
    changeImage();
}

function changeImage() {
    document.getElementById('slide-show').innerHTML = '<img src="' + list[i].url + '"><p>' + list[i].caption + '</p>';
}

changeImage();