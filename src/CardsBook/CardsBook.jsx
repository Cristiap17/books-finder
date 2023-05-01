import "./CardsBook.css"

function CardsBook({ urlInfo, titleBook, image,  authors, publisher, published, subtitle }) {
    return (
        <div className="CardDesing">
            <h5><a href={urlInfo}>{titleBook}</a></h5>
            <div className="ImgAndDescriptionContainer">
                <img src={image} alt="" />
                <div>
                    <p>
                        <strong>Author:</strong> {authors}
                    </p>
                    <p>
                        <strong>Publisher:</strong> {publisher}
                    </p>
                    <p>
                        <strong>Published:</strong> {published}
                    </p>
                    {subtitle}
                </div>
            </div>
            
        </div>
    )
}

export { CardsBook }