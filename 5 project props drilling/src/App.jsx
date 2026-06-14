// import User from "./components/User"

// const App = () => {
//   // let arr = [10, 20, 30]
//   const userArr = [
//     {
//       user:'Hassan',
//       age: 20
//     },
//     {
//       user:'Zain',
//       age: 20
//     },
//     {
//       user:'Umar',
//       age: 40
//     }
//   ]
//   return (
//     // <div className="parent">
//     //   <User name= 'Hassan'/>
//     //   <User name= 'Zain'/>
//     // </div>

//     // <div className="parent">
//     //   <User name = {arr[0]} />
//     //   <User name = {arr[1]} />
//     //   <User name = {arr[2]} />
//     // </div>

//     <div className="parent">
//       {userArr.map(function(e){
//         // return e
//         return <h1>{e.user}</h1>
//         // return <h1>{e/2}</h1>
//         // return <h1>{e*2}</h1>
//       })}
//     </div>
//   )
// }

// export default App

import Card from "./components/Card"

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://img.icons8.com/color/144/google-logo.png",
      nameOfCompany: "Google",
      datePosted: "2 days ago",
      post: "Software Engineer, Frontend",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 65,
      location: "San Francisco, USA"
    },
    {
      brandLogo: "https://img.icons8.com/ios-filled/150/000000/mac-os.png",
      nameOfCompany: "Apple",
      datePosted: "5 days ago",
      post: "iOS Application Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 95,
      location: "London, UK"
    },
    {
      brandLogo: "https://img.icons8.com/color/144/meta--v1.png",
      nameOfCompany: "Meta",
      datePosted: "1 week ago",
      post: "React Native Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 88,
      location: "Berlin, Germany"
    },
    {
      brandLogo: "https://img.icons8.com/color/144/amazon.png",
      nameOfCompany: "Amazon",
      datePosted: "3 days ago",
      post: "Cloud Support Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 55,
      location: "Toronto, Canada"
    },
    {
      brandLogo: "https://img.icons8.com/color/144/netflix-desktop-app.png",
      nameOfCompany: "Netflix",
      datePosted: "4 weeks ago",
      post: "UI/UX Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: 110,
      location: "Tokyo, Japan"
    },
    {
      brandLogo: "https://img.icons8.com/color/144/microsoft.png",
      nameOfCompany: "Microsoft",
      datePosted: "12 hours ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 60,
      location: "Sydney, Australia"
    },
    {
      brandLogo: "https://img.icons8.com/color/144/spotify.png",
      nameOfCompany: "Spotify",
      datePosted: "6 days ago",
      post: "Backend Developer (Node.js)",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 82,
      location: "Stockholm, Sweden"
    },
    {
      brandLogo: "https://img.icons8.com/color/144/twitterx--v2.png",
      nameOfCompany: "X (Twitter)",
      datePosted: "10 days ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 70,
      location: "Singapore"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Adobe_logo.jpg",
      nameOfCompany: "Adobe",
      datePosted: "3 weeks ago",
      post: "DevOps Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 98,
      location: "Paris, France"
    },
    {
      brandLogo: "https://img.icons8.com/color/144/linkedin.png",
      nameOfCompany: "LinkedIn",
      datePosted: "1 day ago",
      post: "Data Scientist",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: 92,
      location: "Dublin, Ireland"
    }
  ];
  return (
    <div className="parent">
      {jobOpenings.map(function (e, idx) {
        return (
          <div key={idx}>
            <Card brandLogo={e.brandLogo} company={e.nameOfCompany} datePosted={e.datePosted} post={e.post} tag1={e.tag1} tag2={e.tag2} pay={e.pay} location={e.location} />
          </div>
        )
      })}
    </div>
  )
}

export default App