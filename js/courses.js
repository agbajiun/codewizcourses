var courses = [
  {
    "id": 6,
    "courses":
      {
        "coding": ["Tynker"],
        "gaming": null,
        "robotics": ["WeDO"],
        "electronics": null,
        "competitions": ["FLL Jr"]
      }
  },
  {
    "id": 7,
    "courses":
      {
        "coding": ["Tynker", "Android"],
        "gaming": null,
        "robotics": ["WeDO"],
        "electronics": ["Microbits"],
        "competitions": ["FLL Jr"]
      }
  },
  {
    "id": 8,
    "courses":
      {
        "coding": ["Tynker", "Codesters", "Android"],
        "gaming": ["Minecraft"],
        "robotics": ["WeDO"],
        "electronics": ["Microbits"],
        "competitions": ["FLL Jr"]
      }
  },
  {
    "id": 9,
    "courses":
      {
        "coding": ["Codesters", "Codecombat", "Android"],
        "gaming": ["Minecraft"],
        "robotics": ["Mindstorms"],
        "electronics": ["Microbits"],
        "competitions": ["FLL"]
      }
  },
  {
    "id": 10,
    "courses":
      {
        "coding": ["Codesters", "Codecombat", "Arcade", "HTML/CSS", "Python", "Animations"],
        "gaming": ["Roblox", "Unity"],
        "robotics": ["Mindstorms"],
        "electronics": ["Arduino"],
        "competitions": ["FLL", "Technovation"]
      }
  },
  {
    "id": 11,
    "courses":
      {
        "coding": ["Codesters", "Codecombat", "HTML/CSS", "Python", "Animations"],
        "gaming": ["Roblox", "Unity"],
        "robotics": ["Mindstorms"],
        "electronics": ["Arduino"],
        "competitions": ["FLL", "Technovation"]
      }
  },
  {
    "id": 12,
    "courses":
      {
        "coding": ["Codecombat", "Javascript", "Java", "Greenfoot", "Animations"],
        "gaming": ["Unity"],
        "robotics": ["Mindstorms"],
        "electronics": ["Arduino"],
        "competitions": ["FLL", "Technovation"]
      }
  },
  {
    "id": 13,
    "courses":
      {
        "coding": ["Python", "Java", "Greenfoot", "HTML/CSS", "Animations"],
        "gaming": ["Unity"],
        "robotics": ["Mindstorms"],
        "electronics": ["Arduino"],
        "competitions": ["FLL", "Technovation"]
      }
  },
  {
    "id": 14,
    "courses":
      {
        "coding": ["Python", "Java", "Greenfoot", "HTML/CSS", "Animations"],
        "gaming": ["Unity"],
        "robotics": ["Mindstorms"],
        "electronics": null,
        "competitions": ["FLL", "Technovation"]
      }
  },
  {
    "id": 15,
    "courses":
      {
        "coding": ["Python", "Java", "Greenfoot", "HTML/CSS", "Animations"],
        "gaming": ["Unity"],
        "robotics": null,
        "electronics": null,
        "competitions": ["Technovation"]
      }
  },
  {
    "id": 16,
    "courses":
      {
        "coding": ["Python", "Java", "Greenfoot", "HTML/CSS", "Animations"],
        "gaming": ["Unity"],
        "robotics": null,
        "electronics": null,
        "competitions": ["Technovation"]
      }
  },
  {
    "id": 17,
    "courses":
      {
        "coding": ["Python", "Java", "Greenfoot", "HTML/CSS", "Animations"],
        "gaming": ["Unity"],
        "robotics": null,
        "electronics": null,
        "competitions": ["Technovation"]
      }
  }
]

var codeDiv = document.getElementById("coding");
var gameDiv = document.getElementById("gaming");
var roboticsDiv = document.getElementById("robotics");
// var electronicsDiv = document.getElementById("electronics");
var competitionsDiv = document.getElementById("competitions");

var selectCode = document.getElementById("selectcode");
var selectGame = document.getElementById("select-game");
var selectRobotics = document.getElementById("select-robotics");
// var selectElectronics = document.getElementById("select-electronics");
var selectCompetitions = document.getElementById("select-competitions");

var firstTime = false;

