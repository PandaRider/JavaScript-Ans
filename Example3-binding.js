// Watch this:
// https://www.youtube.com/watch?v=GhbhD1HR5vk

let dog = {
  sound: "bark",
  talk: function() {
    console.log(this.sound)
  }
}

dog.talk();
let talkFunction = dog.talk
talkFunction()

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

dog.talk();
let talkFunction = function() {
  console.log(this.sound)
}
talkFunction()

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let talkFunction = dog.talk;
let boundFunction = talkFunction.bind(dog)
boundFunction()
