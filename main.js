const quiz = [
  {
    question: 'スティッチの色は？',
    answers: ['グレー', '虹', 'ピンク', '青'],

    correct: '青',
  }, {
    question: 'スーパーサイヤ人の髪の毛の色は？',
    answers: ['銀髪', '白髪', '金髪', '虹髪'],

    correct: '金髪',
  }, {
    question: 'ドラゴンボールのバーダックの息子は誰？',
    answers: ['孫悟空', 'ブルマ', 'ナオミ', 'チチ'],

    correct: '孫悟空',
  }, {
    question: '名探偵コナンの主人公の蝶ネクタイの色は',
    answers: ['黒色', '赤色', '紫色', '緑色'],

    correct: '赤色',
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
 }
}

setupQuiz();



const clickHand = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解');
    score++;
  } else {
   window.alert('不正解');
  }



  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    alert('The end! あなたの点数は' + score + '/' + quizLength + 'です。')
  }

}


//正誤判定
let handIndex = 0;
while (handIndex < buttonLength) {
  $button[handIndex].addEventListener('click', (e) => {
  clickHand(e);
  });
  handIndex++;
}


