/* eslint-disable react/prop-types */


const SectionIntro = ({heading, intro}) => {
    return (
        <div className="w-[350px] text-center mx-auto my-12">
            <h3 className="text-xl text-orange-300">---{heading}---</h3>
            <h3 className="border-y-2 py-3 font-semibold border-black text-3xl">{intro}</h3>
        </div>
    );
};

export default SectionIntro;