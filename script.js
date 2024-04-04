// 音声ファイルのパスの配列を定義します
const soundFiles = [
  'sounds/タイピング-メカニカル単1.mp3',
  'sounds/タイピング-メカニカル単2.mp3',
  'sounds/タイピング-メカニカル単3.mp3'
];

let currentSoundIndex = 0;
let isKeyDown = false; // キーが押されているかどうかを示すフラグ
let audio = null; // Audioオブジェクトを格納する変数を定義します

// キーボードのキーが押されたときのイベントリスナーを設定します
document.addEventListener('keydown', function(event) {

  if (event.key !==  'Backspace'){
  // キーが押されている場合、何もしません
  if (isKeyDown) return;

  // キーが押されたフラグを立てます
  isKeyDown = true;

  // キーを押したときに既に再生中の音があれば停止します
  if (audio) {
    audio.pause();
    audio.currentTime = 0; // 再生位置をリセットします
  }

  // 新しいAudioオブジェクトを作成して音を再生します
  audio = new Audio(soundFiles[currentSoundIndex]);
  audio.play();

  // インデックスを更新して次の音声ファイルを選択します
  currentSoundIndex = (currentSoundIndex + 1) % soundFiles.length;

}
});

// キーボードのキーが離されたときのイベントリスナーを設定します
document.addEventListener('keyup', function(event) {
  // キーが離されたのでフラグを下げます
  isKeyDown = false;

  // キーを離したときに再生中の音があれば停止します
  if (audio) {
    audio.pause();
    audio.currentTime = 0; // 再生位置をリセットします
    audio = null; // Audioオブジェクトをクリアします
  }
});


  document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
      event.preventDefault();
      //キーが上がるまで待つ
    }
  });
