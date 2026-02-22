
document.querySelector('#app').innerHTML = `
  <section class="hero">
    <div class="hero-content">
      <div class="hero-brand">
        <h1 class="hero-title">愛されヴィーナス塾</h1>
      </div>
      <h2 class="hero-catchphrase">お顔を変えて<br>自分らしく働く自分に。</h2>
      <br>

</div>


      <!-- サムネイル -->
<div class="hero-video-thumbnail" id="videoThumbnail">
  <img src="./img/VSLサムネ.png" alt="動画サムネイル" class="video-thumbnail-img">
  <div class="play-button">
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="40" fill="rgba(255, 255, 255, 0.9)"/>
      <path d="M32 25L55 40L32 55V25Z" fill="#8B6F47"/>
    </svg>
  </div>
</div>

<!-- モーダル -->
<div class="video-modal" id="videoModal">
  <div class="video-modal-overlay" id="videoModalOverlay"></div>
  <div class="video-modal-content">
    <button class="video-modal-close" id="videoModalClose">×</button>

    <!-- ここがYouTube -->
    <div class="modal-youtube-wrapper">
      <iframe
        id="youtubePlayer"
        src=""
        title="YouTube video player"
        frameborder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen>
      </iframe>
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

  <section class="section what-is">
    <div class="container">
      <h2 class="section-title">顔ヨガって？</h2>
      <div class="what-is-content">
        <p class="what-is-definition">顔ヨガとは、お顔の<span class="highlight-text">表情筋を鍛えてストレッチ</span>することです。</p>

        <div class="what-is-description">
          <p>顔には約<span class="highlight-number">60</span>もの表情筋があり、<br>心の状態とリンクして、さまざまな感情を表現しています。</p>

          <p class="emphasis-text">でも…表情筋も筋肉。<br>使わないとどんどん衰えてしまうんです。</p>

          <p>同じ筋肉ばかりを使ってしまうと、「表情ぐせ」がついて<span class="highlight-text">シワやたるみの原因</span>に。</p>

          <p class="solution-text">顔ヨガでバランスよく筋肉を動かすことで、表情も気持ちも前向きに整えられます◎</p>
        </div>
      </div>

      <div class="before-after-content">
        <div class="before-after-header">
          <p class="before-after-title">ほんの少しの習慣でこの変化！</p>
        </div>

        <div class="before-after-images">
          <img src="./img/biforeAfter.jpg" alt="顔ヨガのビフォーアフター" class="before-after-image">
        </div>

        <p class="before-after-caption">他にもこんな変化が...</br>▼</p>
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
          かつての私も、同じでした。<br> 
          「私には何が残っているんだろう」という不安の中で出会ったのが、「表情筋の基礎と理論」に基づいた美顔ヨガでした。 
          <br>
          <br>
          お顔を自分の手で整え、鏡の中の自分を「最高に可愛い」と誇れるようになったとき、私の人生と仕事は、音を立てて新しいステージへと動き始めたのです。
        <div class="story-highlight">
          <p>今、私は同じように悩んでいる女性たちに「あなたも変われる」と伝えたいと思っています。</p>
        </div>

        <div class="story-reflection">
        <p><img src="./img/S__38297608.jpg" alt="輝く未来" class="story-future-image" /></p>
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
s
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
            <p class="testimonial-text">年齢を重ねる中で、表情や気持ちの変化に戸惑っていました。「顔ヨガ」と聞いて最初は表情筋の運動かと思っていたのですが、めぐさんの「心もお顔も上げていくレッスン」の考え方に惹かれて、「これはただの技術じゃなく、人生が前向きになる講座だ」と感じたのが決め手でした。<br><br>顔ヨガだけやってもお顔はちゃんと上がります。でも女性としての気持ちの持ち方を学べて、それをこれから私もたくさんの方にお伝えしていくんだと思うと、50代が楽しくなりました！！</p>
          </div>
        </div>

        <div class="testimonial-card fade-in">
          <div class="testimonial-image">
            <img src="img/受講生の変化3.jpg" alt="受講生の変化3" />
          </div>
          <div class="testimonial-content">
            <div class="testimonial-highlight">
              めぐ先生はベテランのエステティシャンでもあるので、マッサージのやり方やほぐし方もすごく分かりやすかったです。
            </div>
            <p class="testimonial-text">これまでエステを通して多くのお客様と接してきましたが、「もっと心の部分に寄り添えるような技術があったら」と感じることがありました。めぐさんの講座は、技術のわかりやすさだけでなく、想いや寄り添いの温度が高くて。先生自身が伝えたいことを体現してる"感じ"に惹かれて、ここで学びたいと思いました。<br><br>お肌のお手入れのやり方やスキンケアも教えていただけて、私もこれから生徒さんに色んなアプローチができるし、これから講師として活動していくために、すごく安心感があります。エステとマインドと顔ヨガ、全部学べるってすごいと思う。本当におすすめです！</p>
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

        <div class="instructor-content">
          <div class="instructor-name-box instructor-name-box-mobile">
            <h3 class="instructor-name">加藤 潤（めぐ）</h3>
            <p class="instructor-subtitle">愛されヴィーナス塾 主宰</p>
          </div>

          <div class="instructor-bio">
            <p class="bio-intro">元パート時給970円のエステティシャンから、今ではサロンオーナーとして多くの女性の人生に寄り添う毎日を送っています。</p>
            <br>
            <p class="bio-turning-point">コロナ禍で心身ともに限界を感じていた私を変えてくれたのが、他でもない「<span class="highlight-keyword">顔ヨガ</span>」でした。</p>
            <br>
            <p class="bio-philosophy">表情が変わると、マインドも変わり自分を大切にできるようになります。</p>
            <br>
            <p class="bio-results">今では、ありがたいことに<br><span class="voice-quote">「自分のことが好きになれた」</span><br><span class="voice-quote">「理想の働き方が叶った」</span><br>そんな声がたくさん届いています。</p>
            <br>
            <p class="bio-mission">私自身が変われたからこそ、<br><span class="mission-text">「皆さんの一歩を全力でサポートしたい」</span><br>そういった想いのもと活動しています。</p>
            <br>
            <p class="bio-cta">私と一緒に<br><span class="final-message">「可愛い笑顔」と「理想の未来」を手に入れましょう♡</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="curriculum" class="section curriculum">
  <div class="container">
    <h2 class="section-title">カリキュラム</h2>

    <p class="curriculum-lead-clean">
      3つのステージで基礎から応用まで徹底サポート
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
              まずは顔ヨガの基礎から体系的に学び、自分が綺麗になって自信を育みましょう。
            </p>
          </div>

          <div class="lesson-list">

            <div class="lesson-item">
              <span class="lesson-number">STAGE1の目的</span>
              <span class="lesson-title">
                顔ヨガを正しく学び、顔の変化と自信を体感する。
              </span>
            </div>

            <div class="lesson-item">
              <span class="lesson-number">こんな方におすすめ</span>
              <span class="lesson-title">
<ul class="curriculum-inline-list">
      <li>顔に自信を取り戻したい女性</li>
      <li>老け見え・たるみが気になる</li>
      <li>まずは自分を変えたい</li>
      <li>仕事にするかはまだ未定</li>
    </ul>              </span>
            </div>

            <div class="lesson-item">
              <span class="lesson-number">ヴィーナス美顔ヨガの特徴</span>
              <span class="lesson-title">
                 <ul class="curriculum-inline-list benefit-list">
      <li>正しい顔ヨガが身につく</li>
      <li>老け見えの原因が分かる</li>
      <li>顔の変化を実感できる</li>
      <li>「私、まだ変われる」という感覚が戻る</li>
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
                グループレッスン（オンライン）
              </span>
            </div>

          </div>

           <div class="course-schedule-box">
          
  <h4>✧ 開講日程 ✧</h4>

  <div class="schedule-columns">
    <!-- 平日夜コース -->
    <div class="schedule-column">
      <h5>平日クラス　21:00〜22:30</h5>
      <ul class="schedule-dates">
        <li>① 3月10日（火）</li>
        <li>② 3月18日（水）</li>
        <li>③ 3月25日（水）</li>
        <li>④ 4月2日（木）</li>
        <li>⑤ 4月14日（火）</li>
        <li>⑥ 4月21日（火）</li>
      </ul>
    </div>

    <!-- 土日昼コース -->
    <div class="schedule-column">
      <h5>土日クラス　10:00〜11:30</h5>
      <ul class="schedule-dates">
        <li>① 3月8日（日）</li>
        <li>② 3月15日（日）</li>
        <li>③ 3月21日（土）</li>
        <li>④ 4月4日（土）</li>
        <li>⑤ 4月11日（土）</li>
        <li>⑥ 4月19日（日）</li>
      </ul>
    </div>
  </div>


          <div class="course-price-box">
            <div class="price-highlight">
              <span class="price-label">受講料</span>
              <span class="price-amount">200,000<span class="price-unit">円</span></span>
              <span class="price-tax">（税込）</span>
            </div>
          </div>

        </div>
      </div>
    </div>

      <div class="step-arrow fade-in">
          <p class="arrow-simple-text">さらに顔ヨガ講師として活躍したい方は、<br>STAGE1修了後にSTAGE2へお進みいただけます。<br><br>▼</p>
        </div>

        <div class="course-step fade-in">
          <div class="step-badge step-badge-advanced">STAGE 2</div>
          <div class="course-main-card course-main-card-advanced">
          

            <div class="course-header">
              <div class="course-title-box">
                <h3 class="course-main-title">愛されヴィーナス プレミアムクラス</h3>
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
                顔ヨガを「仕事」として成立させるためのノウハウを習得しましょう。
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
  <li>発信の軸が明確になる</li>
  <li>ペルソナ設計ができる</li>
  <li>アカウント設計が整う</li>
  <li>リール／投稿の型が分かる</li>
  <li>集客の流れが理解できる</li>
  <li>「教える側」の自信がつく</li>
</ul>
    </ul>
              </span>
            </div>

 <div class="lesson-item">
  <span class="lesson-number">カリキュラム内容</span>

  <div class="lesson-title">
    <div class="support-phase-wrap">

      <!-- PHASE 1 -->
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

      <!-- PHASE 2 -->
      <section class="support-phase phase-2">
        <div class="support-phase-head">
          <div class="phase-badge">２〜４ヶ月目</div>
          <h4 class="support-phase-title">実践（伴走サポート）</h4>
          <p class="support-phase-sub">実践 → 改善 → 成果へ。伸びる型を体に入れる</p>
        </div>

        <!-- “伸びていく感”のゲージ -->
        <div class="progress-rail" aria-hidden="true">
          <div class="progress-fill"></div>
          <div class="progress-dots">
            <span class="dot on"></span>
            <span class="dot on"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <div class="progress-labels">
            <span>実践</span><span>改善</span><span>加速</span><span>定着</span>
          </div>
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
  </div>
   <div class="course-price-box">
            <div class="price-highlight">
              <span class="price-label">受講料</span>
              <span class="price-amount">350,000<span class="price-unit">円</span></span>
              <span class="price-tax">（税込）</span>
            </div>
          </div>
</div>
      </div>

        <div class="step-arrow fade-in">
          <p class="arrow-simple-text">さらに顔ヨガ講師として活躍したい方は、<br>STAGE1修了後にSTAGE2へお進みいただけます。<br><br>▼</p>
        </div>

       <!-- =========================
  ③ 愛されヴィーナスエリートクラス
========================== -->
<div class="course-step fade-in">
  <div class="step-badge step-badge-elite">STAGE 3</div>

  <div class="course-main-card course-main-card-elite">

    <div class="course-header">
      <div class="course-title-box">
        <h3 class="course-main-title course-main-title-elite">愛されヴィーナス エリートクラス</h3>
        <p class="course-period course-period-elite">6ヶ月間で自分らしい働き方を確立</p>
        <p class="course-req">※プレミアムクラス修了者対象</p>
      </div>
    </div>

    <div class="course-description-box course-description-box-elite">
      <p>
        顔ヨガを「単発収入」で終わらせず、<br>
        <b>安定した仕事</b>として育てていき、自分らしい働き方を確立しましょう。
      </p>
    </div>

    <div class="lesson-list">

      <!-- 目的 -->
      <div class="lesson-item lesson-item-elite">
        <span class="lesson-number lesson-number-elite">エリートクラスの目的</span>
        <span class="lesson-title">
          顔ヨガを単発収入ではなく<br class="sp-only">
          「安定した仕事」に育てる。
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
        <span class="lesson-number lesson-number-elite">ベネフィット</span>
        <span class="lesson-title">
          <ul class="curriculum-inline-list elite-list elite-benefit-list">
            <li>集客の仕組みが安定する</li>
            <li>商品設計が整う</li>
            <li>価格に迷わなくなる</li>
            <li>一人で悩まなくなる</li>
            <li>仕事として回る状態になる</li>
          </ul>
        </span>
      </div>

      <!-- サポート内容 -->
      <div class="lesson-item lesson-item-elite">
        <span class="lesson-number lesson-number-elite">カリキュラム内容</span>
       <div class="lesson-title">
    <div class="support-phase-wrap elite-support-wrap">

      <!-- 前半 -->
      <div class="support-phase elite-phase">
    <div class="support-phase-head">
    <div class="phase-badge phase-badge-elite">前半</div>
    <p class="support-phase-title">設計・土台づくり（グループ）</p>
  </div>
        <ul class="curriculum-inline-list elite-list">
          <li>グループ講座</li>
          <li>伴走サポート</li>
        </ul>
      </div>

      <!-- レベルアップ表現 -->
      <div class="support-levelup elite-levelup" aria-hidden="true">
        <div class="levelup-arrow">▼</div>
      </div>

      <!-- 後半 -->
      <div class="support-phase elite-phase elite-phase-grow">
      <div class="support-phase-head">
    <div class="phase-badge phase-badge-elite">後半</div>
    <p class="support-phase-title">仕組みを育て“回る状態”へ</p>
  </div>

        <div class="progress-rail elite-progress" aria-hidden="true">
          <div class="progress-fill elite-progress-fill"></div>
          <div class="progress-dots">
            <span class="dot on"></span>
            <span class="dot on"></span>
            <span class="dot on"></span>
            <span class="dot"></span>
          </div>
          <div class="progress-labels">
            <span>実践</span><span>改善</span><span>安定</span><span>継続</span>
          </div>
        </div>

        <ul class="curriculum-inline-list elite-list">
          <li>伴走サポート</li>
          <li>必要に応じた個別フォロー</li>
        </ul>

        <p class="support-note elite-note">
          ※モチベーションに頼らず安定を生む<b>仕組み設計</b>
        </p>
      </div>

    </div>
  </div>
      </div>

    </div>
  </div>
</div>



    <a href="https://form.lmes.jp/landing-qr/2001999955-dv0AAknx?uLand=zbIZmA"
      target="_blank"
      class="cta-button"
      onclick="gtag('event', 'cta_click', {
        event_category: 'CTA',
        event_label: 'cta_main',
        transport_type: 'beacon'
      });">
      お申し込みはこちら▶︎
    </a>

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
            ただし「一回で別人」ではなく、筋肉の使い方を理解して継続していくことで効果を感じていただけます。
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
            特に40代以降は、表情筋＋マインドの整え方が大切です。「もう遅い」と感じている方にも、諦めずぜひチャレンジしてほしいです。
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
            はい。少人数制なので一人ずつしっかりチェックできます。<br>
            6回目は完全個別レッスンで、お悩みや苦手をお伺いしてレッスンをさせていただきます。
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
        <h2 class="cta-final-title">あなたの<br>「可愛くなりたい」<br>を応援します</h2>
        <p class="cta-final-text">
          これまで頑張ってきたあなただからこそ、<br>
          今度は自分を大切にする番です。<br><br>
          「もう遅いかも」なんて、ありません。<br>
          <br>
          鏡を見るのが楽しみになる、<br>
          自分を好きになれる、<br>
          自分らしく生きられる。<br><br>
          そんな人生を、一緒に歩みませんか？
        </p>
        <a href="https://form.lmes.jp/landing-qr/2001999955-dv0AAknx?uLand=zbIZmA"
   target="_blank"
   class="cta-button"
   onclick="gtag('event', 'cta_click', {
     event_category: 'CTA',
     event_label: 'cta_main',
     transport_type: 'beacon'
   });">
  お申し込みはこちら▶︎
</a>


        
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">マインドアップ美顔ヨガ講座 顔labo</div>
      
      <div class="footer-links">
        <a href="#about">顔ヨガとは</a>
        <a href="#curriculum">カリキュラム</a>
        <a href="#testimonials">受講生の声</a>
        <a href="#faq">よくある質問</a>
      </div>
      <div class="footer-copyright">
        © 2025 顔labo. All rights reserved.
      </div>
    </div>
  </footer>
`;

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

setTimeout(() => {
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}, 100);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== YouTube モーダル用 =====
// ===== YouTube モーダル用 =====
const videoThumbnail = document.getElementById('videoThumbnail');
const videoModal = document.getElementById('videoModal');
const videoModalOverlay = document.getElementById('videoModalOverlay');
const videoModalClose = document.getElementById('videoModalClose');
const youtubePlayer = document.getElementById('youtubePlayer');

const YOUTUBE_VIDEO_ID = "la4GLwvaypE";

// 要素が見つからない時は何もしない（JS停止を防ぐ）
if (!videoThumbnail || !videoModal || !videoModalOverlay || !videoModalClose || !youtubePlayer) {
  console.warn("YouTube modal elements not found");
} else {
  function openVideoModal() {
    youtubePlayer.src =
      `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;
    videoModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    videoModal.style.display = 'none';
    youtubePlayer.src = ""; // 停止
    document.body.style.overflow = '';
  }

  videoThumbnail.addEventListener('click', openVideoModal);
  videoModalOverlay.addEventListener('click', closeVideoModal);
  videoModalClose.addEventListener('click', closeVideoModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.style.display === 'flex') {
      closeVideoModal();
    }
  });
}