import FavoriteMemesList from './FavoriteMemesList';
function FavList(props){
 return (
     <>
     <h1>This is my favorite list of memes</h1>

     <main>
                {props.favoriteList && (

                    <FavoriteMemesList favoriteList={props.favoriteList} />
                )}
            </main>
     </>git add
 )
}

export default FavList;