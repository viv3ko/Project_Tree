import React,{useEffect, useState} from "react";
import {getDocs, collection} from 'firebase/firestore';
import {db} from '../firbase-config';

function ViewPosts(){
    // const [postLists, setPostList] = useState([
        
    //     {id: 1, title: 'Python Script', name: 'Balaji', postText: 'I need a script to scrape webdata for a presentation' },
    //     {id: 2, title: 'Website', name: 'Vivek', postText: 'I need a website to sell my items' },
    //     {id: 3, title: 'AI Chatbot', name: 'Viraj', postText: 'I need a AI Chatbot to give me advice on weather conditions' },
    //     {id: 4, title: 'Arduino', name: 'Nathan', postText: 'I need code to make an LED blink '},
    
        
    // ]

    // );
    const [postLists, setPostList] = useState([]);

    const postCollectionRef = collection(db, 'posts');

    useEffect(()=> {
        const getPosts = async() => {
            const data = await getDocs(postCollectionRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getPosts();
    });


    
    return <div className="homePage"> {postLists.map((post) => {
        return <div className="post">
                {" "}
                <div className = "postHeader">
                    {" "}
                    <div className="title">
                        <h1>
                            {post.title}
                        </h1>
                    </div>
                    <div className = "postTextContainer">
                        {post.postText}
                    </div>
                    <h3>
                        @{post.name}
                        {console.log("FETCHING")}
                    </h3>
                </div>
            </div>;
    })}
    <div className="">

    </div>
    </div>;

}

export default ViewPosts;