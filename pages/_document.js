import Document, {Head, Main, NextScript} from 'next/document';


class MyDocument extends Document {
    render(){
        return(
            <html lang="en">
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }    
}

export default MyDocument