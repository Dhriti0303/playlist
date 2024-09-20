const song1= document.getElementById("song1");
const song2= document.getElementById("song2");
const song3= document.getElementById("song3");
const song4= document.getElementById("song4");
const song5= document.getElementById("song5");
const song6= document.getElementById("song6");
const song7= document.getElementById("song7");
const song8= document.getElementById("song8");
const song9= document.getElementById("song9");
const song10= document.getElementById("song10");
const song11= document.getElementById("song11");
const nope1= document.getElementById("nope1");
const nope2= document.getElementById("nope2");
const nope3= document.getElementById("nope3");
const nope4= document.getElementById("nope4");
const nope5= document.getElementById("nope5");
const nope6= document.getElementById("nope6");
const nope7= document.getElementById("nope7");
const nope8= document.getElementById("nope8");
const nope9= document.getElementById("nope9");
const nope10= document.getElementById("nope10");
const nope11= document.getElementById("nope11");
let a="";
let audio1=new Audio("3D---Jung-Kook(PagalWorld)_1.mp3");
let audio2=new Audio("JUNGKOOK (BTS) - Closer to You (Feat. Major Lazer).mp3");
let audio3=new Audio("Jungkook - Seven (feat. Latto) (Explicit Ver.).mp3");
let audio4=new Audio("Jungkook - Standing Next to You.mp3");
let audio5=new Audio("JUNGKOOK (BTS) - Yes or No.mp3");
let audio6=new Audio("BTS - Begin (JUNGKOOK Solo).mp3");
let audio7=new Audio("JUNGKOOK (BTS) - Never Let Go.mp3");
let audio8=new Audio("JUNGKOOK (BTS) - My You.mp3");
let audio9=new Audio("JUNGKOOK (BTS) - Too Sad to Dance.mp3");
let audio10=new Audio("JUNGKOOK (BTS) - Shot Glass of Tears.mp3");
let audio11=new Audio("JUNGKOOK (BTS) - Seven (Feat. Latto) (Clean Ver.).mp3");
nope1.addEventListener("click",()=>{
  song1.style.display="none";
  audio1.pause();
});
nope2.addEventListener("click",()=>{
  song2.style.display="none";
  audio2.pause();
});
nope3.addEventListener("click",()=>{
  song3.style.display="none";
  audio3.pause();
});
nope4.addEventListener("click",()=>{
  song4.style.display="none";
  audio4.pause();
});
nope5.addEventListener("click",()=>{
  song5 .style.display="none";
  audio5.pause();
});
nope6.addEventListener("click",()=>{
  song6 .style.display="none";
  audio6.pause();
});
nope7.addEventListener("click",()=>{
  song7 .style.display="none";
  audio7.pause();
});
nope8.addEventListener("click",()=>{
  song8 .style.display="none";
  audio8.pause();
});
nope9.addEventListener("click",()=>{
  song9 .style.display="none";
  audio9.pause();
});
nope10.addEventListener("click",()=>{
  song10 .style.display="none";
  audio10.pause();
});
nope11.addEventListener("click",()=>{
  song11 .style.display="none";
  audio11.pause();
});

