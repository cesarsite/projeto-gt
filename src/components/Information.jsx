const Information = ({ title, informations }) => {
    
    return (
      <div className="information">
        <h3 className="information-title">{title}</h3>

        <ul className="information-list">
          {informations.map((info, index) => (
            <li key={index} className="information-item">
              <a href={info.link} className="information-link">
                {info.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Information;
  