// 開講日程の公開時刻（この時刻を過ぎると自動で日程が表示されます）
const SCHEDULE_REVEAL_TS = new Date('2026-06-04T12:00:00+09:00').getTime();

// 募集開始時刻（この時刻を過ぎると「申し込みはこちら」CTAのリンクが本募集用に切り替わります）
const CTA_SWITCH_TS = new Date('2026-06-21T21:00:00+09:00').getTime();
// 申し込みCTAのリンク：21:00前は先行案内(9ZkFVH)、21:00以降は本募集(xQQvXk)
const ctaApplyHref = (Date.now() >= CTA_SWITCH_TS)
  ? 'https://s.lmes.jp/landing-qr/1657280453-eKjLAxd7?uLand=xQQvXk'
  : 'https://s.lmes.jp/landing-qr/1657280453-eKjLAxd7?uLand=9ZkFVH';

const scheduleRevealedHtml = /*html*/ `
  <p style="text-align:center; color:#B97B86; font-size:13px; margin:4px 0 14px;">各クラス 月3回／全6回・どちらかをお選びいただけます</p>

  <div class="schedule-columns">
    <div class="schedule-column">
      <h5>平日クラス　21:00〜22:30</h5>
      <ul class="schedule-dates">
        <li>① 7月9日（木）</li>
        <li>② 7月16日（木）</li>
        <li>③ 7月27日（月）</li>
        <li>④ 8月5日（水）</li>
        <li>⑤ 8月17日（月）</li>
        <li>⑥ 8月26日（水）</li>
      </ul>
    </div>
    <div class="schedule-column">
      <h5>土日クラス　10:00〜11:30</h5>
      <ul class="schedule-dates">
        <li>① 7月5日（日）</li>
        <li>② 7月18日（土）</li>
        <li>③ 7月26日（日）</li>
        <li>④ 8月2日（日）</li>
        <li>⑤ 8月9日（日）</li>
        <li>⑥ 8月22日（土）</li>
      </ul>
    </div>
  </div>`;

const schedulePlaceholderHtml = /*html*/ `
  <p style="text-align:center; color:#6C5456; font-size:14px; line-height:1.9; margin:16px 0 8px;">
    開講日程は <strong style="color:#B97B86;">6/4（木）12:00</strong> に公開いたします。<br>もうしばらくお待ちください♡
  </p>`;

const scheduleHtml = (Date.now() >= SCHEDULE_REVEAL_TS) ? scheduleRevealedHtml : schedulePlaceholderHtml;

