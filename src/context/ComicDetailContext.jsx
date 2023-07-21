import { createContext } from 'react';
import useComicDetail from '../hooks/useComicsDetails';

export const ComicDetailContext = createContext();

const ComicDetailProvider = ({ children }) => {
  const { loading, comicId, comicDetail, setLoading, setComicId, setcomicDetail } =
    useComicDetail();

  return (
    <ComicDetailContext.Provider
      value={{
        loading,
        comicId,
        comicDetail,
        setLoading,
        setComicId,
        setcomicDetail,
      }}
    >
      {children}
    </ComicDetailContext.Provider>
  );
};

export default ComicDetailProvider;