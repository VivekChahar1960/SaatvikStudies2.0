// import { useEffect } from "react";
// import { getDatabase, ref, set } from "firebase/database";

// function UploadNcertBooksToRTDB() {
//   const db = getDatabase();
//   const githubToken = import.meta.env.REACT_APP_GITHUB_TOKEN;

//   useEffect(() => {
//     const uploadToFirebase = async () => {
//       const classes = ["11", "12"];

//       for (let classNum of classes) {
//         const apiUrl = `https://api.github.com/repos/VivekChahar1960/SSS_Data/contents/class%20${classNum}/books`;
//         const headers = {
//           Authorization: `token ${githubToken}`,
//         };

//         try {
//           const res = await fetch(apiUrl, { headers });
//           const subjects = await res.json();

//           if (!Array.isArray(subjects)) {
//             console.log(`⚠️ No subjects found for class ${classNum}`);
//             continue;
//           }

//           for (let subjectFolder of subjects) {
//             const subject = subjectFolder.name;
//             const subjectApiUrl = `https://api.github.com/repos/VivekChahar1960/SSS_Data/contents/class%20${classNum}/books/${subject}`;

//             try {
//               // 👇 Add headers here too!
//               const subjectRes = await fetch(subjectApiUrl, { headers });
//               const files = await subjectRes.json();

//               if (!Array.isArray(files)) {
//                 console.log(`⚠️ No files for class ${classNum} subject ${subject}`);
//                 continue;
//               }

//               for (let file of files) {
//                 if (!file.name.endsWith(".pdf")) continue;

//                 const fileName = file.name.replace(".pdf", "");

//                 const match = fileName.match(/ch(\d+)|chapter\s*(\d+)/i);
//                 const chapterNumber = match
//                   ? `ch${match[1] || match[2]}`
//                   : "unknown";

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
//                   `ncertbooks/class ${classNum}/${subject}/${chapterNumber}`
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

