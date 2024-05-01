const ProfileAvailableToWork = () => {
    return (
        <div
            className="p-3 relative bg-list_bg rounded-full ml-[20px] gap-2 w-[180px] justify-center flex items-center">
            <div className="bg-green-500 animate-ping z-10 h-[10px] rounded-full w-[10px]"/>
            <div className="bg-green-500 absolute left-[24.5px] z-10 h-[10px] rounded-full w-[10px]"/>
            <p className="text-gray_text text-sm font-[500]">
                Available To Work
            </p>
        </div>
    );
}

export default ProfileAvailableToWork;