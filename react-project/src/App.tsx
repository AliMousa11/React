import "./App.css";
import "./Message";
import "./components/ExpandableText";
import ExpandableText from "./components/ExpandableText";
function App() {
  return (
    <>
      <ExpandableText length={50}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dicta
        aliquam optio totam sit quas ratione. Assumenda deserunt quasi et
        commodi natus delectus quibusdam, expedita eligendi quia, nemo dolorum
        quas ut placeat neque quisquam! Nostrum id nemo numquam eos dolore
        reprehenderit assumenda suscipit ratione, nobis totam voluptates! Quia
        nostrum eligendi, nemo nesciunt nisi iure repellendus neque consequatur
        ad aperiam saepe repudiandae voluptates quisquam veritatis soluta quos
        quidem veniam molestias laudantium porro enim ex culpa? Officia repellat
        atque doloribus fuga id iste iure neque dolores velit, porro culpa
        officiis deserunt debitis quidem veritatis laborum, tenetur enim
        distinctio cupiditate repudiandae amet aperiam?
      </ExpandableText>
    </>
  );
}

export default App;
