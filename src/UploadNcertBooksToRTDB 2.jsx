// import { useEffect } from "react";
// import { getDatabase, ref, set } from "firebase/database";

// function UploadNcertBooksToRTDB() {
//   const db = getDatabase();

//   useEffect(() => {
//     const uploadToFirebase = async () => {
//       const classes = ["7", "8", "9", "10", "11", "12"];

//       for (let classNum of classes) {
//         const apiUrl = `https://api.github.com/repos/VivekChahar1960/SSS_Data/contents/class%20${classNum}/books`;

//         try {
//           const res = await fetch(apiUrl);
//           const subjects = await res.json();

//           if (!Array.isArray(subjects)) {
//             console.log(`⚠️ No subjects found for class ${classNum}`);
//             continue;
//           }

//           for (let subjectFolder of subjects) {
//             const subject = subjectFolder.name;
//             const subjectApiUrl = `https://api.github.com/repos/VivekChahar1960/SSS_Data/contents/class%20${classNum}/books/${subject}`;

//             try {
//               const subjectRes = await fetch(subjectApiUrl);
//               const files = await subjectRes.json();

//               if (!Array.isArray(files)) {
//                 console.log(`⚠️ No files for class ${classNum} subject ${subject}`);
//                 continue;
//               }

//               for (let file of files) {
//                 if (!file.name.endsWith(".pdf")) continue;

//                 const fileName = file.name.replace(".pdf", "");

//                 // Extract chapter number like "ch1" or "chapter 1"
//                 const match = fileName.match(/ch(\d+)|chapter\s*(\d+)/i);
//                 const chapterNumber = match
//                   ? `ch${match[1] || match[2]}`
//                   : "unknown";

//                 // ✅ Make the URL viewable using Google Docs Viewer
//                 const viewUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(file.download_url)}`;

//                 const chapterData = {
//                   chapterName: fileName,
//                   chapterNumber,
//                   subject,
//                   class: classNum,
//                   fileUrl: viewUrl,
//                 };

//                 const dbRef = ref(
//                   db,
//                   `NcertBooks/class ${classNum}/${subject}/${chapterNumber}`
//                 );
//                 await set(dbRef, chapterData);

//                 console.log(`✅ Uploaded: Class ${classNum} - ${subject} - ${chapterNumber}`);
//               }
//             } catch (err) {
//               console.error(`❌ Error fetching subject ${subject} in class ${classNum}:`, err);
//             }
//           }
//         } catch (err) {
//           console.error(`❌ Error fetching class ${classNum}:`, err);
//         }
//       }
//     };

//     uploadToFirebase();
//   }, []);

//   return <div>Uploading NCERT PDFs (Class 7–12) to Firebase Realtime DB...</div>;
// }

// export default UploadNcertBooksToRTDB;



// chapter name updates-- ---> 





import { useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";
// 👇 Import your all_chapters array here


function UploadNcertBooksToRTDB() {
  const db = getDatabase();
  let all_chapters=[
    {
        class:"10",
        name:"Maths",
        chapter:"01",
        chaptername:"Real Numbers",
        //class10mathsch1
    },{
        class:"10",
        name:"Maths",
        chapter:"02",
        chaptername:"Polynomials",
        //class10mathsch2
    },{
        class:"10",
        name:"Maths",
        chapter:"03",
        chaptername:"Pair of Linear Equations in Two Variables",
        //class10mathsch3
    },{
        class:"10",
        name:"Maths",
        chapter:"04",
        chaptername:"Quadratic Equations",
        //class10mathsch4
    },{
        class:"10",
        name:"Maths",
        chapter:"05",
        chaptername:"Arithmetic Progressions",
        //class10mathsch5
    },{
        class:"10",
        name:"Maths",
        chapter:"06",
        chaptername:"Triangles",
        //class10mathsch6
    },{
        class:"10",
        name:"Maths",
        chapter:"07",
        chaptername:"Coordinate Geometry",
        //class10mathsch7
    },{
        class:"10",
        name:"Maths",
        chapter:"08",
        chaptername:"Introduction to Trigonometry",
        //class10mathsch8
    },{
        class:"10",
        name:"Maths",
        chapter:"09",
        chaptername:"Some Applications of Trigonometry",
        //class10mathsch9
    },{
        class:"10",
        name:"Maths",
        chapter:"10",
        chaptername:"Circles",
        //class10mathsch10
    },{
        class:"10",
        name:"Maths",
        chapter:"11",
        chaptername:"Areas Related to Circles",
        //class10mathsch11
    },{
        class:"10",
        name:"Maths",
        chapter:"12",
        chaptername:"Surface Areas and Volumes<",
        //class10mathsch12
    },{
        class:"10",
        name:"Maths",
        chapter:"13",
        chaptername:"Statistics",
        //class10mathsch13
    },{
        class:"10",
        name:"Maths",
        chapter:"14",
        chaptername:"Probability",
        //class10mathsch14
    },{
        class:"10",
        name:"Sanskrit",
        chapter:"01",
        chaptername:"शुचिपर्यावरणम्",
        //class10sanskritch1
    },{
        class:"10",
        name:"Sanskrit",
        chapter:"02",
        chaptername:"बुद्धिर्बलवती सदा",
        //class10sanskritch2
    },{
        class:"10",
        name:"Sanskrit",
        chapter:"03",
        chaptername:"शिशुलालनम",
        //class10sanskritch3
    },{
        class:"10",
        name:"Sanskrit",
        chapter:"04",
        chaptername:"जननी तुल्यवत्सला",
        //class10sanskritch4
    },{
        class:"10",
        name:"Sanskrit",
        chapter:"05",
        chaptername:"सुभाषितानि",
        //class10sanskritch5
    },{
        class:"10",
        name:"Sanskrit",
        chapter:"06",
        chaptername:"सौहार्दं प्रकृतेः शोभा",
        //class10sanskritch6
    },{
        class:"10",
        name:"Sanskrit",
        chapter:"07",
        chaptername:"विचित्रः साक्षी",
        //class10sanskritch7
    },{
        class:"10",
        name:"Sanskrit",
        chapter:"08",
        chaptername:"सूक्तयः",
        //class10sanskritch8
    },{
        class:"10",
        name:"Sanskrit",
        chapter:"09",
        chaptername:"भूकंपविभीषिका",
        //class10sanskritch9
    },{
        class:"10",
        name:"Sanskrit",
        chapter:"10",
        chaptername:"अनयोक्त्यः",
        //class10sanskritch10
    },{
        class:"10",
        name:"Science",
        chapter:"01",
        chaptername:"Chemical Reactions and Equations",
        //class10sciencech1
    },{
        class:"10",
        name:"Science",
        chapter:"02",
        chaptername:"Acids Bases and Salt",
        //class10sciencech2
    },{
        class:"10",
        name:"Science",
        chapter:"03",
        chaptername:"Metals and Non-metals",
        //class10sciencech3
    },{
        class:"10",
        name:"Science",
        chapter:"04",
        chaptername:"Carbon and Its Compounds",
        //class10sciencech4
    },{
        class:"10",
        name:"Science",
        chapter:"05",
        chaptername:"Life Process",
        //class10sciencech5
    },{
        class:"10",
        name:"Science",
        chapter:"06",
        chaptername:"Control and Coordination",
        //class10sciencech6
    },{
        class:"10",
        name:"Science",
        chapter:"07",
        chaptername:"How Do Organisms Reproduce?",
        //class10sciencech7
    },{
        class:"10",
        name:"Science",
        chapter:"08",
        chaptername:"Heredity and Evolution",
        //class10sciencech8
    },{
        class:"10",
        name:"Science",
        chapter:"09",
        chaptername:"Light – Reflection and Refraction",
        //class10sciencech9
    },{
        class:"10",
        name:"Science",
        chapter:"10",
        chaptername:"The Human Eye and The Colourful World",
        //class10sciencech10
    },{
        class:"10",
        name:"Science",
        chapter:"11",
        chaptername:"Electricity",
        //class10sciencech11
    },{
        class:"10",
        name:"Science",
        chapter:"12",
        chaptername:"Magnetic Effects of Electric Current",
        //class10sciencech12
    },{
        class:"10",
        name:"Science",
        chapter:"13",
        chaptername:"Our Environment",
        //class10sciencech13
    },{
        class:"10",
        name:"Kritika",
        chapter:"01",
        chaptername:"माता का आँचल",
        //class10kritikach1
    },{
        class:"10",
        name:"Kritika",
        chapter:"02",
        chaptername:"साना-साना हाथ जोड़ि",
        //class10kritikach2
    },{
        class:"10",
        name:"Kritika",
        chapter:"03",
        chaptername:"मैं क्यों लिखता हूँ?",
        //class10kritikach3
    },{
        class:"10",
        name:"Shitiz",
        chapter:"01",
        chaptername:"पद",
        //class10shitizch1
    },{
        class:"10",
        name:"Shitiz",
        chapter:"02",
        chaptername:"राम-लक्ष्मण-परशुराम संवाद",
        //class10shitizch2
    },{
        class:"10",
        name:"Shitiz",
        chapter:"03",
        chaptername:"आत्मकथ्य",
        //class10shitizch3
    },{
        class:"10",
        name:"Shitiz",
        chapter:"04",
        chaptername:"उत्साह और अट नहीं रही",
        //class10shitizch4
    },{
        class:"10",
        name:"Shitiz",
        chapter:"05",
        chaptername:"यह दंतुरहित मुस्कान और फसल",
        //class10shitizch5
    },{
        class:"10",
        name:"Shitiz",
        chapter:"06",
        chaptername:"संगतकार",
        //class10shitizch6
    },{
        class:"10",
        name:"Shitiz",
        chapter:"07",
        chaptername:"नेताजी का चश्मा",
        //class10shitizch7
    },{
        class:"10",
        name:"Shitiz",
        chapter:"08",
        chaptername:"बालगोबिन भगत",
        //class10shitizch8
    },{
        class:"10",
        name:"Shitiz",
        chapter:"09",
        chaptername:"लखनवी अंदाज़",
        //class10shitizch9
    },{
        class:"10",
        name:"Shitiz",
        chapter:"10",
        chaptername:"एक कहानी यह भी",
        //class10shitizch10
    },{
        class:"10",
        name:"Shitiz",
        chapter:"11",
        chaptername:"नौबतखाने में इबादत",
        //class10shitizch11
    },{
        class:"10",
        name:"Shitiz",
        chapter:"12",
        chaptername:"संस्कृति",
        //class10shitizch12
    },{
        class:"10",
        name:"firstflight",
        chapter:"01",
        chaptername:"A Letter to God ,  Dust of Snow and Fire and Ice",
        //class10firstflightch1
    },{
        class:"10",
        name:"firstflight",
        chapter:"02",
        chaptername:"Nelson Mandela: Long Walk to Freedom and A Tiger in the Zoo",
        //class10firstflightch2
    },{
        class:"10",
        name:"firstflight",
        chapter:"03",
        chaptername:"Stories about Flying I. His firstflight II. Black Aeroplane and How to Tell Wild Animals ,The Ball Poem",
        //class10firstflightch3
    },{
        class:"10",
        name:"firstflight",
        chapter:"04",
        chaptername:"From the Diary of Anne Frank and Amanda!",
        //class10firstflightch4
    },{
        class:"10",
        name:"firstflight",
        chapter:"05",
        chaptername:"Glimpses of India I. A Baker from Goa II. Coorg III. Tea from Assam The Trees",
        //class10firstflightch5
    },{
        class:"10",
        name:"firstflight",
        chapter:"06",
        chaptername:"Mijbil the Otter and Fog",
        //class10firstflightch6
    },{
        class:"10",
        name:"firstflight",
        chapter:"07",
        chaptername:"Madam Rides the Bus and The Tale of Custard the Dragon",
        //class10firstflightch7
    },{
        class:"10",
        name:"firstflight",
        chapter:"08",
        chaptername:"The Sermon at Benares and For Anne Gregory",
        //class10firstflightch8
    },{
        class:"10",
        name:"firstflight",
        chapter:"09",
        chaptername:"The Proposal",
        //class10firstflightch9
    },{
        class:"10",
        name:"Foot Print",
        chapter:"01",
        chaptername:"A Triumph of Surgery",
        //class10footch1
    },{
        class:"10",
        name:"Foot Print",
        chapter:"02",
        chaptername:"The Thief’s Story",
        //class10footch2
    },{
        class:"10",
        name:"Foot Print",
        chapter:"03",
        chaptername:"The Midnight Visitor",
        //class10footch3
    },{
        class:"10",
        name:"Foot Print",
        chapter:"04",
        chaptername:"A Question of Trust",
        //class10footch4
    },{
        class:"10",
        name:"Foot Print",
        chapter:"05",
        chaptername:"Footprints without Feet",
        //class10footch5
    },{
        class:"10",
        name:"Foot Print",
        chapter:"06",
        chaptername:"The Making of a Scientist",
        //class10footch6
    },{
        class:"10",
        name:"Foot Print",
        chapter:"07",
        chaptername:"The Necklace",
        //class10footch7
    },{
        class:"10",
        name:"Foot Print",
        chapter:"08",
        chaptername:"Bholi",
        //class10footch8
    },{
        class:"10",
        name:"Foot Print",
        chapter:"09",
        chaptername:"The Book That Saved the Earth",
        //class10footch9
    },{
        class:"10",
        name:"History",
        chapter:"01",
        chaptername:"The Rise of Nationalism in Europe",
        //class10historych1
    },{
        class:"10",
        name:"History",
        chapter:"02",
        chaptername:"Nationalism in India",
        //class10historych2
    },{
        class:"10",
        name:"History",
        chapter:"03",
        chaptername:"The Making of a Global World",
        //class10historych3
    },{
        class:"10",
        name:"History",
        chapter:"04",
        chaptername:"The Age of Industrialisation",
        //class10historych4
    },{
        class:"10",
        name:"History",
        chapter:"05",
        chaptername:"Print Culture and the Modern World",
        //class10historych5
    },{
        class:"10",
        name:"Civics",
        chapter:"01",
        chaptername:"Power-sharing",
        //class10civicsch1
    },{
        class:"10",
        name:"Civics",
        chapter:"02",
        chaptername:"Federalism",
        //class10civicsch2
    },{
        class:"10",
        name:"Civics",
        chapter:"03",
        chaptername:"Gender, Religion and Caste",
        //class10civicsch3
    },{
        class:"10",
        name:"Civics",
        chapter:"04",
        chaptername:"Political Parties",
        //class10civicsch4
    },{
        class:"10",
        name:"Civics",
        chapter:"05",
        chaptername:"Outcomes of Democracy",
        //class10civicsch5
    },{
        class:"10",
        name:"geo",
        chapter:"01",
        chaptername:"Resources and Development",
        //class10geoch1
    },{
        class:"10",
        name:"geo",
        chapter:"02",
        chaptername:"Forest and Wildlife Resources",
        //class10geoch2
    },{
        class:"10",
        name:"geo",
        chapter:"03",
        chaptername:"Water Resources",
        //class10geoch3
    },{
        class:"10",
        name:"geo",
        chapter:"04",
        chaptername:"Agriculture",
        //class10geoch4
    },{
        class:"10",
        name:"geo",
        chapter:"05",
        chaptername:"Minerals and Energy Resources",
        //class10geoch5
    },{
        class:"10",
        name:"geo",
        chapter:"06",
        chaptername:"Manufacturing Industries",
        //class10geoch6
    },{
        class:"10",
        name:"geo",
        chapter:"07",
        chaptername:"Lifelines of National Economy",
        //class10geoch7
    },{
        class:"10",
        name:"eco",
        chapter:"01",
        chaptername:"Development",
        //class10ecoch1
    },{
        class:"10",
        name:"eco",
        chapter:"02",
        chaptername:"Sectors of the Indian Economy",
        //class10ecoch2
    },{
        class:"10",
        name:"eco",
        chapter:"03",
        chaptername:"Money and Credit",
        //class10ecoch3
    },{
        class:"10",
        name:"eco",
        chapter:"04",
        chaptername:"Globalisation and the Indian Economy",
        //class10ecoch4
    },{
        class:"10",
        name:"eco",
        chapter:"05",
        chaptername:"Consumer Rights",
        //class10ecoch5
    }
    ];



    useEffect(() => {
        const uploadToFirebase = async () => {
          const classes = ["10"];
          const githubToken = "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"; // use in dev only!
    
          const subjectsSet = new Set();
          all_chapters.forEach((ch) => {
            subjectsSet.add(ch.name.toLowerCase());
          });
          const subjects = Array.from(subjectsSet);
    
          for (let classNum of classes) {
            for (let subject of subjects) {
              const encodedSubject = encodeURIComponent(subject); // handle spaces
              const apiUrl = `https://api.github.com/repos/VivekChahar1960/SSS_Data/contents/class%20${classNum}/books/${encodedSubject}`;
              const headers = {
                Authorization: `token ${githubToken}`,
              };
    
              try {
                const res = await fetch(apiUrl, { headers });
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