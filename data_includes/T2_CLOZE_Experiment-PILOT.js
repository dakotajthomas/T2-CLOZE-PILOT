var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle(anyOf(startsWith("ms"), startsWith("mo"), startsWith("c"), startsWith("f"))))));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(not natural at all)", rightComment: "(very natural)"
    },
    "Question", {
        hasCorrect: false
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: false,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var practiceItemMessage = true;

var items = [


    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "CLOZE_Introduction-PILOT.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    
    ["sep", "Separator", { }],
    
//PRACTICE//
    ["practice", "Form", {html: 'This is the <input name="practice1" type="text" size="10" class="obligatory" />(<i>first/second/third</i>) practice item.'}],
    ["practice", "Form", {html: 'This is <input name="practice2.1" type="text" size="10" class="obligatory" />(<i>another/last</i>) <input name="practice2.2" type="text" size="10" class="obligatory" />(<i>practice/experimental</i>) item.'}], 
    ["practice", "Form", {html: 'This is the <input name="practice3.1" type="text" size="10" class="obligatory" />(<i>final/last/third</i>) <input name="practice3.2" type="text" size="10" class="obligatory" />(<i>practice/experimental</i>) item.'}],
    
    ["sep", "Separator", { }], 
    
  //Experimental Items//
  //Uncountable Substance//
    //rice//
    ["ms7-zs", "Form", {html: 'Can you believe that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>rice/rices</i>) is so expensive in this store?'}],
    ["ms7-ds", "Form", {html: 'She said <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>rice/rices</i>) that she had with her dinner was cold.'}], 
    //cinnamon//
    ["ms8-zs", "Form", {html: 'Would you like <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cinnamon/cinnamons</i>) on your toast?'}],
    ["ms8-ds", "Form", {html: 'She could not believe <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cinnamon/cinnamons</i>) had been put in the wrong cabinet.'}], 
    //ice//
    ["ms9-zs", "Form", {html: 'They said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>ice/ices</i>) was covering the road and was not safe to drive on.'}],
    ["ms9-ds", "Form", {html: 'It would be best if <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>ice/ices</i>) was not going to melt during the trip.'}], 
  //Uncountable Object//
    //fruit//
    ["mo7-zs", "Form", {html: 'They said <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>fruit/fruits</i>) has a lot of sugar but little fat.'}],
    ["mo7-ds", "Form", {html: 'they were looking for <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>fruit/fruits</i>) that had been purchased at the market earlier in the day.'}], 
    //money//
    ["mo8-zs", "Form", {html: 'Did you get <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>money/monies</i>) from your mother for your birthday?'}],
    ["mo8-ds", "Form", {html: 'I thought giving you <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>money/monies</i>) from earlier was a good idea, but I was wrong.'}], 
    //clothing//
    ["mo9-zs", "Form", {html: 'Chad said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>clothing/clothings</i>) is only worn once before donating it.'}],
    ["mo9-ds", "Form", {html: 'They designed <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>clothing/clothings</i>) so that it would not get so warm during the summer.'}], 
  //Countable [+prototypical]//
    //girl//
    ["c7-zp", "Form", {html: 'There are many <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>girl/girls</i>) in the class that are not shy.'}],
    ["c7-i",  "Form", {html: 'Tamar said there was <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>girl/girls</i>) sitting on the steps of the house.'}],
    ["c7-ds", "Form", {html: 'Debbie said <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>girl/girls</i>) that she saw earlier looked like she was hungry.'}], 
    ["c7-dp", "Form", {html: 'Do you think <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>girl/girls</i>) you are friends with would like to come over for dinner?'}],
    //cat//
    ["c8-zp", "Form", {html: 'Do you have <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cat/cats</i>) that like to eat soft food only?'}],
    ["c8-i",  "Form", {html: 'Would you be happy with <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cat/cats</i>) that does not eat often?'}],
    ["c8-ds", "Form", {html: 'He said that he saw <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cat/cats</i>) in the other room sitting on the couch.'}], 
    ["c8-dp", "Form", {html: 'Have you ever seen <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cat/cats</i>) act like that?'}],
    //computer//
    ["c9-zp", "Form", {html: 'I was wondering if <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>computer/computers</i>) had been distracting in the classroom.'}],
    ["c9-i",  "Form", {html: 'Tanner had <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>computer/computers</i>) that he dropped on the floor.'}],
    ["c9-ds", "Form", {html: 'He does not like to use <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>computer/computers</i>) that we provide for him.'}], 
    ["c9-dp", "Form", {html: 'They said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>computer/computers</i>) cost the school nearly $1,000.'}],
  //Countable [-prototypical]//
    //explosion//
    ["cnp7-zp", "Form", {html: 'The government said <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>explosion/explosions</i>) have been happening regularly on Saturdays.'}],
    ["cnp7-i",  "Form", {html: 'They said <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>explosion/explosions</i>) shook the ground last night and caused an earthquake.'}],
    ["cnp7-ds", "Form", {html: 'What do you think of <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>explosion/explosions</i>) that happened yesterday?'}], 
    ["cnp7-dp", "Form", {html: 'The government requires us to report <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>explosion/explosions</i>) that happen in the morning.'}],
    //NOUN//
    ["cnp8-zp", "Form", {html: 'START <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>NOUN/NOUNS</i>) END.'}],
    ["cnp8-i",  "Form", {html: 'START <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>NOUN/NOUNS</i>) END.'}],
    ["cnp8-ds", "Form", {html: 'START <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>NOUN/NOUNS</i>) END.'}], 
    ["cnp8-dp", "Form", {html: 'START <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>NOUN/NOUNS</i>) END.'}],
    //NOUN//
    ["cnp9-zp", "Form", {html: 'START <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>NOUN/NOUNS</i>) END.'}],
    ["cnp9-i",  "Form", {html: 'START <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>NOUN/NOUNS</i>) END.'}],
    ["cnp9-ds", "Form", {html: 'START <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>NOUN/NOUNS</i>) END.'}], 
    ["cnp9-dp", "Form", {html: 'START <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>NOUN/NOUNS</i>) END.'}],
  //Flexible//
    //hamburger//
    ["f7-zs", "Form", {html: 'Animals prefer to eat <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>hamburger/hamburgers</i>) instead of vegetables sometimes.'}],
    ["f7-zp", "Form", {html: 'Debbie does not like <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>hamburger/hamburgers</i>) on the weekends.'}],
    ["f7-i",  "Form", {html: 'Would you consider <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>hamburger/hamburgers</i>) to be your sandwich of choice?'}],
    ["f7-ds", "Form", {html: 'Next time we should buy <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>hamburger/hamburgers</i>) that is from local farms.'}], 
    ["f7-dp", "Form", {html: 'Do you like  <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>hamburger/hamburgers</i>) that we made for the cookout?'}],
    //glass//
    ["f8-zs", "Form", {html: 'Tanner said that there was <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>glass/glasses</i>) on the ground and he accidentally stepped on it.'}],
    ["f8-zp", "Form", {html: 'I did not know that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>glass/glasses</i>) were that expensive.'}],
    ["f8-i",  "Form", {html: 'He was asking for <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>glass/glasses</i>) that he could put some soup in.'}],
    ["f8-ds", "Form", {html: 'Skye said <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>glass/glasses</i>) fell of the table when someone bumped into it.'}], 
    ["f8-dp", "Form", {html: 'I think <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>glass/glasses</i>) that we bought from the discount store are very nice.'}],
    //hair//
    ["f9-zs", "Form", {html: 'There should not be <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>hair/hairs</i>) in the food.'}],
    ["f9-zp", "Form", {html: 'Skye said there were <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>hair/hairs</i>) all over the blanket.'}],
    ["f9-i",  "Form", {html: 'Debbie said there was <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>hair/hairs</i>) in the cookie that she was eating for dessert.'}],
    ["f9-ds", "Form", {html: 'Tanner looked at <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>hair/hairs</i>) and thought that it looked longer than usual.'}], 
    ["f9-dp", "Form", {html: 'Chad said <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>hair/hairs</i>) that were on the table were from the pets that were here.'}],
];