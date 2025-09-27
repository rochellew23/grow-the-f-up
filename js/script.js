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
  let page4=gsap.timeline()
  page4.to('#page4-1',{
    duration: 2,
    text: "Today was meant to be a productive day :( What happened?",
    ease: "none",
  })
  page4.to('#page4-2',{
    duration: 3,
    text: "Wait a minute...what day even is today? What year is it?",
    ease: "none",
  })
  page4.to('#page4-3',{
    duration: 3.5,
    text: "How old am I?",
    ease: "none",
  })
  page4.to('#age-select', {opacity:1, duration:1.5});

  let ageMenu = document.getElementById("confirm-age")
  let age4=gsap.timeline()

  function ageText(age) {
    switch (age) {
      case '17':
        age4.to('#age-1',{
          duration: 5,
          text: "No that can't be right... It's been so long since I was 17. Then why do I feel like this is the right answer?",
          ease: "none",
        })
        age4.to('#age-2',{
          duration: 2,
          text: "I'm so confused...I need a drink...",
          ease: "none",
        })
        age4.to('#to5', {opacity:1, duration:1.5})
        break;

      case '18':
        age4.to('#age-1',{
          duration: 2,
          text: "No that doesn't make any sense...",
          ease: "none",
        })
        age4.to('#age-2',{
          duration: 2,
          text: "This isn't the right answer...",
          ease: "none",
        })
        break;

      case '19':
        age4.to('#age-1',{
          duration: 2,
          text: "No that doesn't make any sense...",
          ease: "none",
        })
        age4.to('#age-2',{
          duration: 2,
          text: "This isn't the right answer...",
          ease: "none",
        })
        break;

      case '20':
        age4.to('#age-1',{
          duration: 4,
          text: "This is my current age...but why do I feel like this isn't it?",
          ease: "none",
        })
        age4.to('#age-2',{
          duration: 2,
          text: "It doesn't make sense...",
          ease: "none",
        })
        break;
    
      default:
        break;
    }
  }

  ageMenu.addEventListener('click', ()=>{
    let age = document.getElementById("age-menu").value;
    console.log(age)
    ageText(age)
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