const BlurFooter = () => {
    return (
        <div>
            <div className="absolute bottom-0 rounded-full bg-orange-700 opacity-90 h-[200px] w-[350px] blur-[90px] left-[5%] md:w-[500px] md:left-[40%]" />
            <div className="absolute bottom-0 rounded-full bg-purple-900 opacity-50 h-[200px] w-[250px] blur-[90px] left-[5%] md:w-[500px] md:left-[20%]" />
            <div className="absolute bottom-0 rounded-full bg-blue-700 opacity-20 h-[250px] w-[300px] blur-[90px] left-[5%] md:w-[400px] md:left-[38%]" />
            <div className="absolute bottom-0 rounded-full bg-red-700 opacity-20 h-[250px] w-[300px] blur-[90px] left-[5%] md:w-[400px] md:left-[28%]" />
        </div>
    );
};

export default BlurFooter;

