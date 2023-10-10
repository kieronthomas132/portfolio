const BlurFooter = () => {
    return (
        <div>
            <div className="h-[200px] w-[350px] md:w-[500px] bg-orange-700 rounded-full absolute blur-[90px] opacity-90 bottom-0 md:left-[40%] left-[5%]" />
            <div className="h-[200px] w-[250px] md:w-[500px] bg-purple-900 rounded-full absolute blur-[90px] opacity-50 bottom-0 md:left-[20%] left-[5%]" />
            <div className="h-[250px] w-[300px] md:w-[400px] bg-blue-700 rounded-full absolute blur-[90px] opacity-20 bottom-0 md:left-[38%] left-[5%]" />
            <div className="h-[250px] w-[300px] md:w-[400px] bg-red-700 rounded-full absolute blur-[90px] opacity-20 bottom-0 md:left-[28%] left-[5%]" />
        </div>
    );
};

export default BlurFooter;

