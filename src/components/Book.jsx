import { Component } from "react";
import "../css/Book.css";
class Book extends Component {
    constructor(props) {
        super();
        this.state = {
            img: ''
        }
        this.SearchBook = this.SearchBook.bind(this);

    }
    SearchBook(e) {
        // const list=this.props.books.map(book=>{
        //     console.log(book.volumeInfo.imageLinks.smallThumbnail)
        //     return book.volumeInfo;
        // })
        const { volumeInfo } = this.props.books[0];
        console.log(this.props.books)
        // this.setState({
        //     img:volumeInfo.imageLinks.thumbnail
        // });
        console.log(volumeInfo.imageLinks.thumbnail)
    }
    render() {
        return (
            <div className="Body">
                {this.props.books.map((book, index) => {
                    const { volumeInfo } = book
                    return (
                        <div className='frame'>
                            <div className="frame_book">
                                <img src={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : 'http://books.google.com/books/content?id=Mdj9DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'} alt="" />
                                <div className="frame_content">
                                    <h1 >{volumeInfo.title}</h1>
                                    <p><strong>Author:</strong>{volumeInfo.authors.join(', ')}</p>
                                    <p>{volumeInfo.publisher}</p>
                                    <a href={volumeInfo.previewLink} target="_blank">More Info</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Book;