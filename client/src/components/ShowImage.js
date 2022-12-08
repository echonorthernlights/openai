import React from 'react'

const ShowImage = ({ link }) => {
    console.log(link)
    return (
        <>
            <section className="image">
                <div className="image-container">
                    <h2 className="msg"></h2>
                    <img src={link} alt="" id="image" />
                </div>
            </section>
        </>
    )
}

export default ShowImage