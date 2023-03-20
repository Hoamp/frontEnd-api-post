import { useState, useEffect } from "react";

const Index = () => {
    const [posts, setPosts] = useState();
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        // Ambil semua data posts
        const response = await fetch("http://localhost:8000/api/posts");
        const data = await response.json();

        // simpan ke dalam variabel posts
        setPosts(data);
        setLoad(true);
    };

    const handleDelete = async (id) => {
        // jek apakah user yakin menghapus post
        const hapus = confirm("Are you sure");

        if (hapus) {
            // ketika tombol delete dipencet
            const response = await fetch(`http://localhost:8000/api/posts/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((res) => alert(res.message));

            // fetch kembali agar data tidak hilang
            fetchPosts();
        }

        return;
    };

    return (
        <div className="">
            <div className="text-center pt-5">
                <h1 className="text-xl">{posts && posts.message}</h1>
            </div>

            <div className="text-center my-3">
                <a href="/create" className=" py-2 px-3 bg-sky-500 my-5 text-white rounded-xl">
                    New Posts
                </a>
            </div>

            <div className="flex justify-center items-center py-5">
                <table className="border-collapse border border-slate-400 ">
                    <thead>
                        <tr>
                            <th className="border border-slate-300 p-3">No</th>
                            <th className="border border-slate-300 p-3">Title</th>
                            <th className="border border-slate-300 p-3">Author</th>
                            <th className="border border-slate-300 p-3">Description</th>
                            <th className="border border-slate-300 p-3">Tags</th>
                            <th className="border border-slate-300 p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Jika data belum ada */}
                        {!load && (
                            <tr>
                                <td className="border border-slate-300 p-3 text-center text-xl font-bold" colSpan="6">
                                    Data Loading
                                </td>
                            </tr>
                        )}

                        {/* Jika data sudah siap */}
                        {posts &&
                            // mapping data array
                            posts.data.map((post, i) => {
                                return (
                                    <tr key={post.id}>
                                        <td className="border border-slate-300 p-3">{i + 1}</td>
                                        <td className="border border-slate-300 p-3">{post.title}</td>
                                        <td className="border border-slate-300 p-3">{post.author}</td>
                                        <td className="border border-slate-300 p-3">{post.description}</td>
                                        <td className="border border-slate-300 p-3">{post.tags}</td>
                                        <td className="border border-slate-300 p-3">
                                            <button className="py-1 px-2 bg-red-600 text-white rounded-md" onClick={() => handleDelete(post.id)}>
                                                Delete
                                            </button>
                                            <a href={`/edit/${post.id}`} className="py-1 px-2 bg-yellow-600 text-white rounded-md ml-3">
                                                Update
                                            </a>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Index;
