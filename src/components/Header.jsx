const Header = ({ title }) => {
    return (
        <div className="max-w-full bg-slate-200 flex justify-center items-center py-4 tracking-widest font-bold uppercase text-2xl">
            <h2>{title}</h2>
        </div>
    );
};

export default Header;
