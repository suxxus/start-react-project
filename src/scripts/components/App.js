export default (React) => {
  const $ = React.createElement;
  const {
        string,
    } = React.PropTypes;

  const comp = ({ text }) =>
        $('div', {}, text);

  comp.PropTypes = {
    text: string.isRequired,
  };

  return comp;
};