$("#start").click(function () {
   var selectedAge = $("#select-age option:selected").val();
   //getCourses(selectedAge);
   console.log("selected age: " + selectedAge);

   if(firstTime){
    clearOptions();
   }
   firstTime = true;
   var courseId = parseInt(selectedAge);
    // iterate over each element in the array
    for (var i = 0; i < courses.length; i++){
    // look for the entry with a matching `code` value
      if (courses[i].id == courseId){
         if(courses[i].courses.coding !== null){
          codeDiv.setAttribute("class", "circle blue animated tada");
          var val = courses[i].courses.coding;
          for(var j=0; j < val.length; j++){ 
            var item = val[j]; 
            $("#coding select").append("<option value="+item+">"+item+"</option>")
          } 
         }else{codeDiv.setAttribute("class", "circle blue hidden");}
         if(courses[i].courses.gaming !== null){
          gameDiv.setAttribute("class", "circle green animated tada");
          var val = courses[i].courses.gaming;
          for(var k=0; k < val.length; k++){ 
            var item = val[k]; 
            $("#gaming select").append("<option value="+item+">"+item+"</option>")
          } 
         }else{gameDiv.setAttribute("class", "circle green hidden");}
         if(courses[i].courses.robotics !== null){
          roboticsDiv.setAttribute("class", "circle orange animated tada");
          var val = courses[i].courses.robotics;
          for(var l=0; l < val.length; l++){ 
            var item = val[l]; 
            $("#robotics select").append("<option value="+item+">"+item+"</option>")
          }
         }else{roboticsDiv.setAttribute("class", "circle orange hidden");}
         // if(courses[i].courses.electronics !== null){
         //  electronicsDiv.setAttribute("class", "circle purple animated tada");
         //  var val = courses[i].courses.electronics;
         //  for(var m=0; m < val.length; m++){ 
         //    var item = val[m]; 
         //    $("#electronics select").append("<option value="+item+">"+item+"</option>")
         //  }
         // }
         // else{electronicsDiv.setAttribute("class", "circle purple hidden");}
         if(courses[i].courses.competitions !== null){
          competitionsDiv.setAttribute("class", "circle red animated tada");
          var val = courses[i].courses.competitions;
          for(var n=0; n < val.length; n++){ 
            var item = val[n]; 
            $("#competitions select").append("<option value="+item+">"+item+"</option>")
          }
         }
         else{competitionsDiv.setAttribute("class", "circle red hidden");}
         return;
      }
    }
});

$("#coding-start").click(function () {
   var selectedGame = $("#selectcoding option:selected").val();
   showDescription(selectedGame);
   //console.log(selectedGame);
});

$("#gaming-start").click(function () {
   var selectedGame = $("#select-gaming option:selected").val();
   showDescription(selectedGame);
   //console.log(selectedGame);
});

$("#robotics-start").click(function () {
   var selectedGame = $("#select-robotics option:selected").val();
   showDescription(selectedGame);
   //console.log(selectedGame);
});

$("#electronics-start").click(function () {
   var selectedGame = $("#select-electronics option:selected").val();
   showDescription(selectedGame);
   //console.log(selectedGame);
});

$("#competition-start").click(function () {
   var selectedGame = $("#select-competitions option:selected").val();
   showDescription(selectedGame);
   //console.log(selectedGame);
});

