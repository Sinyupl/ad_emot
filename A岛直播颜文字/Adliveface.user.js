// ==UserScript==
// @name        A岛直播颜文字
// @namespace   11
// @include     http://live.nimingban.com/u/*
// @version     1
// @grant       none
// ==/UserScript==

window.onload = function(){
  var comments = document.getElementById('comments');
  var select = document.createElement('select');
  select.id = 'hemot';
  select.innerHTML = "<option value=''>无</option><option value='|∀ﾟ'>|∀ﾟ</option><option value='(´ﾟДﾟ`)'>(´ﾟДﾟ`)</option><option value='(;´Д`)'>(;´Д`)</option><option value='(｀･ω･)'>(｀･ω･)</option><option value='(=ﾟωﾟ)='>(=ﾟωﾟ)=</option><option value='| ω・´)'>| ω・´)</option><option value='|-` )'>|-` )</option><option value='|д` )'>|д` )</option><option value='|ー` )'>|ー` )</option><option value='|∀` )'>|∀` )</option><option value='(つд⊂)'>(つд⊂)</option><option value='(ﾟДﾟ≡ﾟДﾟ)'>(ﾟДﾟ≡ﾟДﾟ)</option><option value='(＾o＾)ﾉ'>(＾o＾)ﾉ</option><option value='(|||ﾟДﾟ)'>(|||ﾟДﾟ)</option><option value='( ﾟ∀ﾟ)'>( ﾟ∀ﾟ)</option><option value='( ´∀`)'>( ´∀`)</option><option value='(*´∀`)'>(*´∀`)</option><option value='(*ﾟ∇ﾟ)'>(*ﾟ∇ﾟ)</option><option value='(*ﾟーﾟ)'>(*ﾟーﾟ)</option><option value='(　ﾟ 3ﾟ)'>(　ﾟ 3ﾟ)</option><option value='( ´ー`)'>( ´ー`)</option><option value='( ・_ゝ・)'>( ・_ゝ・)</option><option value='( ´_ゝ`)'>( ´_ゝ`)</option><option value='(*´д`)'>(*´д`)</option><option value='(・ー・)'>(・ー・)</option><option value='(・∀・)'>(・∀・)</option><option value='(ゝ∀･)'>(ゝ∀･)</option><option value='(〃∀〃)'>(〃∀〃)</option><option value='(*ﾟ∀ﾟ*)'>(*ﾟ∀ﾟ*)</option><option value='( ﾟ∀。)'>( ﾟ∀。)</option><option value='( `д´)'>( `д´)</option><option value='(`ε´ )'>(`ε´ )</option><option value='(`ヮ´ )'>(`ヮ´ )</option><option value='σ`∀´)'>σ`∀´)</option><option value=' ﾟ∀ﾟ)σ'> ﾟ∀ﾟ)σ</option><option value='ﾟ ∀ﾟ)ノ'>ﾟ ∀ﾟ)ノ</option><option value='(╬ﾟдﾟ)'>(╬ﾟдﾟ)</option><option value='(|||ﾟдﾟ)'>(|||ﾟдﾟ)</option><option value='( ﾟдﾟ)'>( ﾟдﾟ)</option><option value='Σ( ﾟдﾟ)'>Σ( ﾟдﾟ)</option><option value='( ;ﾟдﾟ)'>( ;ﾟдﾟ)</option><option value='( ;´д`)'>( ;´д`)</option><option value='(　д ) ﾟ ﾟ'>(　д ) ﾟ ﾟ</option><option value='( ☉д⊙)'>( ☉д⊙)</option><option value='(((　ﾟдﾟ)))'>(((　ﾟдﾟ)))</option><option value='( ` ・´)'>( ` ・´)</option><option value='( ´д`)'>( ´д`)</option><option value='( -д-)'>( -д-)</option><option value='(>д<)'>(&gt;д&lt;)</option><option value='･ﾟ( ﾉд`ﾟ)'>･ﾟ( ﾉд`ﾟ)</option><option value='( TдT)'>( TдT)</option><option value='(￣∇￣)'>(￣∇￣)</option><option value='(￣3￣)'>(￣3￣)</option><option value='(￣ｰ￣)'>(￣ｰ￣)</option><option value='(￣ . ￣)'>(￣ . ￣)</option><option value='(￣皿￣)'>(￣皿￣)</option><option value='(￣艸￣)'>(￣艸￣)</option><option value='(￣︿￣)'>(￣︿￣)</option><option value='(￣︶￣)'>(￣︶￣)</option><option value='ヾ(´ωﾟ｀)'>ヾ(´ωﾟ｀)</option><option value='(*´ω`*)'>(*´ω`*)</option><option value='(・ω・)'>(・ω・)</option><option value='( ´・ω)'>( ´・ω)</option><option value='(｀・ω)'>(｀・ω)</option><option value='(´・ω・`)'>(´・ω・`)</option><option value='(`・ω・´)'>(`・ω・´)</option><option value='( `_っ´)'>( `_っ´)</option><option value='( `ー´)'>( `ー´)</option><option value='( ´_っ`)'>( ´_っ`)</option><option value='( ´ρ`)'>( ´ρ`)</option><option value='( ﾟωﾟ)'>( ﾟωﾟ)</option><option value='(oﾟωﾟo)'>(oﾟωﾟo)</option><option value='(　^ω^)'>(　^ω^)</option><option value='(｡◕∀◕｡)'>(｡◕∀◕｡)</option><option value='/( ◕‿‿◕ )\'>/( ◕‿‿◕ )\</option><option value='ヾ(´ε`ヾ)'>ヾ(´ε`ヾ)</option><option value='(ノﾟ∀ﾟ)ノ'>(ノﾟ∀ﾟ)ノ</option><option value='(σﾟдﾟ)σ'>(σﾟдﾟ)σ</option><option value='(σﾟ∀ﾟ)σ'>(σﾟ∀ﾟ)σ</option><option value='|дﾟ )'>|дﾟ )</option><option value='┃電柱┃'>┃電柱┃</option><option value='ﾟ(つд`ﾟ)'>ﾟ(つд`ﾟ)</option><option value='ﾟÅﾟ )　'>ﾟÅﾟ )　</option><option value='⊂彡☆))д`)'>⊂彡☆))д`)</option><option value='⊂彡☆))д´)'>⊂彡☆))д´)</option><option value='⊂彡☆))∀`)'>⊂彡☆))∀`)</option><option value='(´∀((☆ミつ'>(´∀((☆ミつ</option>";
  comments.insertBefore(select,null);
  var hemot = document.getElementById('hemot');
  hemot.style.width ='80px';
  setStyle(hemot,{
    "position":"absolute",
    "left":"10px",
    "bottom":"33px",
    "width":"74px"
  });
  var danmaku = document.getElementById('danmaku');
  setStyle(danmaku,{
    "width":"80%",
    "margin-left":"15%"
  })
  
  var mdl = document.getElementsByClassName("mdl-textfield__label")[0];
  setStyle(mdl, {
    "width":"80%",
    "margin-left":"15%"
  })
  hemot.onchange = function(){
    var val = hemot.value;
    danmaku.focus();
    danmaku.value = val;
    
  }
  
  
}

var setStyle = function(div, css){
  for(var i in css){
    div.style[i] = css[i];
  }
}


