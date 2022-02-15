import { Button, Card, CardGroup } from "react-bootstrap";

function FavoriteMemesList(props) {
  

    return (
        <> <CardGroup style={{ display: "flex" }}>
            {
                props.favoriteList.map(meme => {
                    return (
                        <>
                            <Card key={meme.title}  >
                                <Card.Img

                                    variant="top"
                                    src={meme.image}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        {meme.title}
                                    </Card.Title>
                                    <Card.Text>
                                        {meme.toptext ? meme.toptext : "No text"}
                                    </Card.Text>
                                    <Card.Text>
                                        {meme.comment ? meme.comment : "No Caption Added"}
                                    </Card.Text>
                                   
                                </Card.Body>
                            </Card>

                        </>
                    )

                })
            }
        </CardGroup>
        </>
    )
}

export default FavoriteMemesList; 