function showDescription(course){
  var courseToLower = course.toLowerCase();
  var courseDesc = courseToLower+"Desc";
  var desc = "";
  switch (courseDesc) {
    case "pythonDesc":
      desc = "Python is one of the world’s most popular programming language! Students acquire critical problem solving and computational thinking skills. Python is a great bridge between block based coding and more advanced courses like Java and C#. Students will build the foundation by learning how to solve basic algorithmic problems using Python." + 
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case "javaDesc":
      desc = "Students learn the basics of Java through our interactive lessons and mini projects. Once kids are comfortable with the basics of Java, the kids are able to program actors in games that they create using java. Kids also have the option to create text-based games such as “tic tac toe” using object oriented principles that they have learned. This platform is for all experience levels, whether you have coding experience or not. Our coaches are here to walk students through their personalized learning at a pace that works for them! Our Java curriculum covers all the basics from sequencing, loops, conditionals, functions to advanced topics such as Object Oriented Programming. This course prepares kids for the AP Computer Science Course taken at the high school level" +
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case "greenfootDesc":
      desc = "Greenfoot is an integrated development environment using Java or Stride designed primarily for educational purposes at the high school and undergraduate level." +
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case "html/cssDesc":
      desc = "Kids will learn to code awesome websites in HTML and CSS. HTML and CSS are the building blocks of the web. Kids will learn to create their ﬁrst fully styled landing page, complete with multi-column layouts, modern navigation elements, and mobile responsive design. Kids will learn to use JavaScript to add dynamic functionality and interactivity to webpages!" +
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case "animationsDesc":
      desc = "A simulation of movement created by displaying a series of pictures, or frames. Cartoons on television is one example of animation." +
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case "unityDesc":
      desc = "Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc.'s Worldwide Developers Conference as a Mac OS X-exclusive game engine." +
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case  "technovationDesc":
      desc = "Equips young women (ages 10-18) to become tech entrepreneurs and leaders. With the support of volunteer mentors, girls work in teams to code mobile apps that address real-world problems." +
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case "mindstormsDesc":
      desc = "LEGO® MINDSTORMS® Education EV3 is a hands-on, cross-curricular class that engages students by teaching them to design, build and program their robots while helping them develop essential skills such as creativity, critical thinking, collaboration, and communication. Programming is done by dragging and dropping icons into a line to form commands allowing students to build simple programs, and then easily and intuitively build on their skills until they are developing complex algorithms. Kids will learn to use the Gyro, Ultrasonic, Color and Touch sensors in their programs while learning the building blocks of programming such as sequencing, loops, conditionals, events and Object Oriented Programming Principles." +
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case "fllDesc":
      desc = "The basis of FLL is a robotics tournament in a cheerful atmosphere, where kids and youngsters need to solve a tricky “mission” with the help of a robot. The kids are researching a given topic within a team, they are planning programming and testing an autonomous robot to solve the mission." + 
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case "arduinoDesc":
      desc = "Arduino is an open-source electronics platform based on easy-to-use hardware and software." + 
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case "tynkerDesc":
      desc = "Coding can be for kids of all ages! Even beginners who have no prior coding experience before are able to jump in and learn too! Kids learn to code using visual code blocks that represent real programming concepts that scale from easy to advanced. They learn about sequencing, loops, inﬁnite loops, conditionals, events and more. With our Drag and Drop Platform, kids learn to code by creating their own games and animations!" + 
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case "wedoDesc":
      desc = "Combining hands-on LEGO® bricks with easy-to-use coding software and inspiring STEM projects, LEGO Education WeDo 2.0 enables kids to explore the building blocks of coding. From simple drag and drop interfaces to developing more complex algorithms, kids can explore the world around them and bring their ideas to life with code. LEGO WeDo enables students to develop computational thinking skills and transform them directly into programming solutions that interact with the real world. Kids will learn to use the motion and tilt sensors. As they advance in the course, they will learn to create simple animations on the computers that they control with their robots." +
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case  "flljrDesc":
      desc = "FIRST LEGO League Jr. is designed to introduce science, technology, engineering and math (STEM) concepts to kids ages 6 to 10 while exciting them through a brand they know and love − LEGO®" + 
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case "androidDesc":
      desc = "Android is a mobile operating system developed by Google. It is used by several smartphones and tablets. Examples include the Sony Xperia, the Samsung Galaxy, and the Google Nexus One." + 
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case "microbitsDesc":
      desc = "It is a pocket-sized computer 70 times smaller and 18 times faster than the original BBC Micro computers used in schools." + 
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case "codestersDesc":
      desc = "Our visual python platform allows for students to create interactive games and animations using drag and drop Python. The great thing about this platform is kids can drag the python block, see it turn to real code when it is dropped in the editor and then edit it! Kids don’t need to be bogged down by typing out every line of code. They can focus on bringing their own ideas to life with python. Our curriculum teaches kids basic to advanced sequencing, loops, conditionals, events, functions and more. They also start to learn the basics of Python syntax. It is perfect preparation for programming in full text-based Python. Our coaches are engaged with students keeping their interests in mind, and are able to help them through their learning experience! Our visual python platform allows for students to create interactive games and animations using drag and drop Python. The great thing about this platform is kids can drag the python block, see it turn to real code when it is dropped in the editor and then edit it! Kids don’t need to be bogged down by typing out every line of code. They can focus on bringing their own ideas to life with python. Our curriculum teaches kids basic to advanced sequencing, loops, conditionals, events, functions and more. They also start to learn the basics of Python syntax. It is perfect preparation for programming in full text-based Python. Our coaches are engaged with students keeping their interests in mind, and are able to help them through their learning experience!" +
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case "minecraftDesc":
      desc = "Minecraft is a Lego style adventure game which has massively increased in popularity since it was released two years ago." + 
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case  "codecombatDesc":
      desc = "CodeCombat is an educational video game for learning software programming concepts and languages. Students learn to type coding languages like JavaScript, Python, HTML and CoffeeScript, as well as learning the fundamentals of computer science." + 
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
      break;
    case  "robloxDesc":
      desc = "Roblox is a game creation platform which allows players to create their own games using its proprietary engine, Roblox Studio. Games are coded under an Object Oriented Programming system utilizing the programming language Lua to manipulate the environment of the game. This course is great for" +
      "<br><br> <h5>What you will learn:</h5> <ul>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You will be smart!</li>"+
      "<li>You should sign up!</li>"+
      "</ul>";
  }
  $('#myModal').modal('show');
  document.getElementById("description-header").innerHTML = course;
  document.getElementById("description").innerHTML = desc;
  console.log(desc);
}

function clearOptions(){
  document.getElementById('selectcoding').options.length = 0;
  document.getElementById('select-gaming').options.length = 0;
  document.getElementById('select-robotics').options.length = 0;
  document.getElementById('select-competitions').options.length = 0;
}
