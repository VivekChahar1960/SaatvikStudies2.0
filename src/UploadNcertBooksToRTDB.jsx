import { useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";
// 👇 Import your all_chapters array here


function UploadNcertBooksToRTDB() {
  const db = getDatabase();
  let all_chapters=[
    {
        class:"2",
        name:"English",
        chapter:"01",
        chaptername:"My Bicycle",
        //:class2engch1
    },{
        class:"2",
        name:"English",
        chapter:"02",
        chaptername:"Picture Reading",
        //:class2engch2
    },{
        class:"2",
        name:"English",
        chapter:"03",
        chaptername:"It is Fun",
        //:class2engch3
    },{
        class:"2",
        name:"English",
        chapter:"04",
        chaptername:"Seeing without Seeing",
        //:class2engch4
    },{
        class:"2",
        name:"English",
        chapter:"05",
        chaptername:"Come Back Soon",
        //:class2engch5
    },{
        class:"2",
        name:"English",
        chapter:"06",
        chaptername:"Between Home and School",
        //:class2engch6
    },{
        class:"2",
        name:"English",
        chapter:"07",
        chaptername:"This is my Town",
        //:class2engch7
    },{
        class:"2",
        name:"English",
        chapter:"08",
        chaptername:"A Show of Clouds",
        //:class2engch8
    },{
        class:"2",
        name:"English",
        chapter:"09",
        chaptername:"My name",
        //:class2engch9
    },{
        class:"2",
        name:"English",
        chapter:"10",
        chaptername:"THe Crow",
        //:class2engch10
    },{
        class:"2",
        name:"English",
        chapter:"11",
        chaptername:"The Smart Monkey",
        //:class2engch11
    },{
        class:"2",
        name:"English",
        chapter:"12",
        chaptername:"Little Drops of Water",
        //:class2engch12
    },{
        class:"2",
        name:"English",
        chapter:"13",
        chaptername:"We are all Indians",
        //:class2engch13
    },{
        class:"2",
        name:"Maths",
        chapter:"01",
        chaptername:"A Day at the Beach",
        //:class2mathsch1
    },{
        class:"2",
        name:"Maths",
        chapter:"02",
        chaptername:"Shapes Around Us",
        //:class2mathsch2
    },{
        class:"2",
        name:"Maths",
        chapter:"03",
        chaptername:"Fun with Numbers",
        //:class2mathsch3
    },{
        class:"2",
        name:"Maths",
        chapter:"04",
        chaptername:"Shadow Story",
        //:class2mathsch4
    },{
        class:"2",
        name:"Maths",
        chapter:"05",
        chaptername:"Playing with Lines",
        //:class2mathsch5
    },{
        class:"2",
        name:"Maths",
        chapter:"06",
        chaptername:"Decoration for Festival",
        //:class2mathsch6
    },{
        class:"2",
        name:"Maths",
        chapter:"07",
        chaptername:"Rani’s Gift",
        //:class2mathsch7
    },{
        class:"2",
        name:"Maths",
        chapter:"08",
        chaptername:"Grouping and Sharing",
        //:class2mathsch8
    },{
        class:"2",
        name:"Maths",
        chapter:"09",
        chaptername:"Which Season is it?",
        //:class2mathsch9
    },{
        class:"2",
        name:"Maths",
        chapter:"10",
        chaptername:"Fun at the Fair",
        //:class2mathsch10
    },{
        class:"2",
        name:"Maths",
        chapter:"11",
        chaptername:"Data Handling",
        //:class2mathsch11
    },{
        class:"2",
        name:"Hindi",
        chapter:"01",
        chaptername:"नीम की दादी",
        //:class2hindich1
    },{
        class:"2",
        name:"Hindi",
        chapter:"02",
        chaptername:"घर",
        //:class2hindich2
    },{
        class:"2",
        name:"Hindi",
        chapter:"03",
        chaptername:"माला की चाँदी की पायल",
        //:class2hindich3
    },{
        class:"2",
        name:"Hindi",
        chapter:"04",
        chaptername:"माँ",
        //:class2hindich4
    },{
        class:"2",
        name:"Hindi",
        chapter:"05",
        chaptername:"थाथू और मैं",
        //:class2hindich5
    },{
        class:"2",
        name:"Hindi",
        chapter:"06",
        chaptername:"चींटा",
        //:class2hindich6
    },{
        class:"2",
        name:"Hindi",
        chapter:"07",
        chaptername:"टिल्लू जी",
        //:class2hindich7
    },{
        class:"2",
        name:"Hindi",
        chapter:"08",
        chaptername:"तीन दोस्त",
        //:class2hindich8
    },{
        class:"2",
        name:"Hindi",
        chapter:"09",
        chaptername:"दुनिया रंग-बिरंगी",
        //:class2hindich9
    },{
        class:"2",
        name:"Hindi",
        chapter:"10",
        chaptername:"कौन",
        //:class2hindich10
    },{
        class:"2",
        name:"Hindi",
        chapter:"11",
        chaptername:"बैंगनी जोजो",
        //:class2hindich11
    },{
        class:"2",
        name:"Hindi",
        chapter:"12",
        chaptername:"तोसिया का सपना",
        //:class2hindich12
    },{
        class:"2",
        name:"Hindi",
        chapter:"13",
        chaptername:"तालाब",
        //:class2hindich13
    },{
        class:"2",
        name:"Hindi",
        chapter:"14",
        chaptername:"बीज",
        //:class2hindich14
    },{
        class:"2",
        name:"Hindi",
        chapter:"15",
        chaptername:"किसान",
        //:class2hindich15
    },{
        class:"2",
        name:"Hindi",
        chapter:"16",
        chaptername:"मूली",
        //:class2hindich16
    },{
        class:"2",
        name:"Hindi",
        chapter:"17",
        chaptername:"बरसात और मेंढक",
        //:class2hindich17
    },{
        class:"2",
        name:"Hindi",
        chapter:"18",
        chaptername:"शेर और चूहे की दोस्ती",
        //:class2hindich18
    },{
        class:"2",
        name:"Hindi",
        chapter:"19",
        chaptername:"आउट",
        //:class2hindich19
    },{
        class:"2",
        name:"Hindi",
        chapter:"20",
        chaptername:"छुप-छुपाई",
        //:class2hindich20
    },{
        class:"2",
        name:"Hindi",
        chapter:"21",
        chaptername:"हाथी साइकिल चला रहा था",
        //:class2hindich21
    },{
        class:"2",
        name:"Hindi",
        chapter:"22",
        chaptername:"चार दिशाएँ",
        //:class2hindich22
    },{
        class:"2",
        name:"Hindi",
        chapter:"23",
        chaptername:"चंदा मामा",
        //:class2hindich23
    },{
        class:"2",
        name:"Hindi",
        chapter:"24",
        chaptername:"गिरे ताल में चंदा मामा",
        //:class2hindich24
    },{
        class:"2",
        name:"Hindi",
        chapter:"25",
        chaptername:"सबसे बड़ा छाता",
        //:class2hindich25
    },{
        class:"2",
        name:"Hindi",
        chapter:"26",
        chaptername:"बादल",
        //:class2hindich26
    },{
        class:"3",
        name:"Hindi",
        chapter:"01",
        chaptername:"सीखो",
        //:class3hindich1
    },{
        class:"3",
        name:"Hindi",
        chapter:"02",
        chaptername:"चींटी",
        //:class3hindich2
    },{
        class:"3",
        name:"Hindi",
        chapter:"03",
        chaptername:"कितने पैर?",
        //:class3hindich3
    },{
        class:"3",
        name:"Hindi",
        chapter:"04",
        chaptername:"हमारी चिड़िया रानी!",
        //:class3hindich4
    },{
        class:"3",
        name:"Hindi",
        chapter:"05",
        chaptername:"आम का पेड़",
        //:class3hindich5
    },{
        class:"3",
        name:"Hindi",
        chapter:"06",
        chaptername:"बीरबल की खिचड़ी",
        //:class3hindich6
    },{
        class:"3",
        name:"Hindi",
        chapter:"07",
        chaptername:"मित्र को पत्र",
        //:class3hindich7
    },{
        class:"3",
        name:"Hindi",
        chapter:"08",
        chaptername:"चतुर गीदड़",
        //:class3hindich8
    },{
        class:"3",
        name:"Hindi",
        chapter:"09",
        chaptername:"प्रकृति पर्व फूलदेई",
        //:class3hindich9
    },{
        class:"3",
        name:"Hindi",
        chapter:"10",
        chaptername:"रस्साकशी",
        //:class3hindich10
    },{
        class:"3",
        name:"Hindi",
        chapter:"11",
        chaptername:"एक जादुई पिटारा",
        //:class3hindich11
    },{
        class:"3",
        name:"Hindi",
        chapter:"12",
        chaptername:"अपना-अपना काम",
        //:class3hindich12
    },{
        class:"3",
        name:"Hindi",
        chapter:"13",
        chaptername:" पेड़ों की अम्मा ‘चिभक्का’ ",
        //:class3hindich13
    },{
        class:"3",
        name:"Hindi",
        chapter:"14",
        chaptername:"किसान की होशियारी",
        //:class3hindich14
    },{
        class:"3",
        name:"Hindi",
        chapter:"15",
        chaptername:"भारत",
        //:class3hindich15
    },{
        class:"3",
        name:"Hindi",
        chapter:"16",
        chaptername:"चंद्रयान (संवाद)",
        //:class3hindich16
    },{
        class:"3",
        name:"Hindi",
        chapter:"17",
        chaptername:"बोलने वाली माँद ",
        //:class3hindich17
    },{
        class:"3",
        name:"Hindi",
        chapter:"18",
        chaptername:"हम अनेक किंतु एक",
        //:class3hindich18
    },{
        class:"3",
        name:"English",
        chapter:"01",
        chaptername:"Colors",
        //:class3engch1
    },{
        class:"3",
        name:"English",
        chapter:"02",
        chaptername:"Badal and Moti",
        //:class3engch2
    },{
        class:"3",
        name:"English",
        chapter:"03",
        chaptername:"Best Friends",
        //:class3engch3
    },{
        class:"3",
        name:"English",
        chapter:"04",
        chaptername:"Out in the Garden",
        //:class3engch4
    },{
        class:"3",
        name:"English",
        chapter:"05",
        chaptername:"Talking Toys",
        //:class3engch5
    },{
        class:"3",
        name:"English",
        chapter:"06",
        chaptername:"Papers Boat",
        //:class3engch6
    },{
        class:"3",
        name:"English",
        chapter:"07",
        chaptername:"The Big Ladooo",
        //:class3engch7
    },{
        class:"3",
        name:"English",
        chapter:"08",
        chaptername:"Thank God",
        //:class3engch8
    },{
        class:"3",
        name:"English",
        chapter:"09",
        chaptername:"Madhu's Wish",
        //:class3engch9
    },{
        class:"3",
        name:"English",
        chapter:"10",
        chaptername:"Night",
        //:class3engch10
    },{
        class:"3",
        name:"English",
        chapter:"11",
        chaptername:"Chanda mama counts the Stars",
        //:class3engch11
    },{
        class:"3",
        name:"English",
        chapter:"12",
        chaptername:"Chandrayan",
        //:class3engch12
    },{
        class:"3",
        name:"Maths",
        chapter:"01",
        chaptername:"What is a Name",
        //:class3mathsch1
    },{
        class:"3",
        name:"Maths",
        chapter:"02",
        chaptername:"Toy Joy",
        //:class3mathsch2
    },{
        class:"3",
        name:"Maths",
        chapter:"03",
        chaptername:"Double Century",
        //:class3mathsch3
    },{
        class:"3",
        name:"Maths",
        chapter:"04",
        chaptername:"Vacation with My Nani Maa ",
        //:class3mathsch4
    },{
        class:"3",
        name:"Maths",
        chapter:"05",
        chaptername:"Fun with Shapes",
        //:class3mathsch5
    },{
        class:"3",
        name:"Maths",
        chapter:"06",
        chaptername:"House of Hundreds",
        //:class3mathsch6
    },{
        class:"3",
        name:"Maths",
        chapter:"07",
        chaptername:"Raksha Bandhan",
        //:class3mathsch7
    },{
        class:"3",
        name:"Maths",
        chapter:"08",
        chaptername:"Fair Share ",
        //:class3mathsch8
    },{
        class:"3",
        name:"Maths",
        chapter:"09",
        chaptername:"House of Hundreds - II ",
        //:class3mathsch9
    },{
        class:"3",
        name:"Maths",
        chapter:"10",
        chaptername:"Fun at Class Party!",
        //:class3mathsch10
    },{
        class:"3",
        name:"Maths",
        chapter:"11",
        chaptername:"Filling and Lifting",
        //:class3mathsch11
    },{
        class:"3",
        name:"Maths",
        chapter:"12",
        chaptername:"Give and Take",
        //:class3mathsch12
    },{
        class:"3",
        name:"Maths",
        chapter:"13",
        chaptername:"Time Goes On",
        //:class3mathsch13
    },{
        class:"3",
        name:"Maths",
        chapter:"14",
        chaptername:"The Surajkund Fair",
        //:class3mathsch14
    },{
        class:"4",
        name:"Maths",
        chapter:"01",
        chaptername:"Building with Bricks",
        //:class4mathsch1
    },{
        class:"4",
        name:"Maths",
        chapter:"02",
        chaptername:"Long and Short",
        //:class4mathsch2
    },{
        class:"4",
        name:"Maths",
        chapter:"03",
        chaptername:"A Trip to Bhopal",
        //:class4mathsch3
    },{
        class:"4",
        name:"Maths",
        chapter:"04",
        chaptername:"Tick-tick-tick",
        //:class4mathsch4
    },{
        class:"4",
        name:"Maths",
        chapter:"05",
        chaptername:"The Way the World Looks",
        //:class4mathsch5
    },{
        class:"4",
        name:"Maths",
        chapter:"06",
        chaptername:"The Junk Seller",
        //:class4mathsch6
    },{
        class:"4",
        name:"Maths",
        chapter:"07",
        chaptername:"Mugs and Mugs",
        //:class4mathsch7
    },{
        class:"4",
        name:"Maths",
        chapter:"08",
        chaptername:"Carts and Wheels",
        //:class4mathsch8
    },{
        class:"4",
        name:"Maths",
        chapter:"09",
        chaptername:"Halves and Quarters",
        //:class4mathsch9
    },{
        class:"4",
        name:"Maths",
        chapter:"10",
        chaptername:"Play with Patterns",
        //:class4mathsch10
    },{
        class:"4",
        name:"Maths",
        chapter:"11",
        chaptername:"Tables and Shares",
        //:class4mathsch11
    },{
        class:"4",
        name:"Maths",
        chapter:"12",
        chaptername:"How Heavy? How Light?",
        //:class4mathsch12
    },{
        class:"4",
        name:"Maths",
        chapter:"13",
        chaptername:"Fields and Fences",
        //:class4mathsch13
    },{
        class:"4",
        name:"Maths",
        chapter:"14",
        chaptername:"Smart Charts",
        //:class4mathsch14
    },{
        class:"4",
        name:"English",
        chapter:"01",
        chaptername:"Nehas Alarm Clock & Wake up",
        //:class4engch1
    },{
        class:"4",
        name:"English",
        chapter:"02",
        chaptername:"The Little fir tree & Noses",
        //:class4engch2
    },{
        class:"4",
        name:"English",
        chapter:"03",
        chaptername:"Nasruddins Aim & Run",
        //:class4engch3
    },{
        class:"4",
        name:"English",
        chapter:"04",
        chaptername:"Alice in Wonderland & Why",
        //:class4engch4
    },{
        class:"4",
        name:"English",
        chapter:"05",
        chaptername:"Helen Keller & Don’t be Afraid of the dark",
        //:class4engch5
    },{
        class:"4",
        name:"English",
        chapter:"06",
        chaptername:"The Scholars Mother Tongue & Hiawatha",
        //:class4engch6
    },{
        class:"4",
        name:"English",
        chapter:"07",
        chaptername:"The Giving Tree & A Watering Rhyme",
        //:class4engch7
    },{
        class:"4",
        name:"English",
        chapter:"08",
        chaptername:"Going to buy a Book & Poem Books",
        //:class4engch8
    },{
        class:"4",
        name:"English",
        chapter:"09",
        chaptername:"Pinocchho & The Naughty Boy",
        //:class4engch9
    },{
        class:"4",
        name:"Hindi",
        chapter:"01",
        chaptername:"मन के भोले -भाले बादल",
        //:class4hindich1
    },{
        class:"4",
        name:"Hindi",
        chapter:"02",
        chaptername:"जैसा सवाल वैसा जवाब",
        //:class4hindich2
    },{
        class:"4",
        name:"Hindi",
        chapter:"03",
        chaptername:"किरमिच की गेंद",
        //:class4hindich3
    },{
        class:"4",
        name:"Hindi",
        chapter:"04",
        chaptername:"पापा जब बच्चे थे",
        //:class4hindich4
    },{
        class:"4",
        name:"Hindi",
        chapter:"05",
        chaptername:"दोस्त की पोशाक",
        //:class4hindich5
    },{
        class:"4",
        name:"Hindi",
        chapter:"06",
        chaptername:"नाव बनाओ नाव बनाओ",
        //:class4hindich6
    },{
        class:"4",
        name:"Hindi",
        chapter:"07",
        chaptername:"दान का हिसाब",
        //:class4hindich7
    },{
        class:"4",
        name:"Hindi",
        chapter:"08",
        chaptername:"कौन ?",
        //:class4hindich8
    },{
        class:"4",
        name:"Hindi",
        chapter:"09",
        chaptername:"स्वतंत्रता की ओर",
        //:class4hindich9
    },{
        class:"4",
        name:"Hindi",
        chapter:"10",
        chaptername:"थप्प रोटी थप्प दाल",
        //:class4hindich10
    },{
        class:"4",
        name:"Hindi",
        chapter:"11",
        chaptername:"पढ़क्कू की सूझ",
        //:class4hindich11
    },{
        class:"4",
        name:"Hindi",
        chapter:"12",
        chaptername:"सुनीता की पहिया कुर्सी",
        //:class4hindich12
    },{
        class:"4",
        name:"Hindi",
        chapter:"13",
        chaptername:"हुदहुद",
        //:class4hindich13
    },{
        class:"4",
        name:"Hindi",
        chapter:"14",
        chaptername:"मुफ्त ही मुफ्त",
        //:class4hindich14
    },{
        class:"4",
        name:"Evs",
        chapter:"01",
        chaptername:"Going to School",
        //:class4evsch1
    },{
        class:"4",
        name:"Evs",
        chapter:"02",
        chaptername:"Ear to Ear",
        //:class4evsch2
    },{
        class:"4",
        name:"Evs",
        chapter:"03",
        chaptername:"A Day with Nandu",
        //:class4evsch3
    },{
        class:"4",
        name:"Evs",
        chapter:"04",
        chaptername:"The Story of Amrita",
        //:class4evsch4
    },{
        class:"4",
        name:"Evs",
        chapter:"05",
        chaptername:"Anita and the Honeybees",
        //:class4evsch5
    },{
        class:"4",
        name:"Evs",
        chapter:"06",
        chaptername:"Omana’s Journey",
        //:class4evsch6
    },{
        class:"4",
        name:"Evs",
        chapter:"07",
        chaptername:"From the Window",
        //:class4evsch7
    },{
        class:"4",
        name:"Evs",
        chapter:"08",
        chaptername:"Reaching Grandmother’s House",
        //:class4evsch8
    },{
        class:"4",
        name:"Evs",
        chapter:"09",
        chaptername:"Changing Families",
        //:class4evsch9
    },{
        class:"4",
        name:"Evs",
        chapter:"10",
        chaptername:"Hu Tu Tu, Hu Tu Tu",
        //:class4evsch10
    },{
        class:"4",
        name:"Evs",
        chapter:"11",
        chaptername:"The Valley of Flowers",
        //:class4evsch11
    },{
        class:"4",
        name:"Evs",
        chapter:"12",
        chaptername:"Changing Times",
        //:class4evsch12
    },{
        class:"4",
        name:"Evs",
        chapter:"13",
        chaptername:"A River’s Tale",
        //:class4evsch13
    },{
        class:"4",
        name:"Evs",
        chapter:"14",
        chaptername:"Basva’s Farm",
        //:class4evsch14
    },{
        class:"4",
        name:"Evs",
        chapter:"15",
        chaptername:"From Market to Home",
        //:class4evsch15
    },{
        class:"4",
        name:"Evs",
        chapter:"16",
        chaptername:"A Busy Month",
        //:class4evsch16
    },{
        class:"4",
        name:"Evs",
        chapter:"17",
        chaptername:"Nandita in Mumbai",
        //:class4evsch17
    },{
        class:"4",
        name:"Evs",
        chapter:"18",
        chaptername:"Too Much Water, Too Little Water",
        //:class4evsch18
    },{
        class:"4",
        name:"Evs",
        chapter:"19",
        chaptername:" Abdul in the Garden",
        //:class4evsch19
    },{
        class:"4",
        name:"Evs",
        chapter:"20",
        chaptername:"Eating Together",
        //:class4evsch20
    },{
        class:"4",
        name:"Evs",
        chapter:"21",
        chaptername:"Food and Fun",
        //:class4evsch21
    },{
        class:"4",
        name:"Evs",
        chapter:"22",
        chaptername:"The World in My Home",
        //:class4evsch22
    },{
        class:"4",
        name:"Evs",
        chapter:"23",
        chaptername:"Pochampalli",
        //:class4evsch23
    },{
        class:"4",
        name:"Evs",
        chapter:"24",
        chaptername:"Home and Abroad",
        //:class4evsch24
    },{
        class:"4",
        name:"Evs",
        chapter:"25",
        chaptername:"Spicy Riddles",
        //:class4evsch25
    },{
        class:"4",
        name:"Evs",
        chapter:"26",
        chaptername:"Defence Officer: Wahida",
        //:class4evsch26
    },{
        class:"4",
        name:"Evs",
        chapter:"27",
        chaptername:"Chuskit Goes to School",
        //:class4evsch27
    },{
        class:"5",
        name:"Evs",
        chapter:"01",
        chaptername:"Super Senses",
        //:class5evsch1
    },{
        class:"5",
        name:"Evs",
        chapter:"02",
        chaptername:"A Snake Charmers Story",
        //:class5evsch2
    },{
        class:"5",
        name:"Evs",
        chapter:"03",
        chaptername:"From Tasting to Digesting",
        //:class5evsch3
    },{
        class:"5",
        name:"Evs",
        chapter:"04",
        chaptername:"Mangoes Round the Year",
        //:class5evsch4
    },{
        class:"5",
        name:"Evs",
        chapter:"05",
        chaptername:"Seeds and Seeds",
        //:class5evsch5
    },{
        class:"5",
        name:"Evs",
        chapter:"06",
        chaptername:"Every Drop Counts",
        //:class5evsch6
    },{
        class:"5",
        name:"Evs",
        chapter:"07",
        chaptername:"Experiments with Water",
        //:class5evsch7
    },{
        class:"5",
        name:"Evs",
        chapter:"08",
        chaptername:"A Treat for Mosquitoes",
        //:class5evsch8
    },{
        class:"5",
        name:"Evs",
        chapter:"09",
        chaptername:"Up You Go",
        //:class5evsch9
    },{
        class:"5",
        name:"Evs",
        chapter:"10",
        chaptername:"Walls Tell Stories",
        //:class5evsch10
    },{
        class:"5",
        name:"Evs",
        chapter:"11",
        chaptername:"Sunita in Space",
        //:class5evsch11
    },{
        class:"5",
        name:"Evs",
        chapter:"12",
        chaptername:"What If It Finishes",
        //:class5evsch12
    },{
        class:"5",
        name:"Evs",
        chapter:"13",
        chaptername:"A Shelter So High",
        //:class5evsch13
    },{
        class:"5",
        name:"Evs",
        chapter:"14",
        chaptername:"When the Earth Shook",
        //:class5evsch14
    },{
        class:"5",
        name:"Evs",
        chapter:"15",
        chaptername:"Blow Hot Blow Cold",
        //:class5evsch15
    },{
        class:"5",
        name:"Evs",
        chapter:"16",
        chaptername:"Who Will Do This Work",
        //:class5evsch16
    },{
        class:"5",
        name:"Evs",
        chapter:"17",
        chaptername:"Across the Wall",
        //:class5evsch17
    },{
        class:"5",
        name:"Evs",
        chapter:"18",
        chaptername:"No Place for Us",
        //:class5evsch18
    },{
        class:"5",
        name:"Evs",
        chapter:"19",
        chaptername:"A Seed Tells a Farmers Story",
        //:class5evsch19
    },{
        class:"5",
        name:"Evs",
        chapter:"20",
        chaptername:"Whose Forests",
        //:class5evsch20
    },{
        class:"5",
        name:"Evs",
        chapter:"21",
        chaptername:"Like Father Like Daughter",
        //:class5evsch21
    },{
        class:"5",
        name:"Evs",
        chapter:"22",
        chaptername:"On the Move Again",
        //:class5evsch22
    },{
        class:"5",
        name:"English",
        chapter:"01",
        chaptername:"Wonderful Waste & Ice Cream Man",
        //:class5engch1
    },{
        class:"5",
        name:"English",
        chapter:"02",
        chaptername:"Flying Together & Teamwork",
        //:class5engch2
    },{
        class:"5",
        name:"English",
        chapter:"03",
        chaptername:"Robinson Crusoe & My Shadow",
        //:class5engch3
    },{
        class:"5",
        name:"English",
        chapter:"04",
        chaptername:"My Elder Brother & Crying",
        //:class5engch4
    },{
        class:"5",
        name:"English",
        chapter:"05",
        chaptername:"Rip van Winkle & The Lazy Frog",
        //:class5engch5
    },{
        class:"5",
        name:"English",
        chapter:"06",
        chaptername:"Talkative Barber & Class Discussion",
        //:class5engch6
    },{
        class:"5",
        name:"English",
        chapter:"07",
        chaptername:"Gullivers Travels & Topsy Turvey Land",
        //:class5engch7
    },{
        class:"5",
        name:"English",
        chapter:"08",
        chaptername:"The Little Bully & Nobodys Friend",
        //:class5engch8
    },{
        class:"5",
        name:"English",
        chapter:"09",
        chaptername:"Around the World & Sing a Song of People",
        //:class5engch9
    },{
        class:"5",
        name:"English",
        chapter:"10",
        chaptername:"Who will be Ningthou & Malu Bhalu",
        //:class5engch10
    },{
        class:"5",
        name:"Hindi",
        chapter:"01",
        chaptername:"रखा की रस्सी",
        //:class5hindich1
    },{
        class:"5",
        name:"Hindi",
        chapter:"02",
        chaptername:"फसलें का त्योहार",
        //:class5hindich2
    },{
        class:"5",
        name:"Hindi",
        chapter:"03",
        chaptername:"खिलौनेवाला",
        //:class5hindich3
    },{
        class:"5",
        name:"Hindi",
        chapter:"04",
        chaptername:"नन्हा फनकार",
        //:class5hindich4
    },{
        class:"5",
        name:"Hindi",
        chapter:"05",
        chaptername:"जहाँ चाह वहाँ राह",
        //:class5hindich5
    },{
        class:"5",
        name:"Hindi",
        chapter:"06",
        chaptername:"चिटठी का सफर",
        //:class5hindich6
    },{
        class:"5",
        name:"Hindi",
        chapter:"07",
        chaptername:"डाकिए की कहानी ,कंवरसिंह की जुबानी",
        //:class5hindich7
    },{
        class:"5",
        name:"Hindi",
        chapter:"08",
        chaptername:"वे दिन भी क्या दिन थे",
        //:class5hindich8
    },{
        class:"5",
        name:"Hindi",
        chapter:"09",
        chaptername:"एक माँ की बेबसी",
        //:class5hindich9
    },{
        class:"5",
        name:"Hindi",
        chapter:"10",
        chaptername:"एक दिन की बादशाहत",
        //:class5hindich10
    },{
        class:"5",
        name:"Hindi",
        chapter:"11",
        chaptername:"चावल की रोटियां",
        //:class5hindich11
    },{
        class:"5",
        name:"Hindi",
        chapter:"12",
        chaptername:"गुरु और चेला",
        //:class5hindich12
    },{
        class:"5",
        name:"Hindi",
        chapter:"13",
        chaptername:" स्वामी की दादी",
        //:class5hindich13
    },{
        class:"5",
        name:"Hindi",
        chapter:"14",
        chaptername:"बाघ आया उस रात",
        //:class5hindich14
    },{
        class:"5",
        name:"Hindi",
        chapter:"15",
        chaptername:"बिशन की दिलेरी",
        //:class5hindich15
    },{
        class:"5",
        name:"Hindi",
        chapter:"16",
        chaptername:"पानी रे पानी",
        //:class5hindich16
    },{
        class:"5",
        name:"Hindi",
        chapter:"17",
        chaptername:"छोटी-सी हमारी नदी",
        //:class5hindich17
    },{
        class:"5",
        name:"Hindi",
        chapter:"18",
        chaptername:"चुनौती हिमालय की",
        //:class5hindich18
    },{
        class:"5",
        name:"Maths",
        chapter:"01",
        chaptername:"The Fish Tale",
        //:class5mathsch1
    },{
        class:"5",
        name:"Maths",
        chapter:"02",
        chaptername:"Shapes and Angles",
        //:class5mathsch2
    },{
        class:"5",
        name:"Maths",
        chapter:"03",
        chaptername:"How Many Squares?",
        //:class5mathsch3
    },{
        class:"5",
        name:"Maths",
        chapter:"04",
        chaptername:"Parts and Wholes",
        //:class5mathsch4
    },{
        class:"5",
        name:"Maths",
        chapter:"05",
        chaptername:"Does It Look the Same?",
        //:class5mathsch5
    },{
        class:"5",
        name:"Maths",
        chapter:"06",
        chaptername:"Be My Multiple, I’ll Be Your Factor",
        //:class5mathsch6
    },{
        class:"5",
        name:"Maths",
        chapter:"07",
        chaptername:"Can You See the Pattern?",
        //:class5mathsch7
    },{
        class:"5",
        name:"Maths",
        chapter:"08",
        chaptername:"Mapping Your Way",
        //:class5mathsch8
    },{
        class:"5",
        name:"Maths",
        chapter:"09",
        chaptername:"Boxes and Sketches",
        //:class5mathsch9
    },{
        class:"5",
        name:"Maths",
        chapter:"10",
        chaptername:"Tenths and Hundredths",
        //:class5mathsch10
    },{
        class:"5",
        name:"Maths",
        chapter:"11",
        chaptername:"Areas and Its Boundary",
        //:class5mathsch11
    },{
        class:"5",
        name:"Maths",
        chapter:"12",
        chaptername:"Smart Charts",
        //:class5mathsch12
    },{
        class:"5",
        name:"Maths",
        chapter:"13",
        chaptername:"Ways to Multiply and Divide",
        //:class5mathsch13
    },{
        class:"5",
        name:"Maths",
        chapter:"14",
        chaptername:"How Big? How Heavy?",
        //:class5mathsch14
    },{
        class:"6",
        name:"English",
        chapter:"01",
        chaptername:"FABLES AND FOLK TALES",
        //:class6engch1
    },{
        class:"6",
        name:"English",
        chapter:"02",
        chaptername:"FRIENDSHIP",
        //:class6engch2
    },{
        class:"6",
        name:"English",
        chapter:"03",
        chaptername:"NURTURING NATURE",
        //:class6engch3
    },{
        class:"6",
        name:"English",
        chapter:"04",
        chaptername:"SPORTS AND WELLNESS",
        //:class6engch4
    },{
        class:"6",
        name:"English",
        chapter:"05",
        chaptername:"CULTURE AND TRADITION",
        //:class6engch5
    },{
        class:"6",
        name:"Sst",
        chapter:"01",
        chaptername:"Why Social Science?",
        //:class6sstch1
    },{
        class:"6",
        name:"Sst",
        chapter:"02",
        chaptername:"Oceans and Continents",
        //:class6sstch2
    },{
        class:"6",
        name:"Sst",
        chapter:"03",
        chaptername:"Landforms and Life",
        //:class6sstch3
    },{
        class:"6",
        name:"Sst",
        chapter:"04",
        chaptername:"Timeline and Sources of History",
        //:class6sstch4
    },{
        class:"6",
        name:"Sst",
        chapter:"05",
        chaptername:"India, That Is Bharat",
        //:class6sstch5
    },{
        class:"6",
        name:"Sst",
        chapter:"06",
        chaptername:"The Beginnings of Indian Civilisation",
        //:class6sstch6
    },{
        class:"6",
        name:"Sst",
        chapter:"07",
        chaptername:"India’s Cultural Roots",
        //:class6sstch7
    },{
        class:"6",
        name:"Sst",
        chapter:"08",
        chaptername:"Unity in Diversity, or ‘Many in the One’",
        //:class6sstch8
    },{
        class:"6",
        name:"Sst",
        chapter:"09",
        chaptername:"Family and Community",
        //:class6sstch9
    },{
        class:"6",
        name:"Sst",
        chapter:"10",
        chaptername:"Governance",
        //:class6sstch10
    },{
        class:"6",
        name:"Sst",
        chapter:"11",
        chaptername:"Local Government in Rural Areas",
        //:class6sstch11
    },{
        class:"6",
        name:"Sst",
        chapter:"12",
        chaptername:"Local Government in Urban Areas",
        //:class6sstch12
    },{
        class:"6",
        name:"Sst",
        chapter:"13",
        chaptername:"The Value of Work",
        //:class6sstch13
    },{
        class:"6",
        name:"Sst",
        chapter:"14",
        chaptername:"Economic Activities Around Us",
        //:class6sstch14
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"01",
        chaptername:"वयं वर्णमालां पठाम:",
        //:class6sanskritch1
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"02",
        chaptername:"एष: क: ? एषा का ? एतत् किम् ?",
        //:class6sanskritch2
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"03",
        chaptername:"अहं च त्वं च",
        //:class6sanskritch3
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"04",
        chaptername:"अहं प्रात: उत्तिष् ठाम",
        //:class6sanskritch4
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"05",
        chaptername:"शूरा: वयं धीरा: वयम",
        //:class6sanskritch5
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"06",
        chaptername:"स: एव महान् चित्रकार:",
        //:class6sanskritch6
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"07",
        chaptername:"अतिथिदेवो भव",
        //:class6sanskritch7
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"08",
        chaptername:"बुद्धि: सर्वार्थसाधिका",
        //:class6sanskritch8
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"09",
        chaptername:"यो जानाति स: पण्डित:",
        //:class6sanskritch9
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"10",
        chaptername:"त्वम् आपणं गच",
        //:class6sanskritch10
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"11",
        chaptername:"पृथिव्यां त्रीणि रत् नानि",
        //:class6sanskritch11
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"12",
        chaptername:"आलस्यं हि मनुष्याणां शरीरस्थो महान् रिपु:",
        //:class6sanskritch12
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"13",
        chaptername:"सङ्ख्यागणना ननु सरला",
        //:class6sanskritch13
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"14",
        chaptername:"माधवस्य प्रियम् अङ् गम् ",
        //:class6sanskritch14
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"15",
        chaptername:"वृक्षा: सत्पुरुषा: इव",
        //:class6sanskritch15
    },{
        class:"6",
        name:"Science",
        chapter:"01",
        chaptername:"The Wonderful World of Science",
        //:class6sciencech1
    },{
        class:"6",
        name:"Science",
        chapter:"02",
        chaptername:"Diversity in the Living World",
        //:class6sciencech2
    },{
        class:"6",
        name:"Science",
        chapter:"03",
        chaptername:"Mindful Eating: A Path to a Healthy Body",
        //:class6sciencech3
    },{
        class:"6",
        name:"Science",
        chapter:"04",
        chaptername:"Exploring Magnets",
        //:class6sciencech4
    },{
        class:"6",
        name:"Science",
        chapter:"05",
        chaptername:"Measurement of Length and Motion",
        //:class6sciencech5
    },{
        class:"6",
        name:"Science",
        chapter:"06",
        chaptername:"Materials Around Us",
        //:class6sciencech6
    },{
        class:"6",
        name:"Science",
        chapter:"07",
        chaptername:"Temperature and its Measurement",
        //:class6sciencech7
    },{
        class:"6",
        name:"Science",
        chapter:"08",
        chaptername:"A Journey through States of Water",
        //:class6sciencech8
    },{
        class:"6",
        name:"Science",
        chapter:"09",
        chaptername:"ethods of Separation in Everyday Life",
        //:class6sciencech9
    },{
        class:"6",
        name:"Science",
        chapter:"10",
        chaptername:"Living Creatures: Exploring their Characteristics",
        //:class6sciencech10
    },{
        class:"6",
        name:"Science",
        chapter:"11",
        chaptername:"Nature’s Treasures",
        //:class6sciencech11
    },{
        class:"6",
        name:"Science",
        chapter:"12",
        chaptername:"Beyond Earth",
        //:class6sciencech12
    }];



    useEffect(() => {
        const uploadToFirebase = async () => {
          const classes = ["2", "3", "4", "5", "6"];
    
          // Dynamically get unique subjects from all_chapters
          const subjectsSet = new Set();
          all_chapters.forEach((ch) => {
            subjectsSet.add(ch.name.toLowerCase());
          });
          const subjects = Array.from(subjectsSet);
    
          for (let classNum of classes) {
            for (let subject of subjects) {
              const apiUrl = `https://api.github.com/repos/VivekChahar1960/SSS_Data/contents/class%20${classNum}/books/${subject}`;
    
              try {
                const res = await fetch(apiUrl);
                const files = await res.json();
    
                if (!Array.isArray(files)) {
                  console.log(`⚠️ No files found for class ${classNum} subject ${subject}`);
                  continue;
                }
    
                for (let file of files) {
                  if (!file.name.endsWith(".pdf")) continue;
    
                  const fileName = file.name.replace(".pdf", "");
                  const match = fileName.match(/ch(\d+)/i);
                  const chapterNumber = match ? match[1] : null;
    
                  if (!chapterNumber) continue;
    
                  const chapterMeta = all_chapters.find(
                    (ch) =>
                      ch.class === classNum &&
                      ch.name.toLowerCase() === subject &&
                      ch.chapter === chapterNumber.padStart(2, "0")
                  );
    
                  const chapterData = {
                    chapterName: chapterMeta?.chaptername || fileName,
                    chapterNumber: chapterNumber,
                    subject: subject,
                    class: classNum,
                    fileUrl: file.download_url
                      .replace("https://github.com", "https://raw.githubusercontent.com")
                      .replace("/blob/", "/"),
                  };
    
                  const dbRef = ref(db, `NcertBooks/class ${classNum}/${subject}/ch${chapterNumber}`);
                  await set(dbRef, chapterData);
    
                  console.log(`✅ Uploaded: Class ${classNum} - ${subject} - ch${chapterNumber}`);
                }
              } catch (err) {
                console.error(`❌ Error for class ${classNum} ${subject}:`, err);
              }
            }
          }
        };
    
        uploadToFirebase();
      }, []);
    
      return <div>Uploading all NCERT PDFs to Firebase Realtime DB...</div>;
    }
    
    export default UploadNcertBooksToRTDB;