const play=document.getElementById("play");
const played=()=>{
  play.addEventListener("click",()=>{
    if(r==0){
      audio[r].play();
      hew=text.innerText="3D  ~ JUNGKOOK AND JACK HARLOW  ~  3:21"; 
      current.style.display="block";
      current.innerHTML=hew; 
    }
    else{
    audio[r-1].play();
    console.log(r);
    con=true;
    display();
    }
  })
}
played();
let p=false;
let r=0;;
const audio=[audio1,audio2,audio3,audio4,audio5,audio6,audio7,audio8,audio9,audio10,audio11];
const pause=document.getElementById("pause");
const paused=()=>{
  pause.addEventListener("click",()=>{
    for(let i in audio){
      audio[i].pause();
      con=false;
      a="";
      p=true;
      current.style.display="none";
    }
  })
}
paused();
const left=document.getElementById("left");
const lefted=()=>{
  left.addEventListener("click",()=>{
    if(r<=1){
      audio[0].pause();
      r=11;
      audio[r-1].play();
      console.log(r);
    }
    else{
    r--;
    audio[r].pause();
      audio[r-1].play();
      console.log(r);
    }
  })
}
lefted();
const right=document.getElementById("right");
const righted=()=>{
  right.addEventListener("click",()=>{
    if(r==11){
      audio[r-1].pause();
      r=0;
      audio[r].play();
      console.log(r);
    }
    else{
      audio[r-1].pause();
      audio[r].play();
      console.log(r);
      r++;
    }
    } )
}
righted();
const current=document.getElementById("current");
let con=false;
const noped=[nope1,nope2,nope3,nope4,nope5,nope6,nope7,nope8,nope9,nope10,nope11];
const songed=[song1,song2,song3,song4,song5,song6,song7,song8,song9,song10,song11];
let text="";
let hew="";
const fun1=()=>{
  if(con==false){
    con=true;
    hew=text.innerText="3D  ~ JUNGKOOK AND JACK HARLOW  ~  3:21"; 
    display();
    a=audio1.play();
    r=1;
    setTimeout(funed2,201000);
  }
  else{
    pausing();
  }
}
const funed1=()=>{
    hew=text.innerText="3D  ~ JUNGKOOK AND JACK HARLOW  ~  3:21"; 
    display();
    audio[r].play();
    r=1;
    setTimeout(funed2,201000);
}
const fun2=()=>{
  if(con==false){
    con=true;
    a=audio2.play();
    r=2;
  hew=text.innerText="Closer to you ~ Jungkook and Mazor Lazer ` 2:50"; 
     display();
     setTimeout(funed3,170000);
  }
  else{
pausing();
  }
}
const funed2=()=>{
    a=audio2.play();
    r=2;
  hew=text.innerText="Closer to you ~ Jungkook and Mazor Lazer ` 2:50"; 
     display();
     setTimeout(funed3,170000);
}
const fun3=()=>{
if(con==false){
  con=true;
 a= a=audio3.play();
 r=3;
 hew=text.innerText="Seven(explixit ver.) ~ Jungkook and Latto ~ 3:03";
display(); 
setTimeout(funed4,183000);
}
else{
pausing();
}
}
const funed3=()=>{
  con=true;
 a= a=audio3.play();
 r=3;
 hew=text.innerText="Seven(explixit ver.) ~ Jungkook and Latto ~ 3:03";
display(); 
setTimeout(funed4,183000);
}
const fun4=()=>{
    if(con==false){
      con=true;
    a=audio4.play();
    r=4;
    hew=text.innerText="Standing next to You ~ Jungkoo ~3:26";
    display();
    setTimeout(funed5,206000);
  }
  else{
pausing();
  }
}
const funed4=()=>{
    a=audio4.play();
    r=4;
    hew=text.innerText="Standing next to You ~ Jungkoo ~3:26";
    display();
    setTimeout(funed5,206000); 
}
const fun5=()=>{
    if(con==false){
    con=true;
    a=audio5.play();
    r=5;
    hew=text.innerText="Yes or No ~ Jugkook 2:27";
    display(); 
    setTimeout(funed6,147000);
  }
  else{
pausing();
  }
}
const funed5=()=>{
    a=audio5.play();
    r=5;
    hew=text.innerText="Yes or No ~ Jugkook 2:27";
    display(); 
    setTimeout(funed6,147000);
}
const fun6=()=>{
  if(con==false){
    con=true;
    a=audio6.play();
    r=6;
    hew=text.innerText="Begin ~ Jungkook ~ 3:49";
    display();
    setTimeout(funed7,229000); 
  }
  else{
pausing();
  }
}
const funed6=()=>{
    a=audio6.play();
    r=6;
    hew=text.innerText="Begin ~ Jungkook ~ 3:49";
    display(); 
    setTimeout(funed7,229000);
}
const fun7=()=>{
  if(con==false){
    con=true;
    a=audio7.play();
    r=7;
    hew=text.innerText="Never let go ~ Jungkook ~ 2:46";
    display(); 
    setTimeout(funed8,166000);
  }
  else{
pausing();
  }
}
const funed7=()=>{
    con=true;
    a=audio7.play();
    r=7;
    hew=text.innerText="Never let go ~ Jungkook ~ 2:46";
    display(); 
    setTimeout(funed8,166000);
}
const fun8=()=>{
  if(con==false){
    con=true;
    a=audio8.play();
    r=8;
    hew=text.innerText="My you ~ Jungkook ~ 2:45";
    display(); 
    setTimeout(funed9,165000);
  }
  else{
pausing();
  }
}
const funed8=()=>{
    con=true;
    a=audio8.play();
    r=8;
    hew=text.innerText="My you ~ Jungkook ~ 2:45";
    display(); 
    setTimeout(funed9,165000);
}
const fun9=()=>{
  if(con==false){
    con=true;
    a=audio9.play();
    r=9;
    hew=text.innerText="Too sad to dance  ~ Jungook ~ 2:55";
    display(); 
    setTimeout(funed10,175000);
  }
  else{
    pausing();
  }
}
const funed9=()=>{
    con=true;
    a=audio9.play();
    r=9;
    hew=text.innerText="Too sad to dance  ~ Jungook ~ 2:55";
    display();
    setTimeout(funed10,175000); 
}
const fun10=()=>{
  if(con==false){
    con=true;
    a=audio10.play();
    r=10;
    hew=text.innerText="Shot glass of tears ~ Jungkook ~  2:47";
    display(); 
    setTimeout(funed11,167000);
  }
  else{
    pausing();
  }
}
const funed10=()=>{
    con=true;
    a=audio10.play();
    r=10;
    hew=text.innerText="Shot glass of tears ~ Jungkook ~  2:47";
    display(); 
    setTimeout(funed11,167000);
}
const fun11=()=>{
  if(con==false){
    con=true;
    a=audio11.play();
    r=11;
    hew=text.innerText="Seven (clean ver.) ~ Jungkook ~ 3:03";
    display(); 
    setTimeout(funed1,183000);
  }
  else{
    pausing();
  }
}
const funed11=()=>{
    con=true;
    a=audio11.play();
    r=11;
    hew=text.innerText="Seven (clean ver.) ~ Jungkook ~ 3:03";
    display();
    setTimeout(funed1,183000); 
}
song1.addEventListener("click",fun1);
song2.addEventListener("click",fun2);
song3.addEventListener("click",fun3);
song4.addEventListener("click",fun4);
song5.addEventListener("click",fun5);
song6.addEventListener("click",fun6);
song7.addEventListener("click",fun7);
song8.addEventListener("click",fun8);
song9.addEventListener("click",fun9);
song10.addEventListener("click",fun10);
song11.addEventListener("click",fun11);
const display=()=>{
  current.style.display="block";
  current.innerHTML=hew; 
}
const pausing=()=>{
  con=false;
  if(con==false){current.style.display="none";}
  a="";
     for(let i in audio){
    audio[i].pause();
    r=0;
    hew="";
     }
}