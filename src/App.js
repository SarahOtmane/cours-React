// import Avatar from "./Avatar/Avatar";
// import './App.css';

// function App(){

//   // const badgeColor = '#5ad539';
//   // const imgAvatar = 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
//   // const isBadgeGiven = true;
//   // return(
//   //   <div className="App">
//   //     <Avatar badgeColor = {badgeColor} imgAvatar = {imgAvatar} /> 
//   //     <Avatar imgAvatar = {imgAvatar} />
//   //     <Avatar badgeColor = {badgeColor} /> 
//   //     <Avatar/>
//   //   </div>
//   // );

//   const userlist =[
//     {
//       imgAvatar: 'https://randomuser.me/api/portraits/women/77.jpg',
//       badgeColor: "#5ad539"
//     },
//     {
//       imgAvatar: 'https://randomuser.me/api/portraits/men/14.jpg',
//       badgeColor: "#e63946"
//     },
//     {
//       imgAvatar: 'https://randomuser.me/api/portraits/women/16.jpg',
//       badgeColor: "#e63946"
//     }    
//   ]
  
//   return(
//     <div className="App">
//       {/* afficher les avatar a partir d 'un liste avec 2 méthode */}
//         {/* 1. methode des props */}
//           {/* {userlist.map(user => <Avatar imgAvatar={user.imgAvatar} badgeColor={user.badgeColor} />)} */}
//         {/* 2. methode  */}
//           {/* {userlist.map(user => <Avatar {...user} />)} */}

//       {/* filtrer la liste et n'afficher que ceux qui ont le vert */}
//       {userlist.filter(user => user.badgeColor === "#5ad539")
//                .map(user => <Avatar key={user.imgAvatar + user.badgeColor} {...user} />)}
//     </div>
//   )


// }

// export default App;

































// import ProfilCarde from "./ProfilCard/ProfilCard";

// function App(){
//     const person ={
//         pro: true,
//         img: 'https://randomuser.me/api/portraits/women/79.jpg',
//         name: 'Ricky Park',
//         town: 'New York',
//         job: 'Front end developper',
//         skills: ['UI / UX','HTML','CSS','JavaScript','React','Node']
//     },
//     Sarah ={
//         pro: false,
//         name: 'Sarah Otmane',
//         town: 'Paris',
//         job: 'Front end developper',
//         skills: ['UI / UX','HTML','CSS','JavaScript','React','Node']
//     };

//     return(
//         <div className="App">
//             <ProfilCarde {...person}/>
//             <ProfilCarde {...Sarah}/>
//         </div>
//     )
// }

// export default App;











// import InputSpinner from "./InputSpinner/InputSpinner";

// function App(){
//     return(
//         <div className="App">
//             <InputSpinner></InputSpinner>
//         </div>
//     )
// }

// export default App;




// import Rating from "./Rating/Rating";

// function App(){
//     return(
//         <div className="App">
//             <Rating/>
//         </div>
//     )
// }

// export default App;







import Switch from "./SwitchDayMode/SwitchDayMode";
function App(){
    return(
        <div className="App">
            <Switch day={true} />
        </div>
    )
}

export default App;