document.querySelector("#app").innerHTML = /*html*/ `
  <section class="hero">
    <div class="hero-content">
      <div class="hero-brand">
        <h1 class="hero-title">愛されヴィーナス塾</h1>
      </div>
       <div class="hero-visual">
      <img src="img/リゾート.jpg" alt="愛されヴィーナス塾">
    </div>
      <h2 class="hero-catchphrase">お顔を変えて<br>自分らしく働く自分に。</h2>
      <p class="hero-sub">
  一生若返るセルフ整形でキレイになった私が、 人生の主役になる。
</p>

</div>

<div class="recruit-banner" style="margin:30px auto 18px; max-width:520px; background:linear-gradient(180deg,#ffffff 0%,#FCF6F2 100%); border:1px solid rgba(199,154,90,.32); border-radius:20px; padding:26px 24px 24px; box-shadow:0 14px 34px rgba(185,123,134,.16); text-align:center;">
  <div style="display:inline-block; padding:5px 20px; background:linear-gradient(135deg,#c79a5a 0%,#dcb878 100%); color:#fff; font-size:11px; letter-spacing:.24em; border-radius:999px; box-shadow:0 4px 12px rgba(199,154,90,.32);">ADMISSION</div>
  <div style="font-size:13px; letter-spacing:.16em; color:#B97B86; margin:14px 0 6px;">次回募集スタート</div>
  <div style="font-size:30px; font-weight:700; line-height:1.3; font-family:'Noto Serif JP',serif; color:#6C5456;">6月21日<span style="font-size:18px;">（日）</span> <span style="color:#B97B86;">21:00</span><span style="font-size:18px; color:#6C5456;">〜</span></div>
</div>

<a href="#curriculum"
   target="_blank"
   class="cta-button">
  詳細はこちら ▶︎
</a>

    </div>
  </section>

  <section class="section what-is">
    <div class="container">
      <h2 class="section-title">ヴィーナス美顔ヨガとは？</h2>

<div class="what-is-content">
 <div class="before-after-images">
          <img src="./img/biforeAfter.jpg" alt="顔ヨガのビフォーアフター" class="before-after-image">
        </div>


  <p class="what-is-definition">
    「この写真、ほんとに自分の顔？」
  </p>

  <div class="what-is-description">

    <p>
      増えてしまったたるみやシワを見た瞬間、
      ちょっと切なくなったことはありませんか？
    </p>

    <p class="emphasis-text">
      年齢のせいだと諦めかけたその変化。<br>
      実はその原因は、“筋肉の使い方”かもしれません。
    </p>

    <hr class="section-divider">

    <p>
      お顔には約<span class="highlight-number">30種類以上</span>の表情筋があります。
    </p>

    <p class="emphasis-text">
      でも――<br>
      ✔ いつも同じ表情ばかり<br>
      ✔ 無意識に力が入っている<br>
      ✔ 下を向く時間が長い
    </p>

    <p>
      そんな毎日の積み重ねで、<br>
      使わない筋肉は衰え、<br>
      同じ筋肉ばかり使うことで
      <span class="highlight-text">「表情ぐせ」や、たるみ・シワの原因</span>
      をつくってしまうのです。
    </p>

    <hr class="section-divider">

    <p class="solution-text">
      ヴィーナス美顔ヨガは、
    </p>

    <p>
      上半身のストレッチで巡りを整え、<br>
      表情筋をやさしくほぐし、鍛え、
    </p>

    <p class="highlight-text">
      本来あなたが持っている美しさを引き出すセルフ整形メソッド。
    </p>

    <p>
      ただの顔の体操ではありません。
    </p>

    <p class="emphasis-text">
      ✔ たるみにくい土台づくり<br>
      ✔ 自分でメンテナンスできる力<br>
      ✔ 鏡を見るのが楽しくなる毎日
    </p>

    <p>
      目指すのは、
      周りから愛されながら、
      自分のことも愛せる女性。
    </p>

    <p class="highlight-text">
      “一生使い続けられる美容メソッド”です。
    </p>

    <hr class="section-divider">

    <p class="emphasis-text">
      5年後、10年後。<br>
      「何もしてこなかった未来」と<br>
      「今、始めた未来」<br>
      どちらの自分でいたいですか？
    </p>

    <p>
      ヴィーナス美顔ヨガは
      美容医療に頼らなくても、
      自分の手で未来を育てていく方法。
    </p>

    <p class="solution-text">
      お顔が変わると、人生の選択まで変わり始めます。
    </p>

    <p>
      2ヶ月グループレッスンは、その“最初の扉”。<br>
      「愛されながら選ばれる女性」への道は、ここから始まります。
    </p>

  </div>

</div>

      <div class="before-after-content">
        <div class="before-after-header">
          <p class="before-after-title">ほんの少しの習慣でこの変化！</p>
        </div>

           <div class="before-after-detail-images">
          <img src="./img/biforeAfter-detail.jpg" alt="顔ヨガのビフォーアフター" class="before-after-image">
        </div>
        </div>
    </div>
  </section>

  <section class="section story">
    <div class="container">

        <div class="story-problems">
          <p class="story-intro">気付けばもう50代...<br>ふとした瞬間に、こんな思いが胸をよぎることはありませんか？</p>
          <div class="divider-line"></div>
          <div class="problems-list">
            <div class="problem-item">鏡を見るたびに「老け」を感じて、自分にがっかりしてしまう</div>
            <div class="problem-item">「私には何があるんだろう」と、自分の価値を見失いそうな漠然とした不安がある</div>
            <div class="problem-item">「今さら新しいことなんて……」と、心にブレーキをかけてしまう</div>
            <div class="problem-item">誰かのためだけではなく、「私という一人の女性」の人生を輝かせたい</div>
          </div>
        </div>

        <div class="story-text-with-image">
          <p class="story-text"> かつては、もっと自分に自信があったはずなのに。</br>いつの間にか自分のことが一番後回しになってしまっていませんでしたか？</p>
</p>
        </div>


        <div class="story-realization">
         <img src="./img/悩み1.png" alt="悩む女性" class="story-worry-image" />
          かつての私も、同じでした。
          <br><br>年齢を重ねるたびに、少しずつ自信が薄れていく感覚。
          <br><br>
          でも――
          <br>
          お顔は、自分の手で変えられると知ったとき、鏡を見る時間が、楽しみに変わりました。
          <br><br><b>「私、まだ若返れる」</b>
          <br>その実感が、人生と仕事を動かし始めたのです。
        </div>

        <div class="story-reflection">
        <p><img src="./img/未来.png" alt="輝く未来" class="story-future-image" /></p>
          <p>何歳になっても女性はいつまでも輝けます。</p>
          <br>
          <p>「もう遅い」なんて、ありません。<br>むしろ、これまでの経験を重ねてきた今だからこそ、手に入れられる美しさがあるのです。</p>
          <br>
          <p><span class="highlight-text">お顔が変わることで、自信が生まれる。
          <br>
           その自信が行動を変え、人生と仕事を動かしていく。</span></p>
          <br>
          <p>この講座では綺麗になるだけじゃなく、その経験を「一生モノのキャリア」に繋げるための徹底的なサポート体制をご用意しております。<br>自分が綺麗になり、その喜びを分かち合うことで誰かを笑顔にできる。<br>そんな人生を、一緒に歩みませんか？</p>
          <br>
          <p><span class="highlight-text">今よりもっと美しく、自信のある自分に出会いましょう。</span></p>
        </div>
      </div>
    </div>
  </section>

  <section id="points" class="section points fade-in">
  <div class="container">
    <h2 class="section-title">
      ヴィーナス美顔ヨガが<br class="sp-only">選ばれる<span class="points-number-accent">4</span>つのポイント
    </h2>

    <div class="points-grid">
      <article class="point-card">
        <div class="point-header">
          <div class="point-badge">1</div>
          <h3 class="point-title">お金をかけずに綺麗になれる</h3>
        </div>

        <div class="point-image">
          <img src="img/skincare.png" alt="お金をかけずに綺麗になれる">
        </div>

        <p class="point-text">
          一度覚えたら、一生自分でメンテナンスでき、
          5年先も10年先もずっと美顔をキープし続けることができるメソッドです。
        </p>

        <p class="point-emphasis">
          自分の手だけでできるから、機械も電源も資金も不要！
        </p>

        <p class="point-text">
          場所を選ばず、どこでも実践することができます。
        </p>
      </article>

      <article class="point-card">
        <div class="point-header">
          <div class="point-badge">2</div>
          <h3 class="point-title">あなたの悩みに合わせた<br>レクチャー</h3>
        </div>

        <div class="point-image">
          <img src="img/zoom.jpg" alt="悩みに合わせたレクチャー">
        </div>

        <p class="point-text">
          他の顔ヨガ講座では、決まったポーズしか学べない所がほとんどです。
          ですが、それだけではあなたの悩み解決まで時間がかかってしまいます。
        </p>

        <p class="point-emphasis">
          ヴィーナス美顔ヨガでは、あなたが気になる部分に特化した応用ポーズもしっかりレクチャーしますので、変化が早いです。
        </p>
      </article>

      <article class="point-card">
        <div class="point-header">
          <div class="point-badge">3</div>
          <h3 class="point-title">リフトアップだけでなく<br>首肩こりが解消</h3>
        </div>

        <div class="point-image">
          <img src="img/shoulder.png" alt="首肩こり解消">
        </div>

        <p class="point-text">
          お顔のたるみの大きな原因である、首肩こりに効果的な上半身のアプローチをしっかり行うことで、
          慢性的な首肩こりや偏頭痛なども改善され、美しい姿勢を保ちやすくなります。
        </p>

        <p class="point-emphasis">
          バストアップや、お腹痩せした方も！
        </p>
      </article>

      <article class="point-card point-card-last">
        <div class="point-header">
          <div class="point-badge">4</div>
          <h3 class="point-title">愛されマインドが身につき<br>自分のことがもっと好きになる</h3>
        </div>

        <div class="point-image">
          <img src="img/selflove.png" alt="愛されマインド">
        </div>

        <p class="point-text">
          どんなに美容に気を使っていても心の状態が整ってないとお顔は変化しきれません。
          心の状態が、表情や肌状態に影響するのはもちろん、険しい感情が表情ぐせとなり、シワやたるみを作り上げてしまいます。
        </p>

        <p class="point-text">
          また下を向いて考える時間が増えると、下に引っ張られた表情筋は顔全体を下に引っ張る力が働いて、どんどんたるみます。
        </p>

        <p class="point-quote">
          「自分なんて」「もう歳だし」と諦め癖がついていませんか？
        </p>

        <p class="point-emphasis">
          『お顔と心はセット』です！
        </p>

        <p class="point-text">
          美顔ヨガでお顔がきれいになると自然と自信もついて笑顔が増え、
          いろんなことに挑戦できるようになったり、自分のことがもっと好きになったり、
          自分の人生をより楽しめるようになります！
        </p>

        <p class="point-text">
          ヴィーナス美顔ヨガで見た目も心も欲張りに綺麗になりましょう！
        </p>
      </article>
    </div>
  </div>
</section>

  <section id="testimonials" class="section testimonials">
    <div class="container">
      <h2 class="section-title">受講生の声</h2>
      <p class="section-subtitle">「私も変われた」そんな声がたくさん届いています</p>

      <div class="testimonials-grid">
        <div class="testimonial-card fade-in">
          <div class="testimonial-image">
            <img src="img/受講生の変化1.jpg" alt="受講生の変化1" />
          </div>
          <div class="testimonial-content">
            <div class="testimonial-highlight">
              めぐ先生のレッスンは毎回楽しく、自分にもできるか不安だった私も楽しく無理なく続けられました！
            </div>
            <p class="testimonial-text">自分にもできることを見つけたいと思いつつ、「ちゃんと続けられるかな？」という不安がありました。でも体験でめぐさんにお会いしたとき、笑顔で丁寧に寄り添ってくださる姿に安心して、「この先生のもとなら楽しく学べそう！」と思えたんです。顔ヨガを通して、無理なく楽しく続けられる自信をもらえました。<br><br>終わったらお顔もリフトアップして、たくさんお話しするのでお顔と気持ちもスッキリします。迷いながらも一歩踏み出したあの時の自分にも本当に感謝です。</p>
          </div>
        </div>

        <div class="testimonial-card fade-in">
          <div class="testimonial-image">
            <img src="img/受講生の変化2.jpg" alt="受講生の変化2" />
          </div>
          <div class="testimonial-content">
            <div class="testimonial-highlight">
              めぐ先生の顔ヨガはなんと言っても「心もお顔も上げる」で人生の見え方が変わりました！
            </div>
            <p class="testimonial-text">年齢を重ねる中で、表情や気持ちの変化に戸惑っていました。「顔ヨガ」と聞いて最初は表情筋の運動かと思っていたのですが、めぐさんの「心もお顔も上げていくレッスン」の考え方に惹かれて、「これはただの技術じゃなく、人生が前向きになる講座だ」と感じたのが決め手でした。<br><br>顔ヨガだけやってもお顔はちゃんと上がります。でも女性としての気持ちの持ち方を学べて、それをこれから私もたくさんの方にお伝えしていくんだと思うと、歳を重ねるのが楽しくなりました！！</p>
          </div>
        </div>

        <div class="testimonial-card fade-in">
          <div class="testimonial-image">
            <img src="img/受講生の変化3.jpg" alt="受講生の変化3" />
          </div>
          <div class="testimonial-content">
            <div class="testimonial-highlight">
              メグさんはベテランのエステティシャンでもあるので、マッサージのやり方やほぐし方もすごく分かりやすかったです。
            </div>
            <p class="testimonial-text">不意に、ショーウィンドウに映った自分 のたるんだ顔を見てショックを受け、 「もう年齢的にもしょうがないのか
な・」と半ば諦めていました。 <br>
そんなとき、なんとなく見ていたインスタで、美顔ヨガの存在を知り、実践してる方のビフォーアフターに驚愕したんで
す！ 
<br>「これなら変われるかも！」
<br> 「女性としてまだまだ輝きたい！」
<br>と思い、勇気を出して挑戦しました。
<br><br>
3ヶ月間、コツコツ教えてもらったこと を続けてみたら、自分でもわかるくらい
顔が激変！ 最近では10歳も若く見られることが増
えてとっても嬉しいです！
本当に諦めなくて良かったです。</p>
          </div>
        </div>

      

        <div class="testimonial-card fade-in">
          <div class="testimonial-image">
            <img src="img/受講生の変化5.jpg" alt="受講生の変化5" />
          </div>
          <div class="testimonial-content">
            <div class="testimonial-highlight">
              顔が変わってみるみるうちに自分のことが大好きになれました！
            </div>
            <p class="testimonial-text">お顔が昔と比べて、何となく大きくなったぁ…
って感じてました。
<br>
前までは似合ってた服が
どんどん似合わなくなり
｢服なんてもう安いのでいいや｣って
オシャレもしなくなったんですよね。
 <br>
そんな時に、自分が顔ヨガ講師になってお仕事ができるんだって事を知り
｢キレイになる事が収入に繋がるんだ！｣と思って
恐る恐る説明会を受けました。
<br>
あの時一歩踏み出してなければ、夫に褒められる事も
無かったし
今は、オシャレもメイクも楽しくて
愛されヴィーナス塾の皆さんと出会えて本当に良かったと思っています♪</p>
          </div>
        </div>
      </div>

      <!-- インタビュー動画ブロック -->
<div class="testimonial-video-wrapper fade-in">

  <div class="testimonial-video-head">
    <h3 class="testimonial-video-title">
      ＼ 受講生インタビューも公開中!! ／
    </h3>
  </div>

  <div class="testimonial-video-box">

  <div class="youtube-thumb" data-video-id="la4GLwvaypE" aria-label="受講生インタビュー動画を再生">
  <img src="./img/受講生インタビュー.png" alt="受講生インタビュー動画 サムネイル">
  <span class="youtube-play" aria-hidden="true">▶</span>
</div>
    
  </div>

</div>

                        <a href="#curriculum"
   target="_blank"
   class="cta-button">
  詳細はこちら ▶︎
</a>


    </div>
  </section>

  <section id="about" class="section instructor">
    <div class="container">
      <h2 class="section-title">講師紹介</h2>
      <div class="instructor-card fade-in">
        <div class="instructor-image">
          <div class="instructor-photo">
            <img src="./img/講師紹介.jpg" alt="講師 めぐ">
          </div>
        </div>
        <div class="instructor-content">
          <div class="instructor-name-box">
            <h3 class="instructor-name">加藤 潤（メグさん）</h3>
            <p class="instructor-subtitle">SalondeFuturオーナー
            <br>透明ほっぺケアメソッド
            <br>ヴィーナス美顔ヨガ創始者
            <br>厚労省認定セラピストスクール講師歴6年</p>
          </div>
</div>
         <div class="instructor-bio">

  <p class="bio-intro">
    こんにちは。<br>
    ヴィーナス美顔ヨガ創始者の加藤 潤です。
  </p>
  <br>

  <p class="bio-career">
    現在はエステサロンでの施術と並行しながら、
    <br>オンラインで整形級の若返りが叶う
   <br> 美顔ヨガ講座を主宰。
  </p>
  <br>

  <p class="bio-results">
    これまでに
    <span class="highlight-keyword">2000名以上</span>のお客様を
    <br>美しく変貌させてきました。
  </p>
  <br>

  <p class="bio-philosophy">
    私自身、体調を崩し、長いマスク生活やストレスで
    お顔のたるみに悩んだ過去があります。
  </p>

  <p>
    <b>「このまま老け続けるのは嫌だ」</b>
    <br>そう思ったことが、美顔ヨガの研究の始まりでした。
  </p>
  <br>

  <p class="bio-expertise">
    表情筋×解剖学×心の関係性に着目し、
    再現性のあるメソッドへと確立。
  </p>
  <br>

  <p>
    美容医療のような一時的な変化ではなく、
    <p class="highlight-text">
      一度身につければ一生使える美容法
</p>
    をお伝えしています。
  </p>
  <br>

  <p class="bio-mission">
    美顔ヨガは、
    自分の顔がもっと好きになるための美容法。
  </p>

  <p class="final-message">
    そして、
    愛されながら選ばれる女性になるための
    <br>最初の一歩です。
  </p>

</div>
        
      </div>
    
  </section>

  <section id="curriculum" class="section curriculum">
  <div class="container">
    <h2 class="section-title">カリキュラム</h2>

    <p class="curriculum-lead-clean">
      3つのステージで<br>基礎から応用まで徹底サポート
    </p>

    <div class="curriculum-path">
      <div class="course-step fade-in">
        <div class="step-badge">STAGE1</div>

        <div class="course-main-card">
          <div class="course-header">
            <div class="course-title-box">
              <h3 class="course-main-title">ヴィーナス美顔ヨガ</h3>
              <p class="course-period">2ヶ月間 / 全6回のグループレッスン 
              <br>
              + 講師による徹底サポート</p>
            </div>
          </div>

          <div class="course-description-box">
            <p>
              この2ヶ月間は"顔を変える"だけの時間ではありません。<br>
              外見の変化が、内側からの自信を呼び起こします♡
            </p>
          </div>

          <div class="lesson-list">

            <div class="lesson-item">
              <span class="lesson-number">STAGE1の目的</span>
              <span class="lesson-title">
                顔ヨガを正しく学び、「私、まだ変われる」という自信を取り戻す。
              </span>
            </div>

            <div class="lesson-item">
              <span class="lesson-number">こんな方におすすめ</span>
              <span class="lesson-title">
              <ul class="curriculum-inline-list">
      <li>写真に写る自分にガッカリしている</li>
      <li>ほうれい線やたるみが気になり始めた</li>
      <li>でも美容医療には頼りたくない</li>
      <li>もう一度、自分に自信を持ちたい</li>
    </ul>              </span>
            </div>

            <div class="lesson-item">
              <span class="lesson-number">ヴィーナス美顔ヨガの特徴</span>
              <span class="lesson-title">
                 <ul class="curriculum-inline-list benefit-list">
      <li>たるみの原因が“構造レベル”で分かる</li>
      <li>変化を写真で実感できる</li>
      <li>上半身から整えるからリフト感が違う</li>
      <li>一生使えるセルフメンテナンスが身につく</li>
    </ul>
              </span>
            </div>

            <div class="lesson-item">
              <span class="lesson-number">カリキュラム内容</span>
              <span class="lesson-title">
<ul class="curriculum-inline-list content-list">
      <li>表情筋の基礎と理論</li>
      <li>フェイスライン・ほうれい線・たるみケア</li>
      <li>日常に落とし込むセルフケア習慣</li>
      <li>グループ実践レッスン</li>
    </ul>              </span>
            </div>

            <div class="lesson-item">
              <span class="lesson-number">形式</span>
              <span class="lesson-title">
                <ul class="curriculum-inline-list content-list">
      <li>少人数グループ制</li>
      <li>オンライン（全国どこでも参加可能）</li>
      <li>実践サポート付き</li>
    </ul>         
              </span>
            </div>

          </div>

           <div class="course-schedule-box">
          
  <h4>✧ 開講日程 ✧</h4>

  ${scheduleHtml}


          <div class="course-price-box">
            <div class="price-highlight">
              <span class="price-label">受講料</span>
              <span class="price-amount">200,000<span class="price-unit">円</span></span>
              <span class="price-tax">（税込）</span>
            </div>
          </div>

          <p style="text-align:center; font-weight:700; color:#B97B86; margin:0 0 4px; font-size:15px; letter-spacing:.04em;">
      📅 募集開始：6月21日（日）21:00〜
    </p>
          <a href="${ctaApplyHref}"
      target="_blank"
      class="cta-button">
      申し込みはこちら▶︎
    </a>
        </div>
      </div>
      
    </div>

      <div class="step-arrow fade-in">
          <p class="arrow-simple-text">この2ヶ月間で<br>お顔が変わり、自信が戻り<br>「この経験を活かしたい」と思った方には<br>次のステージをご用意しています。<br><br>▼</p>
        </div>

        <div class="course-step fade-in">
          <div class="step-badge step-badge-advanced">STAGE 2</div>
          <div class="course-main-card course-main-card-advanced">
          

            <div class="course-header">
              <div class="course-title-box">
                <h3 class="course-main-title">愛されヴィーナス<br>プレミアムクラス</h3>
                <div class="premium-hero-visual">
  <img src="img/リゾート2.jpg" alt="愛されヴィーナス プレミアムクラス イメージ" />
</div>
                <p class="course-period">4ヶ月間 / 全12回
                <br>+ 徹底伴走サポート</p>
                <div class="diploma-badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 9H9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>ディプロマ発行あり</span>
                </div>
              </div>
            </div>

             <div class="course-description-box">
            <p>
              顔ヨガを仕事にするための4ヶ月間の実践講座
              <br>※STAGE1受講者のみ参加可能
            </p>
          </div>

          <div class="lesson-list">

            <div class="lesson-item">
              <span class="lesson-number">プレミアムクラスの目的</span>
              <span class="lesson-title">
               顔ヨガを「収入」ではなく
               <br>“自分らしい働き方”に変える4ヶ月。
               <br>自分が変わった経験を人の希望にできる女性になる。
              </span>
            </div>

            <div class="lesson-item">
              <span class="lesson-number">こんな方におすすめ</span>
              <span class="lesson-title">
<ul class="curriculum-inline-list">
      <li>顔ヨガを仕事にしたい</li>
      <li>発信や集客が不安</li>
      <li>一人だと止まってしまう</li>
      <li>安定して申込みが入る形を作りたい</li>
    </ul>              </span>
            </div>

            <div class="lesson-item">
              <span class="lesson-number">プレミアムクラスの特徴</span>
              <span class="lesson-title">
                 <ul class="curriculum-inline-list benefit-list">
   <ul class="curriculum-inline-list business-list">
  <li>発信に迷わなくなる“軸”ができる</li>
  <li>あなたにしかない強みが言語化できる</li>
  <li>申込みが入る動線が完成する</li>
  <li>一人で悩まない環境がある</li>
  <li>「教える側」の自信が身につく</li>
</ul>
    </ul>
              </span>
            </div>

 <div class="lesson-item">
 <span class="lesson-number">カリキュラム内容</span>

  <div class="lesson-title">
    <div class="support-phase-wrap">

      <section class="support-phase phase-1">
        <div class="support-phase-head">
          <div class="phase-badge">１ヶ月目</div>
          <h4 class="support-phase-title">基礎構築（グループ講座）</h4>
          <p class="support-phase-sub">土台を整えて「勝ち筋」を作る</p>
        </div>

        <ul class="curriculum-inline-list">
          <li>ペルソナ設計</li>
          <li>アカウント設計</li>
          <li>プロフィール添削</li>
          <li>発信の方向性</li>
          <li>リール構成</li>
          <li>Canva／編集アプリ基礎</li>
        </ul>
      </section>

      <div class="support-levelup" aria-hidden="true">
        <div class="levelup-arrow">▼</div>
      </div>

      <section class="support-phase phase-2">
        <div class="support-phase-head">
          <div class="phase-badge">２〜４ヶ月目</div>
          <h4 class="support-phase-title">実践（伴走サポート）</h4>
          <p class="support-phase-sub">実践 → 改善 → 成果へ。伸びる型を体に入れる</p>
        </div>

        <ul class="curriculum-inline-list">
          <li>グループフォロー</li>
          <li>実践チェック</li>
          <li>個別フィードバック</li>
          <li>行動確認</li>
          <li>修正サポート</li>
        </ul>
      </section>
      
    </div>
    <p class="support-note">
      ※開講日程はSTAGE1の終盤に確定します。
    </p>
  </div> </div> <div class="premium-closing">
  <p class="closing-main">
    この4ヶ月は、<br>
    本気で自分と向き合うと決めた方のための時間です。
  </p>
  <p class="closing-sub">
    “いつか変わりたい”ではなく、<br>
    “今、変わる”と決めたあなたへ。
  </p>
</div>

<div class="course-price-box">
  <div class="price-highlight">
    <span class="price-label">受講料</span>
    <span class="price-amount">350,000<span class="price-unit">円</span></span>
    <span class="price-tax">（税込）</span>
  </div>
</div>

<p class="elite-consult-text">
  プレミアムクラスにご興味がある方は、まずは個別相談へご案内いたします。
</p>

<a href="https://s.lmes.jp/landing-qr/1657280453-eKjLAxd7?uLand=W60alH"
   target="_blank"
   class="cta-button cta-button--consult">
  個別相談はこちら ▶︎
</a>
</div>
      </div>

        <div class="step-arrow fade-in">
          <p class="arrow-simple-text">自分が綺麗になった経験とスキルを使って<br>自分らしい働き方を確立したい方へ<br>トータルサポートプランもご用意しています。<br><br>▼</p>
        </div>

       <!-- =========================
  ③ 愛されヴィーナスエリートクラス
========================== -->
<div class="course-step fade-in">
  <div class="step-badge step-badge-elite">STAGE 3</div>

  <div class="course-main-card course-main-card-elite">


    <div class="course-header">
      <div class="course-title-box">
        <h3 class="course-main-title course-main-title-elite">愛されヴィーナス<br>エリートクラス</h3>
        <!-- イメージ（エリート導入） -->
<div class="elite-hero-visual">
  <img src="img/venus2.jpg" alt="愛されヴィーナス エリートクラス イメージ" />
</div>
        <p class="course-period course-period-elite">6ヶ月間で自分らしい働き方を確立</p>
        <p class="course-req">※3名限定</p>
        <p class="course-req">※プレミアムクラス修了者対象</p>
      </div>
    </div>

    <div class="course-description-box course-description-box-elite">
      <p>
       顔ヨガを「副収入」ではなく
       <br>“人生の柱”にする6ヶ月。
      </p>
    </div>

    <div class="lesson-list">

      <!-- 目的 -->
      <div class="lesson-item lesson-item-elite">
        <span class="lesson-number lesson-number-elite">3名限定の理由</span>
        <span class="lesson-title">
          このクラスは、結果を出すための“育成枠”。
          <br>人数を増やさないのは、本気で引き上げるから。
        </span>
      </div>

      <!-- 対象 -->
      <div class="lesson-item lesson-item-elite">
        <span class="lesson-number lesson-number-elite">こんな方におすすめ</span>
        <span class="lesson-title">
          <ul class="curriculum-inline-list elite-list">
            <li>さらに売上を伸ばしたい</li>
            <li>仕事として確立させたい</li>
            <li>自分らしいブランドを築きたい</li>
            <li>継続的に収入を得たい</li>
          </ul>
        </span>
      </div>

      <!-- ベネフィット -->
      <div class="lesson-item lesson-item-elite">
        <span class="lesson-number lesson-number-elite">エリート専用特別環境</span>
        <span class="lesson-title">
          <ul class="curriculum-inline-list elite-list elite-benefit-list">
            <li>メグさん月1回 個別コンサル（6回）</li>
            <li>認定講師月1回 個別フォロー（6回）</li>
            <li>グループコンサル月2回（計12回）</li>
            <li>チャット相談 無制限</li>
            <li>憧れられるブランディング撮影付き</li>
            <li>ヴィーナス塾生合宿優先参加枠</li>
          </ul>
        </span>
      </div>
      
      <div class="elite-message">
  <p class="elite-message-lead">
    このステージは、<br class="sp-only">
    <span class="elite-message-em">“なんとなく頑張る人”</span>のためではありません。
  </p>

  <div class="elite-message-divider" aria-hidden="true"></div>

  <p class="elite-message-body">
    本気で上を目指すと決めた女性のための<br class="sp-only">
    <span class="elite-message-strong">3名限定・育成枠</span>です。
  </p>
</div>



    </div>
  </div>
      </div>

    </div>
    <!-- ===== Elite Closing + Price + CTA ===== -->
<div class="elite-closing">
  <p class="elite-closing-main">
    これまでに<br class="sp-only">
    <span class="elite-closing-strong">1万人超えアカウント</span>を多数輩出。<br>
    <span class="elite-closing-strong">月商100万円超え</span>の講師も誕生しています。
  </p>

  <p class="elite-closing-sub">
    次は、<span class="elite-closing-accent">あなたの番</span>です。
  </p>
</div>

<div class="course-price-box course-price-box-elite">
  <div class="price-highlight price-highlight-elite">
    <span class="price-label">受講料</span>
    <span class="price-amount">500,000<span class="price-unit">円</span></span>
    <span class="price-tax">（税込）</span>
  </div>
</div>


       <div class="consult-box">
  <p class="consult-lead">
  エリートクラスは、<br>
    本気で取り組みたい方だけをご案内しています。
  </p>

  <p class="consult-sub">
    まずは現在の状況や目標をお伺いする<br>
    個別相談へお越しください。
  </p>
</div>

<a href="https://s.lmes.jp/landing-qr/1657280453-eKjLAxd7?uLand=A1ONRz"
  target="_blank"
  class="cta-button cta-button-consult">
  個別相談はこちら ▶︎
</a>
  </div>
</div>


  </div>
</section>

<!-- =========================
  愛されヴィーナス塾 実績
========================= -->
<section class="section results fade-in">
  <div class="container">

    <h2 class="section-title results-title">
      愛されヴィーナス塾 実績
    </h2>


<div class="results-visual">
  <img src="./img/ヴィーナス集合.jpg" alt="愛されヴィーナス塾 実績画像">
</div>

    <p class="results-lead">
      数字は目的ではなく、<br>
      <span class="results-highlight">「選ばれる力」の証明</span>です。
    </p>

    <div class="results-grid">

      <div class="result-item">
        <div class="result-number">1万人</div>
        <div class="result-text">2ヶ月でフォロワー達成</div>
      </div>

      <div class="result-item">
        <div class="result-number">3名</div>
        <div class="result-text">半年以内1万人超え</div>
      </div>

      <div class="result-item">
        <div class="result-number">5名</div>
        <div class="result-text">フォロワー1万～6万人超え</div>
      </div>

      <div class="result-item">
        <div class="result-number">18名</div>
        <div class="result-text">初回募集 満席</div>
      </div>

      <div class="result-item">
        <div class="result-number">4名</div>
        <div class="result-text">月商100万円超え</div>
      </div>

      <div class="result-item result-item-gold">
        <div class="result-number">320万円</div>
        <div class="result-text">最高売上</div>
      </div>

    </div>

  </div>
</section>

<section id="faq" class="section faq">
  <div class="container">
    <h2 class="section-title">よくある質問</h2>
    <div class="faq-list">

      <div class="faq-item fade-in">
        <div class="faq-question">
          <span class="faq-icon">Q</span>
          <h3>美顔ヨガは本当に効果がありますか？</h3>
        </div>
        <div class="faq-answer">
          <span class="faq-icon">A</span>
          <p>
            正しく続ければ効果は出ます。<br>
            正しく継続していける仕組みを整えているので、ご安心ください。
          </p>
        </div>
      </div>

      <div class="faq-item fade-in">
        <div class="faq-question">
          <span class="faq-icon">Q</span>
          <h3>何歳からでも変われますか？</h3>
        </div>
        <div class="faq-answer">
          <span class="faq-icon">A</span>
          <p>
            年齢制限はありません。<br>
            実際に、35歳から60歳まで100人以上の幅広い年齢の方がご受講くださっています。<br>
            何歳からでも変われるので、諦めずぜひチャレンジしてほしいです。
          </p>
        </div>
      </div>

      <div class="faq-item fade-in">
        <div class="faq-question">
          <span class="faq-icon">Q</span>
          <h3>どれくらいで変化を感じますか？</h3>
        </div>
        <div class="faq-answer">
          <span class="faq-icon">A</span>
          <p>
            早い方で2週間ほどで変化を感じていただけます。<br>
            1ヶ月くらいで変化を感じられる方がほとんどです。（むくみ・フェイスライン・目元・表情など）
          </p>
        </div>
      </div>

      <div class="faq-item fade-in">
        <div class="faq-question">
          <span class="faq-icon">Q</span>
          <h3>グループレッスンでもちゃんと見てもらえますか？</h3>
        </div>
        <div class="faq-answer">
          <span class="faq-icon">A</span>
          <p>
            少人数制なので一人ずつしっかりとサポートいたします。<br>
            卒業後のサポートも充実しているので、ご安心ください。
          </p>
        </div>
      </div>

      <div class="faq-item fade-in">
        <div class="faq-question">
          <span class="faq-icon">Q</span>
          <h3>続けられるか不安です…</h3>
        </div>
        <div class="faq-answer">
          <span class="faq-icon">A</span>
          <p>
            その不安は、みなさんが一番感じることです。<br>
            3ヶ月のレッスンの中で、継続できる方法もお伝えしていきますのでご安心くださいね。
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


  <section class="section cta-final">
    <div class="container">
      <div class="cta-final-box">
        <h2 class="cta-final-title">あなたの<br>「綺麗になりたい」を<br>一緒に叶えます。</h2>
        <p class="cta-final-text">
          これまで頑張ってきたあなただからこそ、<br>
          今度は自分を大切にする番です。<br><br>
          「もう遅いかも」なんてありません。<br>
          今日が人生で一番若い日。<br>
          <br>
          鏡を見るのが楽しみになる.<br>
          自分をもっと好きになれる.<br>
          自分らしく生きられる。<br><br>
          そんな人生を、一緒に歩みませんか？
        </p>
        <div style="margin:8px auto 24px; max-width:440px; background:linear-gradient(180deg,#FCF6F2 0%,#F9EDEF 100%); border:1px solid rgba(199,154,90,.30); border-radius:18px; padding:24px 22px 22px; text-align:center;">
  <div style="display:inline-block; padding:4px 16px; background:linear-gradient(135deg,#c79a5a 0%,#dcb878 100%); color:#fff; font-size:10px; letter-spacing:.22em; border-radius:999px; box-shadow:0 3px 10px rgba(199,154,90,.3);">ADMISSION</div>
  <div style="font-size:12px; letter-spacing:.14em; color:#B97B86; margin:12px 0 5px;">募集開始</div>
  <div style="font-size:25px; font-weight:700; font-family:'Noto Serif JP',serif; color:#6C5456; line-height:1.3;">6月21日<span style="font-size:16px;">（日）</span> <span style="color:#B97B86;">21:00</span><span style="font-size:16px; color:#6C5456;">〜</span></div>
</div>
        <a href="${ctaApplyHref}"
   target="_blank"
   class="cta-button"
  >
  申し込みはこちら▶︎
</a>


        
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">愛されヴィーナス塾</div>
      
      <div class="footer-links">
        <a href="#about">顔ヨガとは</a>
        <a href="#curriculum">カリキュラム</a>
        <a href="#testimonials">受講生の声</a>
        <a href="#faq">よくある質問</a>
      </div>
      <div class="footer-copyright">
        © 2026 愛されヴィーナス塾 All rights reserved.
      </div>
    </div>
  </footer>
`;

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

setTimeout(() => {
  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });
}, 100);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

document.addEventListener("click", (e) => {
  const wrap = e.target.closest(".youtube-thumb");
  if (!wrap) return;

  const id = wrap.dataset.videoId;
  wrap.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0"
      title="受講生インタビュー動画"
      frameborder="0"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
      style="width:100%;height:100%;display:block;border:0;"
    ></iframe>
  `;
});

// 公開時刻前にページを開いている場合、時刻になったら自動でリロードして日程を表示
(() => {
  const ms = SCHEDULE_REVEAL_TS - Date.now();
  if (ms > 0 && ms < 2147483647) {
    setTimeout(() => location.reload(), ms + 1500);
  }
})();

// 募集開始(21:00)前にページを開いている場合、時刻になったら自動リロードしてCTAを本募集リンクに切り替える
(() => {
  const ms = CTA_SWITCH_TS - Date.now();
  if (ms > 0 && ms < 2147483647) {
    setTimeout(() => location.reload(), ms + 1500);
  }
})();
