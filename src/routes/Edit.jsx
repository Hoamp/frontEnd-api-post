import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [tags, setTags] = useState();
    const [description, setDescription] = useState();
    const [author, setAuthor] = useState();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        // fetching data sesuai dengan id
        const response = await fetch(`http://localhost:8000/api/posts/${id}`);
        const data = await response.json();

        // ubah semua data
        setTags(data.data.tags);
        setTitle(data.data.title);
        setDescription(data.data.description);
        setAuthor(data.data.author);
    };

    // ketika tombol update dipencet
    const handleSubmit = async (el) => {
        el.preventDefault();

        updateData();
    };

    const updateData = async () => {
        // simpan menjadi sebuah objek
        const dataPost = {
            title,
            description,
            tags,
            author,
        };

        // update data lama dengan data baru
        const updateData = await fetch(`http://localhost:8000/api/posts/${id}`, {
            method: "PUT",
            body: JSON.stringify(dataPost),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            // kembalikan message
            .then((res) => alert(res.message));
    };

    return (
        <div className="">
            <h1 className="text-center py-2 text-xl">Update Post</h1>
            <form action="" onSubmit={(el) => handleSubmit(el)} className="flex justify-center">
                <div className="border border-sky-300 py-7 px-9">
                    <div className="mb-3">
                        <label htmlFor="" className="block">
                            Title
                        </label>
                        <input type="text" className="border px-4 py-1 border-sky-200 focus:ring-sky-300 focus:ring focus:outline-none" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="block">
                            Description
                        </label>
                        <input
                            type="text"
                            className="border px-4 py-1 border-sky-200 focus:ring-sky-300 focus:ring focus:outline-none"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="block">
                            Author
                        </label>
                        <input type="text" className="border px-4 py-1 border-sky-200 focus:ring-sky-300 focus:ring focus:outline-none" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="block">
                            Tags
                        </label>
                        <input type="text" className="border px-4 py-1 border-sky-200 focus:ring-sky-300 focus:ring focus:outline-none" name="tags" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags" />
                    </div>

                    <div className="text-center">
                        <button className=" py-2 px-3 bg-sky-500 my-5 text-white rounded-xl mr-3">Update Post</button>
                        <a href="/" className=" py-2 px-3 bg-sky-500 my-5 text-white rounded-xl">
                            Back
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Edit;
