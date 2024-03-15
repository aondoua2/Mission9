// import a bowling logo
import logo from './bowling.png';

function Header(props: any) {
  return (
    <header className="row navbar navbar-dark bg-dark">
      <div className="col-4">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col subtitle">
        <h1 className="text-white">{props.title}</h1>
        <p className="text-white">We ❤️ bowling!</p>
      </div>
    </header>
  );
}

export default Header;

//   function Header() {
//     return (
//       <header className="row">
//         <div className="col-4">
//           <img src={logo} className="logo" alt="logo" />
//         </div>
//       </header>
//     );
//   }
