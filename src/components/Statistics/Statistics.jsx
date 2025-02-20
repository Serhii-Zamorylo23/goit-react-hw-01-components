import PropTypes from "prop-types";
const Statics = ({title,stats}) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        <li className="item">
          <span className="label">{stats.label}</span>
          <span className="percentage">{stats.percentage}</span>
        </li>
      </ul>
    </section>
  );
};
Statics.propTypes={
    stats:PropTypes.object.isRequired,
    title:PropTypes.string
}
export default Statics