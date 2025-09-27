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

  listButton1.addEventListener("click", listAppear1);

  let click = 0;
  let listItems = document.querySelectorAll('.list-items');

  function addClicks() {
    click += 1;
    console.log(click)
    doomScroll();
  }

  function doomScroll() {
    if (click == 5) {
      console.log('5 clicks')
      gsap.fromTo('#doomscroll', { opacity: 0 }, { opacity: 1, duration: 1.33 });
    }
  }

  listItems.forEach(item => {
    item.addEventListener('click', addClicks)
  });

});

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
        alert("The assignments aren't due for a couple days...I'm sure I can start this later...")
        break;

      default:
        break;
    }
  }