//   return <div>Uploading NCERT PDFs (Class 11–12) to Firebase Realtime DB...</div>;
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
        class:"6",
        name:"English",
        chapter:"01",
        chaptername:"FABLES AND FOLK TALES",
        //class6engch1
    },{
        class:"6",
        name:"English",
        chapter:"02",
        chaptername:"FRIENDSHIP",
        //class6engch2
    },{
        class:"6",
        name:"English",
        chapter:"03",
        chaptername:"NURTURING NATURE",
        //class6engch3
    },{
        class:"6",
        name:"English",
        chapter:"04",
        chaptername:"SPORTS AND WELLNESS",
        //class6engch4
    },{
        class:"6",
        name:"English",
        chapter:"05",
        chaptername:"CULTURE AND TRADITION",
        //class6engch5
    },{
        class:"6",
        name:"Sst",
        chapter:"01",
        chaptername:"Why Social Science?",
        //class6sstch1
    },{
        class:"6",
        name:"Sst",
        chapter:"02",
        chaptername:"Oceans and Continents",
        //class6sstch2
    },{
        class:"6",
        name:"Sst",
        chapter:"03",
        chaptername:"Landforms and Life",
        //class6sstch3
    },{
        class:"6",
        name:"Sst",
        chapter:"04",
        chaptername:"Timeline and Sources of History",
        //class6sstch4
    },{
        class:"6",
        name:"Sst",
        chapter:"05",
        chaptername:"India, That Is Bharat",
        //class6sstch5
    },{
        class:"6",
        name:"Sst",
        chapter:"06",
        chaptername:"The Beginnings of Indian Civilisation",
        //class6sstch6
    },{
        class:"6",
        name:"Sst",
        chapter:"07",
        chaptername:"India’s Cultural Roots",
        //class6sstch7
    },{
        class:"6",
        name:"Sst",
        chapter:"08",
        chaptername:"Unity in Diversity, or ‘Many in the One’",
        //class6sstch8
    },{
        class:"6",
        name:"Sst",
        chapter:"09",
        chaptername:"Family and Community",
        //class6sstch9
    },{
        class:"6",
        name:"Sst",
        chapter:"10",
        chaptername:"Governance",
        //class6sstch10
    },{
        class:"6",
        name:"Sst",
        chapter:"11",
        chaptername:"Local Government in Rural Areas",
        //class6sstch11
    },{
        class:"6",
        name:"Sst",
        chapter:"12",
        chaptername:"Local Government in Urban Areas",
        //class6sstch12
    },{
        class:"6",
        name:"Sst",
        chapter:"13",
        chaptername:"The Value of Work",
        //class6sstch13
    },{
        class:"6",
        name:"Sst",
        chapter:"14",
        chaptername:"Economic Activities Around Us",
        //class6sstch14
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"01",
        chaptername:"वयं वर्णमालां पठाम:",
        //class6sanskritch1
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"02",
        chaptername:"एष: क: ? एषा का ? एतत् किम् ?",
        //class6sanskritch2
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"03",
        chaptername:"अहं च त्वं च",
        //class6sanskritch3
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"04",
        chaptername:"अहं प्रात: उत्तिष् ठाम",
        //class6sanskritch4
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"05",
        chaptername:"शूरा: वयं धीरा: वयम",
        //class6sanskritch5
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"06",
        chaptername:"स: एव महान् चित्रकार:",
        //class6sanskritch6
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"07",
        chaptername:"अतिथिदेवो भव",
        //class6sanskritch7
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"08",
        chaptername:"बुद्धि: सर्वार्थसाधिका",
        //class6sanskritch8
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"09",
        chaptername:"यो जानाति स: पण्डित:",
        //class6sanskritch9
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"10",
        chaptername:"त्वम् आपणं गच",
        //class6sanskritch10
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"11",
        chaptername:"पृथिव्यां त्रीणि रत् नानि",
        //class6sanskritch11
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"12",
        chaptername:"आलस्यं हि मनुष्याणां शरीरस्थो महान् रिपु:",
        //class6sanskritch12
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"13",
        chaptername:"सङ्ख्यागणना ननु सरला",
        //class6sanskritch13
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"14",
        chaptername:"माधवस्य प्रियम् अङ् गम् ",
        //class6sanskritch14
    },{
        class:"6",
        name:"Sanskrit",
        chapter:"15",
        chaptername:"वृक्षा: सत्पुरुषा: इव",
        //class6sanskritch15
    },{
        class:"6",
        name:"Science",
        chapter:"01",
        chaptername:"The Wonderful World of Science",
        //class6sciencech1
    },{
        class:"6",
        name:"Science",
        chapter:"02",
        chaptername:"Diversity in the Living World",
        //class6sciencech2
    },{
        class:"6",
        name:"Science",
        chapter:"03",
        chaptername:"Mindful Eating: A Path to a Healthy Body",
        //class6sciencech3
    },{
        class:"6",
        name:"Science",
        chapter:"04",
        chaptername:"Exploring Magnets",
        //class6sciencech4
    },{
        class:"6",
        name:"Science",
        chapter:"05",
        chaptername:"Measurement of Length and Motion",
        //class6sciencech5
    },{
        class:"6",
        name:"Science",
        chapter:"06",
        chaptername:"Materials Around Us",
        //class6sciencech6
    },{
        class:"6",
        name:"Science",
        chapter:"07",
        chaptername:"Temperature and its Measurement",
        //class6sciencech7
    },{
        class:"6",
        name:"Science",
        chapter:"08",
        chaptername:"A Journey through States of Water",
        //class6sciencech8
    },{
        class:"6",
        name:"Science",
        chapter:"09",
        chaptername:"ethods of Separation in Everyday Life",
        //class6sciencech9
    },{
        class:"6",
        name:"Science",
        chapter:"10",
        chaptername:"Living Creatures: Exploring their Characteristics",
        //class6sciencech10
    },{
        class:"6",
        name:"Science",
        chapter:"11",
        chaptername:"Nature’s Treasures",
        //class6sciencech11
    },{
        class:"6",
        name:"Science",
        chapter:"12",
        chaptername:"Beyond Earth",
        //class6sciencech12
    }
    ];



    useEffect(() => {
        const uploadToFirebase = async () => {
          const classes = ["6"];
          const githubToken = import.meta.env.REACT_APP_GITHUB_TOKEN;
          // use in dev only!
    
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
                  const match = fileName.match(/chapter\s*(\d+)/i);
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
                  const dbRef = ref(db, `ncertbooks/class ${classNum}/${subject}/ch${chapterNumber}`);
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