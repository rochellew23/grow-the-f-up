document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(SplitText)
  gsap.registerPlugin(TextPlugin)

  //intro animation
  let intro = gsap.timeline()
  intro.from('#intro-image', { width: 0, duration: 2.5 })
    .from('#intro-buttons', { opacity: 0, duration: 1.5 });

  //page 1 animations
  //let split = SplitText.create(".split", { type: "words, chars" });

  let morning = gsap.timeline()
  morning.to("#morning1", {
    duration: 1,
    text: "Good Morning!",
    ease: "steps(20)",
  });
  morning.to("#morning2", {
    duration: 3,
    text: "Today is a new day! Lets look at our to-do list and get some stuff done!",
    ease: "none",
  });
  morning.from("#page1-button", { opacity: 0, x: 100, duration: 1 });

  let listButton1 = document.getElementById('page1-button');

  function listAppear1() {
    let list1 = gsap.timeline()
    list1.to('#page1list', { y: -900, duration: 1.5 })
      .to('#good-morning', { opacity: 0, duration: 1.5 });
  };

  if (listButton1) {
    listButton1.addEventListener("click", listAppear1);
  }

  let clickPage1 = 0;
  let listItems = document.querySelectorAll('.list-items');

  function addClicks() {
    clickPage1 += 1;
    console.log(clickPage1)
    doomScroll();
  }

  function doomScroll() {
    if (clickPage1 == 5) {
      console.log('5 clicks')
      gsap.fromTo('#doomscroll', { opacity: 0 }, { opacity: 1, duration: 1.33 });
    }
  }

  listItems.forEach(item => {
    item.addEventListener('click', addClicks)
  });

  //page 2 animations

  let clickPage2 = 0;
  let phone = document.getElementById('phone')

  function countPage2() {
    clickPage2 += 1;
    console.log(clickPage2)
    popUp(clickPage2)
  }

  if (phone) {
    phone.addEventListener('click', countPage2)
  }



  function popUp(num) {
    switch (num) {
      case 1:
        gsap.to('#pop-up1', { top: 100, left: 575, duration: 1.5 })
        break;

      case 2:
        gsap.to('#pop-up2', { top: 175, left: 975, duration: 1.5 })
        break;

      case 3:
        gsap.to('#pop-up3', { top: 550, left: 650, duration: 1.5 })
        break;

      case 4:
        gsap.to('#pop-up4', { top: 640, left: 1000, duration: 1.5 })
        break;

      case 5:
        gsap.to('#pop-up5', { top: 350, left: 755, opacity: 1, duration: 1.5 })
        break;

      default:
        break;
    }
  }

  //page 3 animation
  let page3 = gsap.timeline()
  page3.from('#room', { opacity: 0, duration: 1.5 })
  page3.to("#page3text", {
    duration: 3,
    text: "oh no...i scrolled for a little too long and now the day's almost done :( (and my butt hurts from sitting at my desk chair too long...) let's see if i can move to another place for now!",
    ease: "steps(100)",
  });

  //page 4 animations
  let page4 = gsap.timeline()
  page4.to('#page4-1', {
    duration: 2,
    text: "Today was meant to be a productive day :( What happened?",
    ease: "none",
  })
  page4.to('#page4-2', {
    duration: 3,
    text: "Wait a minute...what day even is today? What year is it?",
    ease: "none",
  })
  page4.to('#page4-3', {
    duration: 3.5,
    text: "How old am I?",
    ease: "none",
  })
  page4.to('#age-select', { opacity: 1, duration: 1.5 });

  let ageMenu = document.getElementById("confirm-age")
  let age4 = gsap.timeline()

  function ageText(age) {
    switch (age) {
      case '17':
        age4.to('#age-1', {
          duration: 5,
          text: "No that can't be right... It's been so long since I was 17. Then why do I feel like this is the right answer?",
          ease: "none",
        })
        age4.to('#age-2', {
          duration: 2,
          text: "I'm so confused...I need a drink...",
          ease: "none",
        })
        age4.to('#to5', { opacity: 1, duration: 1.5 })
        break;

      case '18':
        age4.to('#age-1', {
          duration: 2,
          text: "No that doesn't make any sense...",
          ease: "none",
        })
        age4.to('#age-2', {
          duration: 2,
          text: "This isn't the right answer...",
          ease: "none",
        })
        break;

      case '19':
        age4.to('#age-1', {
          duration: 2,
          text: "No that doesn't make any sense...",
          ease: "none",
        })
        age4.to('#age-2', {
          duration: 2,
          text: "This isn't the right answer...",
          ease: "none",
        })
        break;

      case '20':
        age4.to('#age-1', {
          duration: 4,
          text: "This is my current age...but why do I feel like this isn't it?",
          ease: "none",
        })
        age4.to('#age-2', {
          duration: 2,
          text: "It doesn't make sense...",
          ease: "none",
        })
        break;

      default:
        break;
    }
  }

  if (ageMenu) {
    ageMenu.addEventListener('click', () => {
      let age = document.getElementById("age-menu").value;
      console.log(age)
      ageText(age)
    })
  }

  //page 5 animations
  let page5 = gsap.timeline()
  page5.to('#page5text', {
    duration: 4,
    text: "Looking into the fridge, there are 3 options for drinks. What should I drink?",
    ease: "none",
  })
  page5.to('#drink-wrapper', { opacity: 1, duration: 1.33 })

  //page 6 animations
  let six = document.getElementById('page6')
  let sixCount = 0
  let anime6 = gsap.timeline()
  anime6.to('#page6-1', {
    duration: 4,
    text: "As I sip on my soda, on the way back to my room, I start to feel strange. Like I'm in a strangers body. But this is my body...",
    ease: "none",
  })
  function sixText(num) {
    switch (num) {
      case 1:
        anime6.to('#page6-2', {
          duration: 10,
          text: "Seventeen...The pandemic started when I was that age. I turned eighteen that June. Graduated high school. Started college. All during lock down. All online. All within these four walls of my room. It was a lonely time but I got through it. Didn't I?",
          ease: "none",
        })
        break;

      case 2:
        anime6.to('#page6-3', {
          duration: 10,
          text: "But it wasn't just lonely wasn't it? It was stagnate. Everyday I would wake up, go to my desk, and do nothing but scroll social media. Some days I wouldn't even make it out of bed. I thought that was over but isn't it what I just did today?",
          ease: "none",
        })
        break;

      case 3:
        anime6.to('#page6-4', {
          duration: 7,
          text: "Sometimes it feels like I'm still seventeen. Still watching that shelter in place announcement. Still waiting for the day I finally grow up.",
          ease: "none",
        })
        break;

      case 4:
        anime6.to('#page6-5', {opacity:1, duration:1.5})
        break;
    
      default:
        break;
    }
  }
  function sixAdd() {
    sixCount+=1
    console.log(sixCount)
    sixText(sixCount)
  }
  if (six) {
    window.addEventListener('click', sixAdd)
  }

  //page 7 animations
  let line1 = SplitText.create("#page7_1", { type: "chars" });
  let line2 = SplitText.create("#page7_2", { type: "chars" });
  let line3 = SplitText.create("#page7_3", { type: "chars" });
  let line4 = SplitText.create("#page7_4", { type: "chars" });
  let line5 = SplitText.create("#page7_5", { type: "chars" });
  let line6 = SplitText.create("#page7_6", { type: "words" });

  let page7 = gsap.timeline()

  page7.from(line1.chars, {
    duration: 3, 
    y: 100,       
    autoAlpha: 0,
    stagger: 0.05 
  });
  page7.from(line2.chars, {
    duration: 3,
    x:100,
    autoAlpha: 0,
    stagger: 0.05,
    delay: 1 
  })
  page7.from(line3.chars, {
    duration: 2,
    x:150,
    y: 150,
    autoAlpha: 0,
    stagger: 0.05,
    delay: 1 
  })
  page7.from(line4.chars, {
    duration: 2,
    rotation: 360,
    x:200,
    y: -200,
    autoAlpha: 0,
    stagger: 0.05,
    delay: 1 
  })
  page7.from(line5.chars, {
    duration: 1,
    rotation: -90,
    x:-245,
    y: -135,
    autoAlpha: 0,
    stagger: 0.05,
    delay: 1 
  })
  page7.from(line6.words, {
    duration: 4,
    fontSize:0,
    autoAlpha: 0,
    stagger: 0.1,
  })
  

  //page 8 animations
  gsap.to('#page8anime', {top:400, duration: 3})

  //page 9 animations
  let page9 = gsap.timeline()
  page9.to('#page9list', {top:200, duration:1.5})
  page9.to('#page9text', {
    duration: 5,
    text: "I don't have all the answers to my problems at this moment...But I know that I have to start somewhere, so let's start with this.",
    ease: "none",
    delay: 1,
  })

  //page 10 animations
  let page10=gsap.timeline()
  let theEnd=SplitText.create("#the-end", { type: "chars" });

  page10.from(theEnd.chars, {
    duration: 2, 
    y: -500,       
    stagger: 0.15,
    ease: "bounce.out",
  })
  page10.to('#ending1', {
    top:200,
    left:350,
    duration:1.75,
    ease: "elastic.out(1,0.5)"
  })
  page10.to('#ending3', {
    top:300,
    left: 575,
    duration:1.75,
    ease: "elastic.out(1,0.5)"
  })
  page10.to('#ending2', {
    top:200,
    left: 850,
    duration:1.75,
    ease: "elastic.out(1,0.5)"
  })
  page10.to('#ending4', {
    top:300,
    left: 1050,
    duration:1.75,
    ease: "elastic.out(1,0.5)",
  })
  page10.to('#ending-text', {
    duration: 7,
    text: "While I get started on cleaning my room, wanna head back to the beginning? Or perhaps you want to take a look at the credits?",
    ease: "none",
  })
  page10.to('#ending-button', {
    opacity:1,
    duration:1.5
  })

});
//page 1 alerts
function page1Alerts(keyword) {
  switch (keyword) {
    case 'friends':
      alert("Trick task! I don't have friends! lol")
      break;

    case 'clean-room1':
      alert("I should...but there's so much to do...")
      break;

    case 'arts':
      alert("I could...but I have so many unfinished projects...I don't know where to start...")
      break;

    case 'games':
      alert("For some weird reason it's been hard to pick up a video game...strange...")
      break;

    case 'school':
      alert("I should...but I don't understand the work at all...and I'm scared to ask for help...")
      break;

    default:
      break;
  }
}

//page 3 alerts
function page3Alerts(keyword) {
  switch (keyword) {
    case 'bean':
      alert("we haven't gotten the refill for this chair so it's really uncomfortable to sit in...not this spot")
      break;

    case 'top':
      alert("this is my bed. i don't really feel like climbing up right now...not this spot")
      break;

    case 'bottom':
      alert("this is my sister's bed. i would sit there but she always has stuff on it...not this spot")
      break;

    default:
      break;
  }
}