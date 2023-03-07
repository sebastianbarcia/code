import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";

const code = `
  function LikeButton(){
    const [likes, increaseLikes] = useState(1);
    return(
      <div>
        <p className="likes">{likes}</p>
        <button
        className="button"
        onClick = {() => increaseLikes(likes + 1)}>Incrementar</button> 
      </div>
      )
    }
`;

const sidebarItems = [
  { id: 1, title: "reactJS", icon: faReact , name:"react" },
  { id: 2, title: "HTML - CSS - JS", icon: faJs , name:"webDev"},
  { id: 3, title: "HOME", icon: faJs , name:""}
];


export default code;

export {sidebarItems}