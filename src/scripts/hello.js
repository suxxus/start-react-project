export default React => {

    const {
        string
    } = React.PropTypes;

    const comp = ({ str }) => {
        return ( <h1 className="dummy">{ str }</h1>);
    };

    comp.PropTypes = {
        str: string
    };

    return comp;
};
