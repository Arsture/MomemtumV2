const quotes = [
    {
        quote : "포기하면 그 순간이 바로 시합 종료예요",
        author : "슬램덩크",
    },
    {
        quote : "사람이 언제 죽는다고 생각하나? 바로, 사람들에게서... 잊혀졌을 때다",
        author : "원피스",
    },
    {
        quote : '"미래에서 기다릴게."  "응, 금방 갈게. 뛰어갈게."',
        author : "시간을 달리는 소녀",
    },
    {
        quote : "내가 좋아하는 사람이, 나를 좋아해 주는 건 기적이야",
        author : "어린왕자",
    },
    {
        quote : "기억해, 너는 세상을 햇빛으로 가득 채울 수 있는 존재라는 걸",
        author : "백설공주",
    },
    {
        quote : "좋아하는 사람이 생기면 모든 게 컬러풀하게 보인대",
        author : "4월은 너의 거짓말",
    },
    {
        quote : "꿈은 도망가지 않아 도망가는 것은 언제나 나 자신이야",
        author : "짱구는 못말려 9기 극장판 어른제국의 역습",
    },
    {
        quote : "시간은 그 누구도 기다려주지 않아",
        author : "시간을 달리는 소녀",
    },
    {
        quote : "이 세상에서 만난 모든 인연이 사람을 성장시키는 교사가 된다",
        author : "암살교실",
    },
    {
        quote : "지식은 우정을 대신할 수 없어. 너를 잃을 바엔 차라리 바보가 될래",
        author : "스폰지밥",
    },
    {
        quote : "아름답게 최후를 장식할 여유가 있으면 끝까지 아름답게 살아야 하지 않겠냐",
        author : "은혼",
    },
    {
        quote : "너는 너야. 너답다느니 그런 애매한 게 아니라 뭘하든,변하든, 상관없어. 넌 어차피 너니까",
        author : "4월은 너의 거짓말",
    },
    {
        quote : "고등학생쯤 되면 뭐든 할 수 있을 줄 알았는데, 오히려 그때의 우리가 뭐든 할 수 있었던 것 같아",
        author : "그날 본 꽃의 이름을 우리는 아직 모른다",
    },
    {
        quote : "사랑과 정열을 그대에게",
        author : "정열맨",
    },
    {
        quote : "말은 상처를 준다고! 후회를 해도 주워담을 수가 없어",
        author : "마음이 외치고 싶어해",
    },
    {
        quote : "인생은 살아만 있다면 몇번이든 새출발할 수 있으니까",
        author : "GTO",
    },
    {
        quote : "여자의 거짓말을 용서할 줄 아는게 남자다",
        author : "원피스",
    },
    {
        quote : "자신을 믿지않는 녀석따위는... 노력할 가치도 없다!",
        author : "나루토",
    },
    {
        quote : "걸려 넘어진 걸 돌부리의 탓으로 돌리면 뭐가 바뀌냐?",
        author : "은혼",
    },
    {
        quote : "아무것도 갖고 태어나지 않았기에 무엇이든 될 수 있다",
        author : "노게임 노라이프",
    },
    {
        quote : "씁쓸한 인생, 커피정돈 달아도 괜찮겠지",
        author : "역시 내청춘 러브코메디는 잘못됐다",
    },
    {
        quote : "우리들은 혼자가 아니야",
        author : "페어리테일",
    },
    {
        quote : "선생에게 학생은 400명일지 몰라도, 학생에게 선생은 한명이다",
        author : "GTO",
    },
    {
        quote : "맑은물에서 살든, 시궁창에서 살든, 앞으로 헤엄치는 물고기는 아름답게 자라는 법입니다",
        author : "암살교실",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = ` - ${todayQuote.author}`;