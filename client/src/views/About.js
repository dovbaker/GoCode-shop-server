import { useParams } from "react-router-dom";

const About = () => {
  const { id } = useParams();
  console.log(id);
  return <h6> about!!! {id} </h6>;
};

export default About;
