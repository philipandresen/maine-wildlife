import React from 'react';
import './styles.scss';
import Header from "../../Components/Header/Header";
import Post from "../../Components/Post/Post";
import image1 from "../../images/Chickadee_2.JPG";
import image2 from "../../images/Squirrel_1.jpg";

export default function () {

    return (
        <>
            <section>
                <Header/>
                <Post image={image1} title={'Black-Capped Chickadee'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet orci eu lacus egestas
                    mollis. Suspendisse pellentesque hendrerit gravida. Cras consequat molestie risus, vel pulvinar
                    velit efficitur sit amet. Integer tristique laoreet ex feugiat rhoncus. Phasellus ut ex ornare,
                    eleifend massa ac, aliquam magna. In turpis purus, tempus eget lacus vel, pharetra sollicitudin
                    lorem. Fusce tempus enim augue, posuere cursus magna consectetur sed. Fusce id enim tempor,
                    pellentesque justo vitae, mollis sem.
                    <br/><br/>
                    Fusce in ipsum purus. Proin felis neque, condimentum eget condimentum cursus, maximus quis
                    mauris. Nunc et imperdiet sem. Nulla ut sollicitudin tellus, id pharetra ipsum. Fusce gravida
                    molestie viverra. Sed eget diam ut lacus sodales auctor. Suspendisse ut mollis urna.
                    <br/>
                    <br/>
                    One of the most powerful and convenient CSS Grid features is that, in addition to explicit
                    column sizing, we have the option to repeat-to-fill columns in a Grid, and then auto-place items
                    in them. More specifically, our ability to specify how many columns we want in the grid and then
                    letting the browser handle the responsiveness of those columns for us, showing fewer columns on
                    smaller viewport sizes, and more columns as the screen estate allows for more, without needing
                    to write a single media query to dictate this responsive behavior.
                    We’re able to do that using just one line of CSS — the one-liner that reminds me of when
                    Dumbledore just waved his wand in Horace’s apartment and “the furniture flew back to its
                    original places; ornaments reformed in midair, feathers zoomed into their cushions; torn books
                    repaired themselves as they landed upon their shelves…”.
                    This magical, media-query-less responsiveness is achieved using the repeat() function and the
                    auto placement keywords.
                    To summarize, the repeat() function allows you to repeat columns as many times as needed. For
                    example, if you’re creating a 12-columns grid, you could write the following one-liner:
                </Post>
                <Post image={image2} title={'American Red Squirrel'}>
                    This post has significantly less text.
                </Post>
            </section>
            <section style={{height: '1024px'}}>
                Content
            </section>
        </>

    )
}
