const Create = () => {
    const handleSubmit = (el) => {
        el.preventDefault();

        // simpan semua inputan user
        const title = el.target.title.value;
        const description = el.target.description.value;
        const tags = el.target.tags.value;
        const author = el.target.author.value;

        // jalankan fungsi storeData dengan parameter di atas
        storeData(title, description, tags, author);
    };

    const storeData = async (title, description, tags, author) => {
        // simpan menjadi sebuah objek
        const dataPost = {
            title,
            description,
            tags,
            author,
        };

        // store data ke api
        const storeData = await fetch("http://localhost:8000/api/posts", {
            method: "POST",
            body: JSON.stringify(dataPost),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            // kembalikan pesan
            .then((res) => alert(res.message));
    };

    return (
        <div className="">
            <h1 className="text-center py-2 text-xl">Create New Post</h1>
            <form action="" onSubmit={(el) => handleSubmit(el)} className="flex justify-center">
                <div className="border border-sky-300 py-7 px-9">
                    <div className="mb-3">
                        <label htmlFor="" className="block">
                            Title
                        </label>
                        <input type="text" className="border px-4 py-1 border-sky-200 focus:ring-sky-300 focus:ring focus:outline-none" name="title" placeholder="Title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="block">
                            Description
                        </label>
                        <input type="text" className="border px-4 py-1 border-sky-200 focus:ring-sky-300 focus:ring focus:outline-none" name="description" placeholder="Description" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="block">
                            Author
                        </label>
                        <input type="text" className="border px-4 py-1 border-sky-200 focus:ring-sky-300 focus:ring focus:outline-none" name="author" placeholder="Author" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="block">
                            Tags
                        </label>
                        <input type="text" className="border px-4 py-1 border-sky-200 focus:ring-sky-300 focus:ring focus:outline-none" name="tags" placeholder="Tags" />
                    </div>

                    <div className="text-center">
                        <button className=" py-2 px-3 bg-sky-500 my-5 text-white rounded-xl mr-3">Create Post</button>
                        <a href="/" className=" py-2 px-3 bg-sky-500 my-5 text-white rounded-xl">
                            Back
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Create;
