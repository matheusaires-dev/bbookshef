import BookList from "../../../../../components/BookList/BookList";
import { useLibary } from "../../../../../hooks/useLibary";

const Suggested = () => {
  const { collection, searched } = useLibary();

  const suggested = searched ? searched : collection;
  console.log(suggested)

  return (
    <BookList list={suggested} title="Suggested"/>
  );
};

export default Suggested;
