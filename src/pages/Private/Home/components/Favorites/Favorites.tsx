import { useEffect, useState } from "react";
import BookList from "../../../../../components/BookList/BookList";
import { useUser } from "../../../../../hooks/userUser";
import BookService from "../../../../../services/libary";

const Favorites = () => {
  const { user } = useUser();

  const [favorites, setFavorites] = useState<IDataBook[]>([]);

  useEffect(() => {
    (async () => {
      console.log(user?.favorites)
      const res = await BookService.getBooks(user?.favorites)
      console.log(res)
      setFavorites(res);
    })()
  }, [user])



  return (
    <>
      {user?.favorites?.length ? (
        <BookList
          list={favorites}
          title="Favorites"
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Favorites;
