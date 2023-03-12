import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
    const { id } = useParams();
    const [post, setPosts] = useState();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await fetch(`http://localhost:8000/api/posts/${id}`);
        const data = await response.json();
        setPosts(data);
    };

    console.log(post);

    return <h1>hi</h1>;
};

export default Edit;
