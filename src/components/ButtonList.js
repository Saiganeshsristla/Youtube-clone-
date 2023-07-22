import Buttons from "./Buttons";

const ButtonList = () => {
    return(
        <div className="flex">
            <Buttons name="All"/>
            <Buttons name="Live"/>
            <Buttons name="Gaming"/>
            <Buttons name="Music"/>
            <Buttons name="Movies"/>
            <Buttons name="Battleground"/>
            <Buttons name="Tarak Mehta"/>
            <Buttons name="Cricket"/>
            <Buttons name="Football"/>
            <Buttons name="News"/>
            <Buttons name="Comedy"/>
        </div>
    )
}

export default ButtonList;