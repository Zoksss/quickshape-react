const InvTheme = (props) => {
    return (
        <button className="theme-inv-button" onClick={(() => props.equipTheme(props.themeName))}>
            <img className="theme-inv-button-image" src={process.env.PUBLIC_URL+"/"+props.img} alt="" />
        </button>
    );
}

export default InvTheme;
